<template>
  <section class="section banner" :class="'banner_' + variant">
    <header
      class="banner__header"
      v-if="currentProjectId == null && currentArticleId == null"
    >
      <h1 class="heading">{{ heading }}</h1>
      <div class="text">
        <a href="#" class="link text" @click.prevent="goto({ page: 'index' })">
          Home
        </a>
        /
        <a
          v-if="variant === 'blog'"
          href="#"
          class="link text"
          @click.prevent="goto({ page: 'blog' })"
        >
          Blog
        </a>
        <a
          v-else-if="variant === 'project'"
          href="#"
          class="link text"
          @click.prevent="goto({ page: 'project' })"
        >
          Project
        </a>
        {{ currentTag ? "/" : "" }}
        <a
          v-if="variant === 'blog'"
          href="#"
          class="link text"
          @click.prevent="goto({ tag: currentTag })"
        >
          {{ currentTag }}
        </a>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  name: "PageBanner",
  props: [
    "goto",
    "variant",
    "currentTag",
    "currentArticleId",
    "currentProjectId",
  ],
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
    background: #fff;
    text-align: center;
  }
}
</style>
