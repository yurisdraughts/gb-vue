<template>
  <div id="blog">
    <BlogPageBanner
      :goto="goto"
      :current-article-id="currentArticleId"
      :current-tag="currentTag"
    />
    <BlogPageLatest
      v-if="currentArticleId === null && currentTag === null"
      :goto="goto"
      :articles="articles"
    />
    <BlogPageCurrent
      v-if="currentArticleId !== null"
      :goto="goto"
      :articles="articles"
      :current-article-id="currentArticleId"
      :current-tag="currentTag"
    />
    <BlogPageBlogs
      v-if="currentArticleId === null"
      :goto="goto"
      :articles="articles"
      :current-article-id="currentArticleId"
      :current-tag="currentTag"
    />
  </div>
</template>

<script>
import BlogPageBanner from "./BlogPageBanner.vue";
import BlogPageLatest from "./BlogPageLatest.vue";
import BlogPageCurrent from "./BlogPageCurrent.vue";
import BlogPageBlogs from "./BlogPageBlogs.vue";

export default {
  name: "BlogPage",
  props: ["goto", "articles", "currentArticleId", "currentTag"],
  components: {
    BlogPageBanner,
    BlogPageLatest,
    BlogPageCurrent,
    BlogPageBlogs,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.section-header {
  margin: {
    left: 0;
    bottom: pxToVw(30);
  }
}
</style>
