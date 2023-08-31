<template>
  <div class="blog__items-wrapper">
    <BlogItem
      v-for="article in articles.slice(start, start + length)"
      :key="article.id"
      :goto="goto"
      :dest="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import BlogItem from "./BlogItem.vue";

export default {
  name: "BlogsList",
  props: ["goto", "articles", "start", "length"],
  components: {
    BlogItem,
  },
};
</script>

<style lang="scss" scoped></style>
