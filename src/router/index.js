import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: ()=>import("@/views/dashboard")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
