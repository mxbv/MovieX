import { createRouter, createWebHistory } from "vue-router";
import SignUpView from "./views/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Sign Up",
      component: SignUpView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("./views/MoviesView.vue"),
    },
    {
      path: "/about",
      name: "movies",
      component: () => import("./views/AboutView.vue"),
    },
  ],
});

export default router;
