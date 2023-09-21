import Vue from "vue";
import Router from "vue-router";

import IndexPage from "@/pages/IndexPage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import ProjectPage from "@/pages/ProjectPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexPage,
    },
    {
      path: "/index",
      redirect: { name: "index" },
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage,
    },
    {
      path: "/blog/tag/:tagName",
      name: "tag",
      component: () => import("@/pages/BlogTagPage.vue"),
      props: true,
    },
    {
      path: "/blog/article/:articleId",
      name: "article",
      component: () => import("@/pages/BlogArticlePage.vue"),
      props: true,
    },
    {
      path: "/project",
      name: "projects",
      component: ProjectPage,
    },
    {
      path: "/project/:projectId?",
      name: "project",
      component: () => import("@/pages/ProjectDetailsPage.vue"),
      props: true,
    },
    {
      path: "/404",
      name: "error",
      component: () => import("@/pages/ErrorPage.vue"),
    },
    {
      path: "*",
      redirect: { name: "error" },
    },
  ],
});
