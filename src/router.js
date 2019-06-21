// import packages
import Vue from "vue";
import Router from "vue-router";
// import components
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import toDoList from "./views/todoList.vue";

// The Vue.use(Router) is telling our Vue instance to use the package names Router
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // The routes are added to routes array. Each route is an object(properties:path, name, component)
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About,
      alias: "/company-info"
    },
    {
      path: "/about-us",
      redirect: {
        name: "about"
      }
    },
    {
      path: "/todo-list",
      name: "todo-list",
      component: toDoList
    }
  ]
});
