<template>
  <div id="index">
    <IndexPageBanner />
    <IndexPageProjects :goto="goto" />
    <IndexPageCounter />
    <IndexPageBlogs :goto="goto" :articles="articles" />
  </div>
</template>

<script>
import IndexPageBanner from "./IndexPageBanner.vue";
import IndexPageProjects from "./IndexPageProjects.vue";
import IndexPageCounter from "./IndexPageCounter.vue";
import IndexPageBlogs from "./IndexPageBlogs.vue";

export default {
  name: "IndexPage",
  props: ["goto", "articles"],
  components: {
    IndexPageBanner,
    IndexPageProjects,
    IndexPageCounter,
    IndexPageBlogs
  },
};
</script>

<style lang="scss" scoped></style>
