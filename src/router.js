import Vue from "vue";
import Router from "vue-router";

import Register from "./views/register/index.vue";
import Brokenline from "./views/brokenline.vue";
import Amap from "./views/amap.vue";
import Chinamap from "./views/chinamap.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "register",
      component: Register
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/brokenline",
      name: "brokenline",
      component: Brokenline
    },
    {
      path: "/amap",
      name: "amap",
      component: Amap
    },
    {
      path: "/chinamapbanner",
      name: "chinamapbanner",
      component: Chinamap
    }
  ]
});
