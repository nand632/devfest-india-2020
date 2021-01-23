<template>
  <v-container fluid class="py-0">
    <!-- Desktop Screen -->
    <v-row justify="center" align="center" class="hidden-sm-and-down py-8">
      <v-col md="6" cols="12" class="text-center">
        <v-img
          class="white"
          transition="fade-transition"
          style="width:90%;margin-left:auto;margin-right:auto"
          :src="require('@/assets/img/Devfair-hero.png')"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <p class="google-font mt-4 mb-3" style="font-size:120%">
          <v-icon class="mb-1" style="color:red">mdi-calendar-text</v-icon>&nbsp;March 02<sup>th</sup>-10<sup>th</sup>,
          2021
          <span style="color:#3766FC">
            <b>|</b>
          </span>
          &nbsp;
          <v-icon class="mb-1" style="color:red">mdi-access-point</v-icon>&nbsp;Online
        </p>

        <p class="google-font mt-4 mb-5">
          <b style="color:#3766FC;font-size:120%">DevFair India</b> - India's
            biggest developer convocation with 100+ DSC communities. <br />Developer
             Community-based initiatives.
        </p>

        <v-btn
          dark
          color="#3766FC"
          depressed
          style="text-transform: capitalize;border-radius:4px;height:40px;padding:0 18px;"
          to="/registration"
          class="google-font mr-3 mb-3"
          >Register</v-btn
        >

        <v-btn
          depressed
          v-if="maindata.badgeurl"
          style="text-transform: capitalize;border-radius:4px;border:1px solid #e0e0e0;color:#3766FC;background-color:white;height:40px;padding:0 18px;"
          :href="maindata.badgeurl"
          class="google-font mr-3 mb-3"
          target="_blank"
          >Get your Profile Badge</v-btn
        >

        <v-btn
          text
          style="text-transform: capitalize;border-radius:4px;color:#3766FC;background-color:white;height:40px;padding:0 18px;"
          v-if="maindata.mainhashtag"
          :href="'https://twitter.com/hashtag/'+maindata.mainhashtag"
          class="google-font mt-0 mb-3"
          target="_blank"
          >#DevFairIndia</v-btn
        >
      </v-col>
      <v-col md="6" cols="12" class="text-center">
        <Timer deadline="March 02, 2021" />
      </v-col>
    </v-row>
    <!-- Desktop Screen -->
    <!-- Mobile Screen -->
    <v-row justify="center" align="center" class="hidden-md-and-up py-0 my-0">
      <v-col md="6" cols="12" class="text-center py-0 my-0">
        <v-img
          class="white"
          transition="fade-transition"
          style="width:90%;margin-left:auto;margin-right:auto"
          :src="require('@/assets/img/Devfair-hero.png')"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <p class="google-font mt-4 mb-3" style="font-size:120%">
          <v-icon class="mb-1" style="color:red">mdi-calendar-text</v-icon>&nbsp;March 02<sup>th</sup>-10<sup>th</sup>,
          2021
          <br />
          <v-icon class="mb-1" style="color:red">mdi-access-point</v-icon>&nbsp;Online
        </p>
        <Timer deadline="March 02, 2021" />

        <p class="google-font mt-4 mb-5">
          <b style="color:#3766FC;font-size:120%">DevFair India</b> - India's
            biggest developer convocation with 100+ DSC communities. <br />Developer
             Community-based initiatives.
        </p>

        <v-btn
          dark
          color="#3766FC"
          depressed
          style="text-transform: capitalize;border-radius:4px;height:40px;padding:0 18px;"
          to="/registration"
          class="google-font ma-1"
          >Register</v-btn
        >

        <v-btn
          depressed
          v-if="maindata.badgeurl"
          style="text-transform: capitalize;border-radius:4px;border:1px solid #e0e0e0;color:#3766FC;background-color:white;height:40px;padding:0 18px;"
          :href="maindata.badgeurl"
          class="google-font ma-1"
          target="_blank"
          >Get your Profile Badge</v-btn
        >
        <v-btn
          text
          style="text-transform: capitalize;border-radius:4px;color:#3766FC;background-color:white;;height:40px;padding:0 18px;"
          v-if="maindata.mainhashtag"
          :href="'https://twitter.com/hashtag/'+maindata.mainhashtag"
          class="google-font ma-1"
          target="_blank"
          >#DevFairIndia</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import maindata from '@/assets/data/main.json'
export default {
  name: "HomeScreen",
  data:()=>({
    maindata:maindata
  }),
  components: {
    Timer: () => import("@/components/home/Timer"),
  },
};
</script>
