<template>
    <v-container fluid class="">
        <v-row align="center" justify="center">
            <v-col cols="12" md="10" lg="10" sm="12" class="text-center mb-0" >
                <p class="google-font mb-1" style="font-weight: 350;font-size:180%">
                    <b>
                        Our
                        <span style="color: #1a73e8;">Events</span> 
                        &
                        <span style="color: #1a73e8;">Meetups</span> 
                    </b> 
                </p>
                
                <!-- <p class="google-font mb-0" style="font-size:180%">Our Events & Meetups</p> -->
                <p class="google-font mt-0" style="font-size:95%">At sessions that span from the technical to the visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.</p>
                <router-link
                    to="/schedule"
                    text
                    color="#4C4A78"
                    class="ma-0 google-font mb-0"
                    style="border-radius:5px;text-transform: capitalize;text-decoration:none;color:#4C4A78"
                >See More</router-link>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
import service from '@/services/appservices'
import { mapState } from 'vuex'
    export default {
        name: 'Eventshome',
        inject: ['theme'],
        components:{
            
        },
        computed:{
            ...mapState(["config"])
        },
        data: () => ({
            eventsData: [],
            errorMsg:'',
            showLoader: true,
            notFoundEventFlag: false
        }),
        mounted(){
            
        },
        
};
</script>

<style scoped>
   
</style>