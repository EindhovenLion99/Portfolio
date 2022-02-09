import { createWebHistory, createRouter } from "vue-router";

import CHome from '../components/Home.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: CHome
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;