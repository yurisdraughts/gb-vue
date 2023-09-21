<template>
  <Layout>
    <Banner variant="project" />
    <ProjectPageProjects />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Banner from "@/components/Banner.vue";
import ProjectPageProjects from "@/components/ProjectPageProjects.vue";

export default {
  name: "ProjectPage",
  components: {
    Layout,
    Banner,
    ProjectPageProjects,
  },
};
</script>
