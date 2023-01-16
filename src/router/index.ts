// Core
import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// Components
import ViewHome from "@/views/ViewHome.vue";

// Data
const defaultTitle = "Test-Task Demetory 4 DemLabs";

// Routes
const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "View404",
    component: () => import("@/views/View404.vue"),
    meta: {
      title: "Page not Found",
    },
  },
  {
    path: "/certificates",
    name: "ViewCertificates",
    component: () => import("@/views/ViewCertificates.vue"),
    meta: {
      title: "Certificates",
    },
  },
  {
    path: "/",
    name: "ViewHome",
    component: ViewHome,
  },
];

// Create Router
const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation Guards
router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title ? defaultTitle + " | " + to.meta.title : defaultTitle;
  });
});

// Export
export default router;
