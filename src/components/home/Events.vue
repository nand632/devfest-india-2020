<template>
    <v-container fluid class="">
        <v-row align="center" justify="center">
            <v-col cols="12" md="10" lg="10" sm="12" class="text-center mb-0" >
                <p class="google-font mb-1" style="font-weight: 350;font-size:180%">
                    <b>
                        Our
                        <span style="color: #3766FC;">Event Roadmap</span> 
                        &
                        <span style="color: #3766FC;">Schedule</span> 
                    </b> 
                </p>
                
                <!-- <p class="google-font mb-0" style="font-size:180%">Our Events & Meetups</p> -->
                <p class="google-font mt-0" style="font-size:95%">Follow code inductions by our expert speakers on cutting edge technologies & Startup Innovation. Check out the schedule page and don't neglect to mark your calendar so that you don't miss out on any sessions. Don't forget to be a part of the Devfair Hackathon on 8th - 10th March.</p>
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