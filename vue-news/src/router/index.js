import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "News",
    component: NewsView,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobsView,
  },
  {
    path: "/ask",
    name: "Ask",
    component: AskView,
  },
  {
    path: "/user",
    name: "User",
    component: UserView,
  },
  {
    path: "/item",
    name: "Item",
    component: ItemView,
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
