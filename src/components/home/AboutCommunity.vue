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
                    <h3 class="google-font">About<b style="color:#3766FC;"> DevFair India</b></h3>
                    <p class="google-font" style="font-size:100%">
                    Since life is appearing to phrases with this distinct way of life, we communities are also fostering new setups and plan to return you all with India’s biggest Student Tech Event: DevFair India 2021 with code inductions, Full fledge Workshops with cutting edge technologies, from code to Startup, fun & much more.
                    </p>
                    <p class="google-font" style="font-size:100%">
                    Our specialists will explain to you how you can code professionally, how to make stunning tech products with aspiring technologies, and how to start with code can make it a startup that will help you in accelerating your profession by advancing your experience.
                    </p>
                    <v-btn target="_blank" dark
                        color="#3766FC"
                        depressed
                        href="https://dsc.community.dev/parul-university/"
                        style="text-transform: capitalize;border-radius:4px;height:40px;padding:0 18px;"
                        class="google-font mr-3 mb-3">
                    Learn More About DSC Devfair
                    </v-btn>

                &nbsp;
                <v-btn
                    text
                    style="text-transform: capitalize;border-radius:4px;color:#3766FC;background-color:white;height:40px;padding:0 18px;"
                    href="https://twitter.com/hashtag/"
                    class="google-font mt-0 mb-3"
                    target="_blank"
                    >#DevFairIndia</v-btn
                    >
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