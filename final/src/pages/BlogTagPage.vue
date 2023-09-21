<template>
  <Layout>
    <Banner variant="blog" :tag-name="tagName" />
    <BlogPageBlogs :tag-name="tagName" />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Banner from "@/components/Banner.vue";
import BlogPageBlogs from "@/components/BlogPageBlogs.vue";

export default {
  name: "BlogTagPage",
  props: ["tagName"],
  components: {
    Layout,
    Banner,
    BlogPageBlogs,
  },
};
</script>
