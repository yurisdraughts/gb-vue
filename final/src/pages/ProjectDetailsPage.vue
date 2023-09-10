<template>
  <Layout>
    <Banner variant="project" :project-id="projectId" />
    <ProjectPageDetails :project-id="projectId" />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Banner from "@/components/Banner.vue";
import ProjectPageDetails from "@/components/ProjectPageDetails.vue";

export default {
  name: "ProjectPage",
  props: ["projectId"],
  components: {
    Layout,
    Banner,
    ProjectPageDetails,
  },
};
</script>
