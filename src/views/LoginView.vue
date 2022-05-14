<template>
    <div class="login">
        <LoginComponent/>
    </div>
    <div id="nav">
        <router-link to="/">Главное меню</router-link> |
        <!--    <router-link to="/about">About</router-link> |-->
        <router-link to="/login">Login</router-link> |
        <router-link to="/registration">Registration</router-link>
    </div>
<!--    <router-view/>-->

</template>


<script>
import LoginComponent from '@/components/LoginComponent.vue'


export default {
    name: "LoginView",
    components: {
        LoginComponent
    }
}

</script>

<style scoped>

</style>