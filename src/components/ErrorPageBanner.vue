<template>
  <div class="error">
    <div class="container">
      <h1 class="heading error__heading">404</h1>
      <p class="heading error__text">
        We are sorry, but the page you requested was not found
      </p>
      <BigButton link-to="index" class="error__button">Back To Home</BigButton>
    </div>
    <img
      class="error__image"
      src="@/assets/images/Error-Page.jpg"
      alt="Error page background"
      role="presentation"
    />
  </div>
</template>

<script>
import BigButton from "./BigButton.vue";

export default {
  name: "ErrorPageBanner",
  components: {
    BigButton,
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.error {
  position: relative;

  &__heading,
  &__text {
    width: width(569);
  }

  &__heading {
    color: $accent-color;
    font-size: 25rem;
    margin-bottom: 1.5rem;
  }

  &__text {
    font-size: 3.5rem;
    letter-spacing: 0.035rem;
    margin-bottom: 2.3rem;
  }

  &__button {
    padding-inline: 5.4rem;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 0 0 pxToVw(353);
    width: pxToVw(913);
  }
}

@media (max-width: $breakpoint-lg) {
  .error {
    &__image {
      display: block;
      position: static;
      margin: 8.1rem auto 0;
      width: width(1920 - 2 * 360);
    }
  }
}

@media (max-width: $breakpoint-md) {
  .error {
    &__heading {
      font-size: min(25rem, math.div(250px, $breakpoint-md) * 100vw);
    }
  }
}
</style>
