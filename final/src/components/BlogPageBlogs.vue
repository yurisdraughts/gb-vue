<template>
  <section class="section blog">
    <div class="container">
      <h2 class="section__blog-page-heading heading">Articles & News</h2>
      <BlogsList
        :goto="goto"
        :articles="filteredArticles"
        :start="start"
        :length="numberOfPagesShown"
      />
      <Pagination
        :number-of-items="this.filteredArticles.length"
        :number-of-pages-shown="numberOfPagesShown"
        :current-page="currentPage"
        :set-start="setStart"
      />
    </div>
  </section>
</template>

<script>
import BlogsList from "./BlogsList.vue";
import Pagination from "./Pagination.vue";

export default {
  name: "BlogPageBlogs",
  props: ["goto", "articles", "currentArticleId", "currentTag"],
  components: {
    BlogsList,
    Pagination,
  },
  data() {
    return {
      start: 0,
      currentPage: 0,
      numberOfPagesShown: 6,
    };
  },
  computed: {
    filteredArticles() {
      const result = this.articles.filter((article) => {
        return this.currentTag === null
          ? true
          : article.tags.includes(this.currentTag);
      });
      return result;
    },
  },
  methods: {
    setStart(currentPage) {
      this.currentPage = currentPage;
      this.start = currentPage * this.numberOfPagesShown;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  margin-bottom: pxToVw(200);
}
</style>
