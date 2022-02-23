import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import store from "../store";

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
  },
  {
    path:'/news',
    name:'News',
    component: () =>
      import(
       "../views/News.vue"
      )
  },
  {
    path: "/search-by-date",
    name: "search-by-date",
    component: () =>
      import(
       "../views/SearchByDate.vue"
      )
  },
  {
    path: "/user-crud",
    name: "User",
    component: () =>
      import(
       "../views/Users.vue"
      )
  },
  {
    path: '*',
    name: '404',
    component:Home
  },

]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch("CANCEL_PENDING_REQUESTS");
  store.dispatch("RESET_SEARCH_FIELDS");
  next();
});

export default router

