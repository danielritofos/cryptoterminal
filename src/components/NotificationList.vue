<template>
    <div class="container">
<!--        <h1>Notification List</h1>-->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Dateteme</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Exchange</th>
                    <th scope="col">Trade on</th>
                    <th scope="col">Net Profit, USDT</th>
                    <th scope="col">Net Profit, %</th>
                    <th scope="col">Details</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <NotificationItem
                        v-for="(nt, i) of notif" :key="nt.id"
                        v-bind:nt="nt"
                        v-bind:index="i"
                        v-on:delete-notification="deleteNotification"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
    // export default {
    //     name: "TodoList"
    // }

    import NotificationItem from '@/components/NotificationItem'
    export default {
        name: "NotificationList",
        props: [
            'notif',
        ],
        methods: {
            deleteNotification(id) {
                this.$emit('delete-notification', id)
            }
        },
        components: {
            NotificationItem
        }
    }
</script>

<style scoped>

</style>