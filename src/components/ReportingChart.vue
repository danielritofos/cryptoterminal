<template>
    <div>
<!--        <VueCharts />-->
    </div>
</template>

<script>
    // import VueCharts from 'vue-chartjs'
    import {Bar } from 'vue-chartjs'

    export default {
        name: "ReportingChart",
        extends: Bar,
        mounted() {
            this.renderChart({
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'GitHub Commits',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    }
                ]
            })
        },
        // components: {
        //     // VueCharts
        // }
    }
</script>

<style scoped>

</style>