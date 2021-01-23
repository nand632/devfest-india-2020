<template>
  
      <v-container>
          <v-row align="center" justify="center">
            <p class="google-font mb-0 mt-0" style="font-weight: 350;font-size:180%">
              <b>
                <span style="color: #3766FC;">Hackathon</span>
              </b>
            </p>
                <v-row class="py-0 my-0">
                  <v-col md="3" lg="2" sm="4" cols="6" class="pa-1 mb-0 " v-for="(item, index) in TeamData"
                    :key="index"
                  >
                    <TeamMember :data="item" />
                  </v-col>
                </v-row>
          </v-row>
      </v-container>
</template>

<script>
import TeamMember from "@/components/team/Hackathon";
import TeamData from "@/assets/data/Hackathon.json";
export default {
  name: "TeamPage",
  components: {
    TeamMember,
  },
  data: () => ({
    TeamData: [],
  }),
  mounted() {
    this.TeamData = this.sortByName(TeamData);
  },
};
</script>

