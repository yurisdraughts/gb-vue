<template>
  <section class="section blog">
    <div class="container">
      <h2 class="section-header heading">Articles & News</h2>
      <BlogsList
        :goto="goto"
        :articles="filteredArticles"
        :start="start"
        :length="numberOfPagesShown"
      />
      <div class="blog__pagination">
        <a
          class="blog__page-link text round-button round-button_small"
          v-for="pageNumber in numberOfPages"
          :key="pageNumber"
          @click.prevent="setStart(pageNumber * numberOfPagesShown)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            class="round-button__image blog__page-link-img"
          >
            <circle cx="26.5" cy="26" r="26" fill="#F4F0EC" />
          </svg>
          {{ String(pageNumber + 1).padStart(2, "0") }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import BlogsList from "./BlogsList.vue";

export default {
  name: "BlogPageBlogs",
  props: ["goto", "articles", "currentArticleId", "currentTag"],
  components: {
    BlogsList,
  },
  data() {
    return {
      start: 0,
      numberOfPagesShown: 6,
    };
  },
  computed: {
    filteredArticles() {
      const result = this.articles.filter((article) => {
        return this.currentTag === null ? true : article.tags.includes(this.currentTag);
      });
      return result;
    },
    numberOfPages() {
      return Array.from(
        {
          length: Math.ceil(this.filteredArticles.length / this.numberOfPagesShown),
        },
        (_, i) => i
      );
    },
  },
  methods: {
    setStart(newStart) {
      this.start = newStart;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.blog {
  margin-bottom: pxToVw(200);

  &__items-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: pxToVw(28);
  }

  &__pagination {
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
    margin: 5.1rem auto 0;
    width: fit-content;
  }

  &__page-link {
    position: relative;
    padding: pxToVw(14) pxToVw(17);
    font-size: pxToVw(16);
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    cursor: pointer;
  }

  &__page-link-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
