import { createRouter, createWebHistory } from "vue-router";
import SignupView from "./views/SignupView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Sign Up",
      component: SignupView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/HomeView.vue"),
    },
  ],
});

export default router;
