<template>

  <v-main class="m-0">
    <v-container fluid class="mt-5">
      <v-row align="center" justify="center" class="">
        <v-col md="10" lg="9" sm="12" class="my-4">
          <HomeScreen/>
        </v-col>
      </v-row>

            <!-- About -->

            <v-row justify="center" align="center">
        <v-col md="11" lg="10" sm="11" xs="12" class="pt-3">
          <aboutHeader />
        </v-col>
      </v-row>

       <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="11" lg="10" sm="11" xs="12" class>
          <AboutCommunity />
        </v-col>
      </v-row>
    </v-container>

            <!-- About End  -->

            <!-- Events  -->
          <v-row justify="center" align="center">
        <v-col md="12" sm="11" lg="10" xs="12" class="py-0">
          <events />
        </v-col>
      </v-row>


                <!-- Events End  -->
       <!-- FeatureEvents -->
        <v-row justify="center" align="center" class="py-5" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'">
        <v-col md="12" sm="11" lg="10" xs="12" class="py-0">
          <featureEvents />
        </v-col>
      </v-row>
      
      <!-- FeaturesEvents Ends -->
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <Partners />
        </v-col>
      </v-row>

      <!-- <v-row align="center" justify="center" class="">
        <v-col md="10" lg="9" sm="12" class="my-4">
          <Stats/>
        </v-col>
      </v-row> -->
        <!-- Partners -->
        
      
        <!-- Partners End  -->

      <!-- Follow Us -->
      
      <v-row align="center" justify="center" class="">
        <v-col md="10" lg="10" sm="10" class="text-center">
          <v-divider></v-divider>
          <br>
          <FollowUs class="mt-10 mb-0" />
        </v-col>
      </v-row>
      </v-container>
  </v-main>
</template>

<script>
import service from '@/services/appservices'
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    FollowUs: () => import("@/components/home/follow"),
    Partners:()=>import('@/components/home/Partners'),
    HomeScreen: ()=> import('@/components/home/homescreen'),
    // Stats: ()=> import('@/components/home/Stats')
    featureEvents:()=>import('@/components/home/FeaturesEvents'),
    aboutHeader: () => import("@/components/home/AboutHeader"),
    AboutCommunity:()=>import("@/components/home/AboutCommunity"),    
    events:()=>import('@/components/home/Events'),
    
    
  },
  data:()=>({
    showFeatureEventStatus:false,
  }),
  mounted(){
    this.getFeaturesEventID();
  },
  computed:{
    ...mapState(["config"])
  },
  methods:{
    getFeaturesEventID(){
      service.getFeaturesEvents().then(res=>{
          (res.success) ?
            (res.data.length>0) ?
              this.showFeatureEventStatus = true :
                this.showFeatureEventStatus = false
            : this.notFound = true
      })
    }
  }
}
</script>
