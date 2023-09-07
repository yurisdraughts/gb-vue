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
        <a href="#" class="button"
          >Get Started<svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="button__arrow-icon"
          >
            <path
              d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
              class="button__arrow-icon-path"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPageBanner",
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
