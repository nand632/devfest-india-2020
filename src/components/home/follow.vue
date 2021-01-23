<template>
  <v-container fluid class="mb-0">
    <v-row justify="center" align="center">
      <v-col>
        <h2 class="google-font" style="font-size: 3.5vh; line-height: 1.22; font-weight: 500;">
          Keep in touch with <b style="color:#3766FC;"> DevFair India</b> for the latest announcements</h2>
          <small class="mr-5 ml-1">-</small>
          <p class="google-font mb-2" style="font-size: 2vh;">
          Let's get connected so that we can reach out to each other via a simple notification.
          <br />
          Stake out
          <a
            href="https://twitter.com/DevFestIndia"
            rel="noreferrer"
            target="_blank"
            style="color:#3766FC;text-decoration:none"
          >#DevFairIndia</a>
          for the updates and news.
        </p>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x
                v-on="on"
                rel="noreferrer"
                href="https://twitter.com/DevfestIndia"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </template>
            <span>Facebook</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x
                v-on="on"
                rel="noreferrer"
                href="https://twitter.com/DevfestIndia"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </template>
            <span>Twitter</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x
                v-on="on"
                rel="noreferrer"
                href="https://twitter.com/DevfestIndia"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </template>
            <span>Instagram</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x
                v-on="on"
                rel="noreferrer"
                href="https://twitter.com/DevfestIndia"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </template>
            <span>GitHub</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x
                v-on="on"
                rel="noreferrer"
                href="https://twitter.com/DevfestIndia"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </template>
            <span>Linkedin</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x
                v-on="on"
                rel="noreferrer"
                href="https://twitter.com/DevfestIndia"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-telegram</v-icon>
              </v-btn>
            </template>
            <span>Telegram</span>
          </v-tooltip>


          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x
                v-on="on"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCJsZoFDt7rfxPBI1esak8JQ/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </template>
            <span>YouTube</span>
          </v-tooltip>

        
        
      </v-col>
    </v-row>
  </v-container>
</template>
