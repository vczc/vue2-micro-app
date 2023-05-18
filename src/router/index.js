import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import store from "@/store";

Vue.use(VueRouter);

let microPath = "";

if (window.__POWERED_BY_QIANKUN__) {
  microPath = "/vue2-micro-app";
}

const routes = [
  {
    path: microPath + "/login",
    name: "login",
    component: Login,
  },
  {
    path: microPath + "/",
    redirect: microPath + "/home",
  },
  {
    path: microPath + "/home",
    name: "Home",
    component: Home,
  },
  {
    path: microPath + "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== microPath + "/login") {
    if (store.state.token) {
      if (
        window.__POWERED_BY_QIANKUN__ &&
        !to.path.includes("vue2-micro-app")
      ) {
        next(microPath + to.path);
      } else {
        next();
      }
    } else {
      next(microPath + "/login");
    }
  } else {
    next();
  }
});
export default router;
