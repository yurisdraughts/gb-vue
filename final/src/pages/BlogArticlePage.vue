<template>
  <Layout>
    <Banner variant="blog" :article-id="articleId" />
    <BlogPageCurrent :article-id="articleId" />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Banner from "@/components/Banner.vue";
import BlogPageCurrent from "@/components/BlogPageCurrent.vue";

export default {
  name: "BlogArticlePage",
  props: ["articleId"],
  components: {
    Layout,
    Banner,
    BlogPageCurrent,
  },
};
</script>
