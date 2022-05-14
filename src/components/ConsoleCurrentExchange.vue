<template>
    <div class="text-start">
        <label class="checkbox-ya">
            {{cex.ex_name}}
            <input type="checkbox" name="name"
                   v-bind:checked="cex.is_on"
                   v-on:change="$emit('change-exchange', cex.id, $event.target.checked)"
            >
            <span class="checkbox-ya-switch"><span class="checkbox-ya-feature" data-label-on="Вкл" data-label-off="Откл"></span></span>
        </label>
    </div>
    <br>
</template>

<script>
    export default {
        name: "ConsoleCurrentExchange",
        props: [
            'cex'
        ]
    }
</script>

<style scoped>

</style>