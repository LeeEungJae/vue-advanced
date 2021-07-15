import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
// import CreateListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");
      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log("fetched");
          next();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // component: CreateListView("NewsView"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
    // component: CreateListView("JobsView"),
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");
      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log("fetched");
          next();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  {
    path: "/ask",
    name: "ask",
    component: AskView,
    // component: CreateListView("AskView"),
    beforeEnter: (to, from, next) => {
      bus.$emit("start:spinner");
      store
        .dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log("fetched");
          next();
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
