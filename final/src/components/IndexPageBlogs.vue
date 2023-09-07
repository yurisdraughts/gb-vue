<template>
  <section class="section blog">
    <div class="container">
      <header class="section__header blog__header">
        <h2 class="heading">Articles & News</h2>
        <p class="text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </header>
      <BlogsList
        :goto="goto"
        :articles="articles"
        :start="articles.length - numberOfArticles"
        :length="numberOfArticles"
      />
    </div>
  </section>
</template>

<script>
import BlogsList from "./BlogsList.vue";

export default {
  name: "IndexPageBlogs",
  props: ["goto", "articles"],
  components: {
    BlogsList,
  },
  data() {
    return {
      isScreenSmall: matchMedia("(max-width: 1440px)").matches,
    };
  },
  computed: {
    numberOfArticles() {
      return this.isScreenSmall ? 2 : 3;
    }
  },
  methods: {
    onresize() {
      this.isScreenSmall = matchMedia("(max-width: 1440px)").matches;
    },
  },
  created() {
    window.addEventListener("resize", this.onresize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onresize);
  }
};
</script>

<style lang="scss" scoped>
.blog {
  &__header {
    margin-bottom: pxToVw(52);
  }

  &__items-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: pxToVw(27);
  }

  @media (max-width: $breakpoint-lg) {
    &__items-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
