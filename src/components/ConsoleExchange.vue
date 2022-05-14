<template>
    <div class="row">
        <div class="col-10">
            <div class="accordion-item">
                <h2 class="accordion-header" v-bind:id="'heading'+ex.id">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#colapce' + ex.id"  aria-expanded="false" v-bind:aria-controls="'colapce'+ex.id">
                        {{ex.ex_name}}
                    </button>
                </h2>
                <div v-bind:id="'colapce'+ex.id" class="accordion-collapse collapse" v-bind:aria-labelledby="'heading'+ex.id" data-bs-parent="#accordionExchange">
                    <div class="accordion-body">
                        <label
                            v-for="(val, key) in ex.ex_param" :key="key"
                        >{{key}}
                            <input type="text" :value="val">
                        </label>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-2">
            <div class="text-start">
                <label class="checkbox-ya">
                    <input type="checkbox" name="name"
                           v-bind:checked="ex.is_on"
                           v-on:change="$emit('change-exchange', ex.id, $event.target.checked)"
                    >
                    <span class="checkbox-ya-switch"><span class="checkbox-ya-feature" data-label-on="Вкл" data-label-off="Откл"></span></span>
                </label>
            </div>
        </div>
    </div>
    <br>

</template>

<script>
    export default {
        name: "ConsoleExchange",
        props:[
            'ex'
        ]
    }
</script>

<style scoped>

</style>