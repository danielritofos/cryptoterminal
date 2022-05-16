<template>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
<!--    <router-link to="/registration">Registration</router-link> |-->

    <router-link to="/console">Console</router-link> |
    <router-link to="/reporting">Reporting</router-link> |
    <router-link to="/notifications">Notifications <span class="count-notification">{{}}</span></router-link> |

    <router-link to="/logout">Log Out</router-link>

  </div>
  <router-view/>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import "~bootstrap/dist/css/bootstrap.min.css";

.count-notification {
  background-color: red;
  border-radius: 30%;
}
</style>
