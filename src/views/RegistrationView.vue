<template>
    <div class="registration">
        <RegistrationComponent/>
        <router-link to="/login">to home</router-link>
    </div>
</template>


<script>
import RegistrationComponent from '@/components/RegistrationComponent.vue'

export default {
    name: "RegistrationView",
    components: {
        RegistrationComponent
    }
}


</script>

<style scoped>

</style>