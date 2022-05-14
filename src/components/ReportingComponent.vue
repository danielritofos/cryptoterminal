<template>
    <div class="container">
        <h1>Reporting</h1>
        <div>

<!--            <datepicker-->

<!--            />-->
<!--            <datepicker />-->

            <Datepicker
                v-model="date"
                range
                locale="ru"
                :enableTimePicker="false"
                dark
                v-on:closed="onDateChange"
                @cleared="onDateCleared"
            >
<!--                <template #trigger>-->
<!--                    <p class="clickable-text">Date</p>-->
<!--                </template>-->

            </Datepicker>

            <div class="text-start">
                <div class="row">
                    <div class="col-4">
                        <p>
                            General Balance:
                        </p>
                        <p>
                            Trade Balance:
                        </p>
                        <p>
                            Net Profit, USDT
                        </p>
                        <p>
                            Net Profit, %
                        </p>
                    </div>
                    <div class="col-2">
                        <p>
                            <span>num</span>
                        </p>
                        <p>
                            <span>num</span>
                        </p>
                        <p>
                            <span>num</span>
                        </p>
                        <p>
                            <span>num</span>
                        </p>
                    </div>
                    <div class="col-6">
                        Diagrams
                        <reporting-chart />
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
    // import Datepicker from 'vuejs3-datepicker';
    // import {de} from 'vuejs3-datepicker/src/components/datepicker/locale'


    import { ref, onMounted } from 'vue';
    import moment from 'moment';

    import Datepicker from 'vue3-date-time-picker';
    import 'vue3-date-time-picker/dist/main.css';

    import ReportingChart from "./ReportingChart";

    export default {
        name: "ReportingComponent",
        components: {
            Datepicker,
            ReportingChart
        },
        // data() {
            // return {
            //     date_start:null,
            //     date_end:null,
                // date: []
            // }
        // },
        // mounted() {
        //
        // },
        setup() {
            const date = ref();

            onMounted(() => {
                let start_timestamp = localStorage.getItem('start_timestamp') || Date.now();
                let end_timestamp = localStorage.getItem('end_timestamp') || Date.now();
                // const startDate = Date(start_timestamp / 1000);
                // const endDate = Date(end_timestamp / 1000);
                let m_start = moment.unix(start_timestamp / 1000).format()
                let m_end = moment.unix(end_timestamp / 1000).format()
                // console.log(start_timestamp);
                // console.log(end_timestamp);
                // console.log(m_start);
                // console.log(m_end);
                date.value = [m_start, m_end];
            })

            return {
                date,
            }
        },
        // watch: {
        //     data(val) {
        //         console.log(val)
        //     }
        // },
        methods: {
            onDateChange() {
                let start_timestamp = Date.parse(this.date[0]);
                let end_timestamp = Date.parse(this.date[1]);

                localStorage.setItem('start_timestamp', start_timestamp);
                localStorage.setItem('end_timestamp', end_timestamp);
                //TODO Ajax date time

                // console.log(start_timestamp)
                // console.log(end_timestamp)
            },
            onDateCleared() {
                localStorage.removeItem('start_timestamp')
                localStorage.removeItem('end_timestamp')

                //TODO set date today and send ajax
            }
        }
    }
</script>

<style scoped>
    .clickable-text {
        color: #1976d2;
        cursor: pointer;
    }


</style>