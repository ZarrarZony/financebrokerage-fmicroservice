import { createRouter, createWebHistory } from "vue-router";
import Categories from "@/components/Categories.vue";
import SubCategories from "@/components/SubCategories.vue";
import Blog from "@/components/Blog.vue";

const routes = [
  {
    path: "/",
    name: "categories",
    component: Categories,
    props: true,
  },
  {
    path: "/sub-categories/:parentId/:catName",
    name: "sub-categories",
    component: SubCategories,
    props: true,
  },
  {
    path: "/blog/:postId",
    name: "blog",
    component: Blog,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
