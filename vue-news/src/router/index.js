import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
import CreateListView from "../views/CreateListView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "news",
    component: CreateListView("NewsView"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: CreateListView("JobsView"),
  },
  {
    path: "/ask",
    name: "ask",
    component: CreateListView("AskView"),
  },
  {
    path: "/user/:id",
    name: "user",
    component: UserView,
  },
  {
    path: "/item/:id",
    name: "item",
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
