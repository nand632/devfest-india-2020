<template>
    <v-container fluid class="">
        <v-row align="center" justify="center">
                <div class="row">
                    <div class="text-center col-md-3 col-6 counter-box-small">
                        <p class="google-font mb-0" style="color:#3766FC; font-size: 300%;">
                            40+
                        </p>
                        <p>
                            Communities
                        </p>
                    </div>
                    <div class="text-center col-md-3 col-6 counter-box-small">
                        <p class="google-font mb-0" style="color:#3766FC; font-size: 300%;">
                            05
                        </p>
                        <p>
                            Track
                        </p>
                    </div>
                    <div class="text-center col-md-3 col-6 counter-box-small">
                        <p class="google-font mb-0" style="color:#3766FC; font-size: 300%;">
                            30
                        </p>
                        <p>
                            Expect
                        </p>
                    </div>
                    <div class="text-center col-md-3 col-6 counter-box-small">
                        <p class="google-font mb-0" style="color:#3766FC; font-size: 300%;">
                            15+
                        </p>
                        <p>
                            Exculsive Sessions
                        </p>
                    </div>
                    <div class="text-center col-md-3 col-6 counter-box-small">
                        <p class="google-font mb-0" style="color:#3766FC; font-size: 300%;">
                            10+
                        </p>
                        <p>
                            Live Activity
                        </p>
                    </div>
                    <div class="text-center col-md-3 col-6 counter-box-small">
                        <p class="google-font mb-0" style="color:#3766FC; font-size: 300%;">
                            09
                        </p>
                        <p>
                            Days Full of Fum
                        </p>
                    </div>
                </div>            
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

@media (min-width: 960px) {
    .counter-box-small {
    max-width: 16.5% !important;
}
}


</style>