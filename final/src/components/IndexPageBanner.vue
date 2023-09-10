<template>
  <section class="section banner">
    <div class="container banner__container">
      <div class="banner__inner">
        <h1 class="heading heading_main banner__heading">
          Let Your Home Be Unique
        </h1>
        <p class="text banner__paragraph">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <BigButton link-to="error">Get Started</BigButton>
      </div>
    </div>
  </section>
</template>

<script>
import BigButton from "./BigButton.vue";

export default {
  name: "IndexPageBanner",
  components: {
    BigButton,
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.banner {
  &__container {
    border-radius: 7rem;
    background: {
      color: lightgray;
      image: url(../assets/images/Banner.png);
      repeat: no-repeat;
      size: cover;
      position: 50%;
    }
  }

  &__inner {
    box-sizing: content-box;
    padding-block: pxToVw(208);
    padding-inline: 5.2rem;
  }

  &__heading,
  &__paragraph {
    width: math.div(434, 1200) * 100%;
  }

  &__headding {
    margin-bottom: 1.8rem;
  }

  &__paragraph {
    margin-bottom: 2.1rem;
  }

  @media (max-width: $breakpoint-xs) {
    &__heading,
    &__paragraph {
      width: 100%;
    }
  }
}
</style>
