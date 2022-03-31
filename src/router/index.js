import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About/AboutView.vue"),
    },
    {
      path: "/counter",
      name: "counter",
      component: () => import("../views/Counter/CounterView.vue"),
    },
    {
      path: "/binding",
      name: "binding",
      component: () => import("../views/Binding/BindingView.vue"),
    },
    {
      path: "/computed-ref",
      name: "computed-ref",
      component: () => import("../views/ComputedRef/ComputedView.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/Form/FormView.vue"),
    },
  ],
});

export default router;
