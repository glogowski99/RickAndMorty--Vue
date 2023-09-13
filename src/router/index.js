import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "@/views/InfoView";
import ShowMoreView from "@/views/ShowMoreView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/information",
    name: "info",
    component: InfoView,
  },
  {
    path: "/showmore",
    name: "showmore",
    component: ShowMoreView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
