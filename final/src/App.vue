<template>
  <div id="app">
    <Layout :goto="goto">
      <IndexPage
        v-if="currentPage === 'index'"
        :goto="goto"
        :articles="articles"
      />
      <BlogPage
        v-if="currentPage === 'blog'"
        :goto="goto"
        :articles="articles"
        :current-article-id="currentArticleId"
        :current-tag="currentTag"
      />
      <ProjectPage
        v-if="currentPage === 'project'"
        :goto="goto"
        :current-project-id="currentProjectId"
      />
    </Layout>
  </div>
</template>

<script>
import articles from "./assets/articles.js";
import Layout from "./components/Layout.vue";
import IndexPage from "./components/IndexPage.vue";
import BlogPage from "./components/BlogPage.vue";
import ProjectPage from "./components/ProjectPage.vue";

export default {
  name: "App",
  components: {
    Layout,
    IndexPage,
    BlogPage,
    ProjectPage,
  },
  data() {
    return {
      articles,
      currentPage: "index",
      currentArticleId: null,
      currentTag: null,
      currentProjectId: null,
    };
  },
  methods: {
    goto(dest) {
      if (dest.page !== undefined) {
        this.currentPage = dest.page;
        this.currentArticleId = null;
        this.currentTag = null;
        this.currentProjectId = null;
      } else if (dest.tag !== undefined) {
        this.currentPage = "blog";
        this.currentArticleId = null;
        this.currentTag = dest.tag;
        this.currentProjectId = null;
      } else if (dest.article !== undefined) {
        this.currentPage = "blog";
        this.currentArticleId = dest.article;
        this.currentTag = null;
        this.currentProjectId = null;
      } else if (dest.project !== undefined) {
        this.currentPage = "project";
        this.currentArticleId = null;
        this.currentTag = null;
        this.currentProjectId = dest.project;
      }
    },
  },
};
</script>

<style lang="scss">
@use "assets/styles/index" as *;
@use "assets/styles/utility-classes" as *;
</style>
