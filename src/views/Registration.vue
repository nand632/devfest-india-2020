<template>
  <v-main class>
    <Snackbar
      :message="snackBarMessage"
      :isShow.sync="isSnackBarVisible"
      :color="snackBarColor"
      :timeout="snackBarTimeOut"
    />

    <v-container fluid class="mt-4">
      <v-row justify="center" align="center">
        <v-col md="7" sm="8" lg="5" cols="12">
          <div style="padding:10px;">
            <h2 class="google-font">
              <span style="font-size:120%">DevFair India </span>:
              <span style="color:#0005DF">Registration</span>
            </h2>
            <p class="google-font">
              India's biggest developer conclave with 40+ GDG
              communities.
              <br />Separated by distance, united by passion.
            </p>
            <p class="google-font">
              The mega event is set to happen on
              <b>Mar 02<sup>th</sup> to 10<sup>th</sup>, 2021</b> with the
              line-up of expert speakers, multiple tracks, fun engagements and many more.
            </p>
          </div>

          <v-container fluid>
            <!-- Google Sign In -->
            <v-row>
              <v-col md="2" cols="2">
                <v-avatar>
                  <img
            :src="require('@/assets/img/explore/Open.png')"                    
            class="mb"
            height="150%"
            width="150%"                    
        >
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">  
                       
                <h3 class="google-font">Register Here</h3>
                
                <div>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeshO-IKtS6cNbU2yC6cNLRtPbtLmDeA-Ir0IomZePr4H5S_Q/viewform?usp=sf_link" target="blank">
                  <v-btn
                    class="mt-3"
                    depressed
                    style="text-transform: capitalize"
                    
                    dark color="#0005DF"
                  >
                    <v-icon size="20px"></v-icon>Register Here
                  </v-btn>
                  </a>
                  </div>                             
                  <br>
                <p
                  class="google-font"
                >Register to get your entry tickets of the "Festival of Developers".</p>

                <v-list-item v-if="userLoginIn" class="ml-0 pl-0">
                  <img
            :src="require('@/assets/img/explore/startup.png')"                    
            class="mb"
            height="100%"
            width="150%"                    
        >

                  <v-list-item-content>
                    <v-list-item-title class="google-font" v-html="user.displayName"></v-list-item-title>
                    <v-list-item-subtitle v-html="user.email"></v-list-item-subtitle>
                    <v-list-item-subtitle v-on:click="logout" style="color:blue;cursor: pointer">
                      <u>Logout as a {{ user.email }}</u>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                
                
                
                <!-- <EmailPass/> -->
              </v-col>
            </v-row>
            <!-- Google Sign In -->

            

            
            
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import maindata from '@/assets/data/main.json'
import FDK from "../config/firebase";
export default {
  data: () => ({
    maindata: maindata,
    // Snackbar
    snackBarMessage: "",
    isSnackBarVisible: false,
    snackBarColor: "green",
    snackBarTimeOut: 5000,
    
    rules: {
      required: (value) => !!value || "This field is required.",
      radiobtn: (value) => {
        return value.length > 0 || "This field is required.";
      },
      checkboxbtn: (value) => {
        return value.length > 0 || "At least one item should be selected.";
      },
      socialcheckboxbtn: (value) => {
        return value.length > 0 || "At least one item should be selected.";
      },
      
    },
    istcChecked: false,
    showLoginBtn: true,
    userLoginIn: false,
    
    user: {},

    response: {
      name: "",
      email: "",
      city: "",
      country: "",
      org: "",
      theme: [],
      role: "",
      gender: "",
      experience: "",
      code: "",
      knowAbout: [],
      share: "",
      otherCode: "",
    },
  }),
  components: {
    Snackbar: () => import("@/components/common/Snackbar"),
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      var self = this;
      FDK.auth.onAuthStateChanged(function (user) {
        if (user) {
          self.showLoginBtn = false;
          self.userLoginIn = true;
          self.user = user;
          self.response.email = user.email;
          self.response.name = user.displayName;

          FDK.firestore
            .collection("edata")
            .doc(user.uid)
            .get()
            .then((res) => {
              if (res.data()) {
                self.userForm = false;
                self.userSuccess = false;
                self.userSubmitedAlready = true;
              } else {
                self.userForm = true;
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }
      });
    },
    signIn() {
      var self = this;
      var provider = new FDK.firebase.auth.GoogleAuthProvider();
      FDK.firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          var token = result.credential.accessToken;
          var user = result.user;

          self.userLoginIn = true;
          self.userForm = true;
          self.response.email = user.email;
          self.response.name = user.displayName;
          self.user = user;
          self.snackBarMessage = "Signed In with " + user.email;
          self.isSnackBarVisible = true;
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    },
    saveData() {
      if (this.$refs.form.validate()) {
        this.saveloading = true;
        FDK.firestore
          .collection("edata")
          .doc(this.user.uid)
          .set({
            name: this.response.name,
            email: this.response.email,
            image: this.user.photoURL,
            city: this.response.city,
            country: this.response.country,
            gender: this.response.gender,
            experience: this.response.experience,
            share: this.response.share,
            knowAbout: this.response.knowAbout,
            theme: this.response.theme,
            code:
              !!this.response.code.toUpperCase() &&
              this.response.code.toUpperCase() !== "OTHERS"
                ? this.response.code.toUpperCase()
                : this.response.otherCode.toUpperCase(),
            role: this.response.role,
            org: this.response.org,
            date: new Date(),
          })
          .then(() => {
            this.userSuccess = true;
            this.saveloading = false;
            this.userForm = false;
          })
          .catch((e) => {
            this.saveloading = false;
          });
      } else {
        alert("Please fill the required fields before submitting the form :)");
      }
    },
    logout() {
      var self = this;
      FDK.auth
        .signOut()
        .then(function () {
          self.userLoginIn = false;
          self.userForm = false;
          self.userSuccess = false;
          self.userSubmitedAlready = false;
          self.showLoginBtn = true;
          self.snackBarMessage = "Logged out from " + self.user.email;
          self.isSnackBarVisible = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>