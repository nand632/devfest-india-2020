const functions = require('firebase-functions');
const admin = require('firebase-admin');
// SandGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("AIzaSyBHLgAg8omFtnUfTRdPafYyN_AF_1glF3o");

admin.initializeApp();

const sendSendGridMail = async (snap) => {
    try {
        const docId = snap.id;
        const name = snap.data().name;
        const email = snap.data().email;
        const fname = name.split(' ')[0]
        let info = await sgMail.send({
            // NAME <EMAILID>
            from:"DevFest India Team <no-reply@devfestindia.com>",
            dynamicTemplateData:{name:fname},
            to: email,
            templateId:"noreply@.firebaseapp.com",
        }).then(res=>{
            console.log('Called')
            console.log(res)
        }).catch(e=>{
            console.log(e)
        })
        admin.firestore().collection('edata').doc(docId).update({
            status: 'Email Sent'
        });
    } catch (e) {
        console.log(e);
    }
}

exports.sendConfirmationEmail = functions.firestore.document('edata/{id}').onCreate((snap, context) => {
    sendSendGridMail(snap);
});

