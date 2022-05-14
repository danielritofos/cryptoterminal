<template>
    <div>
        <h1>Notification</h1>
        <NotificationList
            v-bind:notif="notif"
            @delete-notification="deleteNotification"
        />
    </div>
</template>

<script>
    import NotificationList from '@/components/NotificationList'

    export default {
        name: "NotificationComponent",
        data() {
            return {
                notif: [
                    // {id: 1, date: 'date 1', coin: 'coin 1', exchange: 'exchange 1', traded_on: 'traded on 1', net_profit_usdt: 'net profit 1 usdt', net_profit_percent: 'net profit 1 percent', details: 'details 1' },
                    // {id: 2, date: 'date 2', coin: 'coin 2', exchange: 'exchange 2', traded_on: 'traded on 2', net_profit_usdt: 'net profit 2 usdt', net_profit_percent: 'net profit 2 percent', details: 'details 2' },
                    // {id: 3, date: 'date 3', coin: 'coin 3', exchange: 'exchange 3', traded_on: 'traded on 3', net_profit_usdt: 'net profit 3 usdt', net_profit_percent: 'net profit 3 percent', details: 'details 3' },
                ]
            }
        },
        methods:{
            deleteNotification(id) {
                // TODO get ajax to delete notification by id
                this.notif = this.notif.filter(el => el.id !== id)
            }
        },
        mounted() {
            fetch('http://127.0.0.1:5000/notif')
                .then(response => response.json())
                .then(json => this.notif = json)
        },
        components: {
            NotificationList
        }
    }
</script>

<style scoped>

</style>