<template>
  <v-dialog v-model="dialog" width="700" scrollable>
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer;"
        class="text-center py-5 ma fill-height whiteThemeCard event-main-cards">
        <v-avatar size="100" class="cards-imgs">
          <img :src="getTeamImgUrl(data.image)" :lazy-src="getTeamImgUrl(data.image)" alt />
        </v-avatar>    
        <p class="mt-3 mb-0 google-font mb-0 cards-main-head" style="font-size:110%">{{ data.name }}</p>
        <p class="mt-1 mb-0 google-font mt-0 cards-sub-head" style="font-size:70%">{{ data.bio1 }}</p>  
      </div>
    </template>

    <v-card class="white">
      <v-card-text class="pa-5">
        <v-container>
          <v-row>
            <v-col md="4" cols="12" class="text-center">
              <v-avatar size="100">
                <img :src="getTeamImgUrl(data.image)" :lazy-src="getTeamImgUrl(data.image)" alt />
              </v-avatar>
              <p class="google-font mt-3 mb-0" style="font-size:140%">
                <b>{{ data.name }}</b>
              </p>
              <p class="google-font mt-1" style="font-size:100%">
                {{ data.company.designation }}<span v-if="data.company.name">, {{ data.company.name }}</span>
              </p>
              
            </v-col>
            <v-col md="8" cols="12">
              <p
                class="google-font"
                style="font-size:110%;word-break:normal;font-weight:bold"
              >{{data.community.designation}}<span v-if="data.community.designation">,</span> {{data.community.name}}</p>
              <p class="google-font" style="font-size:110%">{{ data.bio }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions :class="this.$vuetify.theme.dark == true?'grey darken-3':'grey lighten-3'">
        <v-spacer></v-spacer>
        <v-btn aria-label="close" color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  components: {
    
  },
  inject: ["theme"],
  props: ["data"],
  data() {
    return {
      dialog: false
    };
  },
  mounted() {},
  methods: {
    goToTeam(id) {
      this.$router.push("/team/" + id);
    }
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) return val.substring(0, num) + "..";
      else return val;
    }
  }
};
</script>

<style>
.whiteThemeCard {
  background: rgb(255, 255, 255);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
.cards-imgs {
    height: 45px !important;
    width: 45px !important;
    
    transform: translateX(-60px);
}
.cards-main-head {
    text-align: left;
    margin-left: 12px;
    font-size: 20px !important;
}
.cards-sub-head {
    text-align: left;
    margin-left: 12px;
    margin-right: 5px;
    padding-bottom: 10px;
    font-size: 12px !important;
}
.event-main-cards {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    border-radius: 4px !important;
    margin: 0 5px !important;
    height: 95% !important;
}
.row.py-5.align-center.justify-center.grey.lighten-4 {
    background-color: white !important;
}
p.google-font.mb-0.mt-0.hackathon-head-line {
    margin-bottom: 15px !important;
}


</style>