<template>
  <section class="section banner" :class="'banner_' + variant">
    <header
      v-if="projectId === undefined && articleId === undefined"
      class="banner__header"
    >
      <h1 class="heading">{{ heading }}</h1>
      <div class="text">
        <router-link :to="{ name: 'index' }" class="link text">
          Home
        </router-link>
        /
        <router-link
          :to="{ name: 'blog' }"
          v-if="variant === 'blog'"
          class="link text"
        >
          Blog
        </router-link>
        <router-link
          :to="{ name: 'project' }"
          v-else-if="variant === 'project'"
          class="link text"
        >
          Project
        </router-link>
        {{ tagId ? "/" : "" }}
        <router-link
          v-if="variant === 'blog' && tagId !== undefined"
          :to="{ name: 'tag', params: { tagId } }"
          class="link text"
        >
          {{ tagId }}
        </router-link>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  name: "PageBanner",
  props: ["variant", "tagId", "articleId", "projectId"],
  computed: {
    heading() {
      if (this.variant === "blog") return "Articles & News";
      else if (this.variant === "project") return "Our Project";
      else return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  min-height: 35.6rem;
  margin-bottom: pxToVw(200);

  &_blog {
    background: url(../assets/images/Blog-Banner.jpg),
      lightgray 50% / cover no-repeat;
  }

  &_project {
    background: url(../assets/images/Project-Banner.jpg),
      lightgray 50% / cover no-repeat;
  }

  &__header {
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50%;
    border-radius: 37px 37px 0px 0px;
    padding: 4.1rem 7.8rem;
    max-width: 90%;
    background: $neutral-background-color;
    text-align: center;
  }
}
</style>
