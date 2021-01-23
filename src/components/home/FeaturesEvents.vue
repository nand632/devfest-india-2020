<template>
  <v-container fluid class="mb-1">
    <v-row align="center" justify="center" class>
      <v-col cols="12" md="12" lg="12" sm="12" class="text-center mb-0">
        <p class="google-font mb-0 mt-0" style="font-weight: 350;font-size:180%">
          <b>
            Our
            <span style="color: #3766FC;">Feature Event</span>
            &
            <span style="color: #3766FC;">Meetup</span>
          </b>
        </p>
        <p
          class="google-font mt-0 mb-0"
          style="font-size:95%"
        >Events are listed in reverse chronological order by date.Events are listed in reverse chronological order by date.Events are listed in reverse chronological order by date.</p>
      </v-col>
      <v-container>
        <v-row align="center" justify="center" class>
          <p class="google-font mb-0 mt-0" style="font-weight: 350;font-size:180%">
            <b>
              <span style="color: #3766FC;">WorkShop</span>
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

    </v-row>
  </v-container>
</template>

<script>
import TeamMember from "@/components/team/Featureevent";
import TeamData from "@/assets/data/Featureevent.json";
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

<style>

.pad{
  padding: 5px;
}

</style>