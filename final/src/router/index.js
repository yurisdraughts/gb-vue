import Vue from "vue";
import VueRouter from "vue-router";

import IndexPage from "@/pages/IndexPage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import ProjectPage from "@/pages/ProjectPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
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
      path: "/blog/tag/:tagId",
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
      path: "/:anythingElse(.*)*",
      name: "error",
      component: ErrorPage,
    },
  ],
});
