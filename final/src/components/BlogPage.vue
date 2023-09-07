<template>
  <div>
    <Banner
      :goto="goto"
      variant="blog"
      :current-article-id="currentArticleId"
      :current-tag="currentTag"
    />
    <BlogPageLatest
      v-if="showLatestArticle"
      :goto="goto"
      :articles="articles"
    />
    <BlogPageCurrent
      v-if="showCurrentArticle"
      :goto="goto"
      :articles="articles"
      :current-article-id="currentArticleId"
      :current-tag="currentTag"
    />
    <BlogPageBlogs
      v-if="showBlogs"
      :goto="goto"
      :articles="articles"
      :current-article-id="currentArticleId"
      :current-tag="currentTag"
    />
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import BlogPageLatest from "./BlogPageLatest.vue";
import BlogPageCurrent from "./BlogPageCurrent.vue";
import BlogPageBlogs from "./BlogPageBlogs.vue";

export default {
  name: "BlogPage",
  props: ["goto", "articles", "currentArticleId", "currentTag"],
  components: {
    Banner,
    BlogPageLatest,
    BlogPageCurrent,
    BlogPageBlogs,
  },
  computed: {
    showLatestArticle() {
      return this.currentArticleId === null && this.currentTag === null;
    },
    showCurrentArticle() {
      return this.currentArticleId !== null;
    },
    showBlogs() {
      return this.currentArticleId === null;
    },
  },
};
</script>
