<template>
  <Layout>
    <Banner variant="blog" />
    <BlogPageLatest />
    <BlogPageBlogs />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Banner from "@/components/Banner.vue";
import BlogPageLatest from "@/components/BlogPageLatest.vue";
import BlogPageBlogs from "@/components/BlogPageBlogs.vue";

export default {
  name: "BlogPage",
  components: {
    Layout,
    Banner,
    BlogPageLatest,
    BlogPageBlogs,
  },
};
</script>
