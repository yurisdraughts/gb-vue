<template>
  <div class="blogs-list">
    <BlogItem
      v-for="article in articles.slice(
        startingIndex,
        startingIndex + numberOfArticlesShown
      )"
      :key="article.id"
      :dest="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import BlogItem from "./BlogItem.vue";

export default {
  name: "BlogsList",
  props: ["articles", "startingIndex", "numberOfArticlesShown"],
  components: {
    BlogItem,
  },
};
</script>

<style lang="scss" scoped>
.blogs-list {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: pxToVw(28);

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
</style>
