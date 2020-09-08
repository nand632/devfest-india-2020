
import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXX"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  firebase:firebase
};