import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
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
    {
      path: "/about",
      name: "About",
      component: () => import("./views/AboutView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const savedScroll = sessionStorage.getItem("scrollY");
        if (savedPosition) {
          return resolve(savedPosition);
        } else if (savedScroll && to.path === "/movies") {
          return resolve({ top: Number(savedScroll) });
        } else {
          return resolve({ top: 0 });
        }
      }, 100);
    });
  },
});

export default router;
