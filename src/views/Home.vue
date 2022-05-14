<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--&lt;!&ndash;    <router-link to="/login">Login</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="/registration">Registration</router-link>&ndash;&gt;-->

<!--    <router-link to="/console">Console</router-link> |-->
<!--    <router-link to="/reporting">Reporting</router-link> |-->
<!--    <router-link to="/notifications">Notifications</router-link> |-->

<!--    <router-link to="/logout">Log Out</router-link>-->

<!--  </div>-->
  <div class="home">
    <HomeComponent msg="Stan's Crypto Terminal"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent
  }
}
</script>
