import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/HomePage.vue";
import Single from "@/components/Single.vue";
import New from "@/components/New.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/new",
      name: "New",
      component: New
    },
    {
      path: "/story/:id",
      name: "Single",
      component: Single
    }
  ]
});
