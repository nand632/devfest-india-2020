<template >
  <v-main class="ma-0">
    <v-container
      fluid
      class="pb-0" 
      :class="this.$vuetify.theme.dark == true?'grey darken-4 elevation-1':'white-border white'"
    >
      <v-row justify="start" align="center">
        <v-col md="8" offset-md="1" offset-lg="1" lg="8" sm="11" cols="12">
          <v-container>
            <v-row  class="">
              <v-col class="pb-5">
                <h1 class="google-font mb-0" style="font-size:180%;color:#3766FC">Check out our speaker lineup</h1>
                <p class="google-font" style="width:100%;margin-top:20px;font-size:100%">Whatever your challenge, see how these leaders on the front line of transformation, innovation, and exploration can help solve it with you. Get to know the inspiring minds right here.</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="py-0 my-0">
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col  md="12" lg="12" sm="12" cols="12" class="py-0 my-0">
          
          <v-container>
            <v-row class="py-0 my-0">
              <v-col
                md="3"
                lg="2"
                
                sm="4"
                cols="6"
                class="pa-1 mb-0"
                v-for="(item, index) in SpeakersData"
                :key="index"
              >
                <Speakers :data="item" :SessionDetails="SessionDetails" />
              </v-col>
              <!-- <ComingSoon class="text-center" /> -->
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col md="8" xl="7">
          <SocialShare/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import SpeakersData from "@/assets/data/speakers.json";
import SessionDetails from "@/assets/data/sessions.json";
export default {
  name: "SpeakersPage",
  components: {
    Speakers:()=>import('@/components/speakers/SpeakerDetails'),
    // ComingSoon:()=>import('@/components/common/ComingSoon'),
    SocialShare: () => import("@/components/common/SocialInfo")
  },
  data: () => ({
    SpeakersData: [],
    SessionDetails:[]
  }),
  mounted() {
    this.SpeakersData = this.sortByName(SpeakersData)
    this.SessionDetails = SessionDetails.sort((a,b)=>{
      return (a.id > b.id)?1:-1;
    });
  }
};
</script>

<style scoped>
/* .white-border{
  border-bottom: 1px solid #e0e0e0 !important;
} */
</style>