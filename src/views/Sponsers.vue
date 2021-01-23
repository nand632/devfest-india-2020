<template>
  <v-main class="">
    <v-container
      fluid
    >
      <v-row justify="start" align="center" class="mt-5">
        <v-col md="8" offset-md="1" offset-lg="1" lg="8" sm="11" cols="12">
            <h1 class="google-font mb-5" style="color:#3766FC">
                Our Sponsers
            </h1>
            <p class="google-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad incidunt nam. Deserunt accusamus minima expedita esse labore nisi error ipsum tenetur, vero aspernatur accusantium dolorem quidem reiciendis iste sequi.
            </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="py-0 my-0">
      <v-row justify="center" align="center" class="py-0 my-0">
        <!-- style="margin-top: -150px;" -->
        <v-col md="12" lg="12" sm="12" cols="12" class="py-0 my-0">
          <v-col align="center" cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5">
                <p class="google-font mb-0" style="font-size:130%">Education Sponsers</p>
            </v-col>
          <v-container>
            <v-row class="py-0 my-0">
              <v-col
                md="3"
                lg="2"
                sm="4"
                cols="6"
                class="pa-1 mb-0"
                v-for="(item, index) in TeamData"
                :key="index"
              >
                <TeamMember :data="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-col align="center" cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5">
                <p class="google-font mb-0" style="font-size:130%">Technical Sponsers</p>
            </v-col>
    <v-container fluid class="py-0 my-0">
      <v-row justify="center" align="center" class="py-0 my-0">
        <!-- style="margin-top: -150px;" -->
        <v-col md="12" lg="12" sm="12" cols="12" class="py-0 my-0">
          <v-container>
            <v-row class="py-0 my-0">
              <v-col
                md="3"
                lg="2"
                
                sm="4"
                cols="6"
                class="pa-1 mb-0"
                v-for="(item, index) in TeamData1"
                :key="index"
              >
                <TeamMember :data="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import TeamMember from "@/components/team/TeamDetails";
import TeamData from "@/assets/data/sponser.json";
import TeamData1 from "@/assets/data/sponser1.json";
export default {
  name: "TeamPage",
  components: {
    TeamMember,
  },
  data: () => ({
    TeamData: [],
    TeamData1: [],
  }),
  mounted() {
    this.TeamData = this.sortByName(TeamData);
    this.TeamData1 = this.sortByName(TeamData1);
  },
};
</script>

<style scoped>
.partner-image {
    width: auto !important;
    border-radius: 0 !important;
    max-width: 254px;
}
.partner-image img {
    max-height: 60px;
}
</style>