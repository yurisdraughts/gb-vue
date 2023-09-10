<template>
  <Layout>
    <Banner variant="blog" :tag-id="tagId" />
    <BlogPageBlogs :tag-id="tagId" />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Banner from "@/components/Banner.vue";
import BlogPageBlogs from "@/components/BlogPageBlogs.vue";

export default {
  name: "BlogTagPage",
  props: ["tagId"],
  components: {
    Layout,
    Banner,
    BlogPageBlogs,
  },
};
</script>
