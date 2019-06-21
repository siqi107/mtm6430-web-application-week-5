<!-- Using routes in the App.vue file.-->

<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link> is a component (from the vue-router library) whose job is to link to a specific route.  -->
      <router-link to="/">Home</router-link>|
      <router-link :to="{ name: 'about' }">About</router-link>|
      <router-link :to="{ name: 'todo-list'}">To do list</router-link>
    </div>
    <!-- <router-view/> is essentially a placeholder where the contents of our component will be rendered onto the page. -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
</style>
