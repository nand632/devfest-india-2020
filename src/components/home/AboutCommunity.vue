<template>
    <v-container fluid class="py-0 my-0 mt-2 mb-5">
        <v-row class="py-0 my-0" align="center">
            <v-col md="4" sm="12" cols="12" class="py-0 my-0">
                <v-img
                    :src="require('@/assets/img/dontremove/about.png')"
                    :lazy-src="require('@/assets/img/dontremove/about.png')"
                    class=" mb-3"
                    width="100%"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
             
                  <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                    <h3 class="google-font">Performance & Developer Tools</h3>
                    <p class="google-font" style="font-size:110%">
                      Runtime performance is how your page performs when it is running, as opposed to loading. Users expect pages to be interactive and smooth. Each stage in the pixel pipeline represents an opportunity to introduce jank. Learn about tools and strategies to identify and fix common problems that slow down runtime performance.
                    </p>
                    <v-btn target="_blank" class="ma-0 google-font elevation-1 primary" style="text-transform: capitalize;border-radius:5px;color:white">Become a Member</v-btn>

                &nbsp;

                <v-btn target="_blank" rounded color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" outlined  class="ml-0" dark>Learn More</v-btn>

                  </v-col>
                
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data:()=>({

    })
}
</script>