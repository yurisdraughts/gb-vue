<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        const separator = " - ";
        const siteName = this.$store.getters.getSiteName;
        const getters = this.$store.getters;
        const params = this.$route.params;
        let heading;

        switch (to.name) {
          case "article":
            heading = getters.getArticleById(params.articleId).heading;
            document.title = siteName + separator + heading;
            break;

          case "blog":
            document.title = siteName + separator + "Blog";
            break;

          case "error":
            document.title = siteName + separator + "404";
            break;

          case "projects":
            document.title = siteName + separator + "Project";
            break;

          case "project":
            heading = getters.getProjectById(params.projectId).heading;
            document.title = siteName + separator + heading;
            break;

          case "tag":
            document.title = siteName + separator + `Tag: "${params.tagName}"`;
            break;

          default:
            document.title = siteName;
            break;
        }
      },
    },
  },
};
</script>

<style lang="scss">
@use "assets/styles/index" as *;
@use "assets/styles/utility-classes" as *;
</style>
