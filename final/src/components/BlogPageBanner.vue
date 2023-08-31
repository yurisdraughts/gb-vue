<template>
  <section class="section banner">
    <header class="banner__header" v-if="currentArticleId === null">
      <h1 class="heading">Articles & News</h1>
      <div class="text">
        <a href="#" class="link text" @click.prevent="goto({ page: 'index' })"
          >Home</a
        >
        /
        <a href="#" class="link text" @click.prevent="goto({ page: 'blog' })"
          >Blog</a
        >
        {{ currentTag ? "/" : "" }}
        <a href="#" class="link text" @click.prevent="goto({ tag: currentTag })">{{
          currentTag
        }}</a>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  name: "BlogPageBanner",
  props: ["goto", "currentTag", "currentArticleId"],
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.banner {
  position: relative;
  min-height: pxToVw(356);
  background: url(../assets/Blog-Banner.jpg), lightgray 50% / cover no-repeat;

  &__header {
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50%;
    border-radius: 37px 37px 0px 0px;
    padding: 4.1rem 7.8rem;
    background: #fff;
    text-align: center;
  }
}
</style>
