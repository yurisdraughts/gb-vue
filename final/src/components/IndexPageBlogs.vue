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
        :start="articles.length - 3"
        length="3"
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
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.blog {
  &__header {
    margin-bottom: pxToVw(52);
  }

  &__items-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: pxToVw(27);
  }
}


</style>
