import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Sign Up",
      component: () => import("./views/SignUpView.vue"),
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
      path: "/movie/:id",
      name: "Movie Details",
      component: () => import("./components/MovieDetails.vue"),
    },
    // {
    //   path: "/about",
    //   name: "movies",
    //   component: () => import("./views/AboutView.vue"),
    // },
  ],
});

export default router;
