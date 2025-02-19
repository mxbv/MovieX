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
  scrollBehavior(to, from, savedPosition) {
    // Exists when Browser's back/forward pressed
    if (savedPosition) {
      return savedPosition;
      // For anchors
    } else if (to.hash) {
      return { selector: to.hash };
      // By changing queries we are still in the same component, so "from.path" === "to.path" (new query changes just "to.fullPath", but not "to.path").
    } else if (from.path === to.path) {
      return {};
    }
    // Scroll to top
    return { x: 0, y: 0 };
  },
});

export default router;
