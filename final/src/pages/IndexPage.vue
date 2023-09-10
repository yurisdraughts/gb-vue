<template>
  <Layout>
    <IndexPageBanner />
    <IndexPageProjects />
    <IndexPageCounter />
    <IndexPageBlogs />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import IndexPageBanner from "@/components/IndexPageBanner.vue";
import IndexPageProjects from "@/components/IndexPageProjects.vue";
import IndexPageCounter from "@/components/IndexPageCounter.vue";
import IndexPageBlogs from "@/components/IndexPageBlogs.vue";

export default {
  name: "IndexPage",
  components: {
    Layout,
    IndexPageBanner,
    IndexPageProjects,
    IndexPageCounter,
    IndexPageBlogs,
  },
};
</script>
