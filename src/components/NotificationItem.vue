<template>

    <tr class="align-baseline">
        <td>{{index + 1}}</td>
        <td>{{nt.date}}</td>
        <td>{{nt.coin}}</td>
        <td>{{nt.exchange}}</td>
        <td>{{nt.traded_on}}</td>
        <td>{{nt.net_profit_usdt}}</td>
        <td>{{nt.net_profit_percent}}</td>
        <td>{{nt.details}}</td>
        <td><button class="btn btn-danger"
            v-on:click="$emit('delete-notification', nt.id)"
        >Delete</button></td>

    </tr>
</template>

<script>
export default {
    props: {
        nt: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>

<style scoped>

</style>