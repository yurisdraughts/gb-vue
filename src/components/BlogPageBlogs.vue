<template>
  <section class="section blog">
    <div class="container">
      <h2 class="section__blog-page-heading heading">Articles & News</h2>
      <BlogsList
        :articles="filteredArticles"
        :number-of-articles-shown="numberOfArticlesShown"
        :starting-index="startingIndex"
      />
      <Pagination
        :current-page="currentPage"
        :number-of-items="filteredArticles.length"
        :number-of-items-shown="numberOfArticlesShown"
        :set-starting-index="setStartingIndex"
      />
    </div>
  </section>
</template>

<script>
import BlogsList from "./BlogsList.vue";
import Pagination from "./Pagination.vue";

export default {
  name: "BlogPageBlogs",
  props: ["tagName"],
  components: {
    BlogsList,
    Pagination,
  },
  data() {
    return {
      startingIndex: 0,
      currentPage: 0,
      numberOfArticlesShown: 6,
    };
  },
  computed: {
    articles() {
      return this.$store.getters.getArticles;
    },
    filteredArticles() {
      const result = this.articles.filter((article) => {
        return this.tagName === undefined
          ? true
          : article.tags.includes(this.tagName);
      });
      return result;
    },
  },
  methods: {
    setStartingIndex(currentPage) {
      this.currentPage = currentPage;
      this.startingIndex = currentPage * this.numberOfArticlesShown;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  margin-bottom: pxToVw(200);
}
</style>
