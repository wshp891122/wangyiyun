import Vue from "vue";
import VueRouter from "vue-router";
import Load from "../views/Load";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    ...routes,
    {
      path: "/load",
      component: Load,
    },
  ],
});

export default router;
