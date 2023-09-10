<template>
  <section class="section counter">
    <div class="container counter__container">
      <div class="counter__counter">
        <h2 class="heading heading_counter">12</h2>
        <div class="text">Years Of Experiance</div>
      </div>
      <div class="counter__counter">
        <h2 class="heading heading_counter">85</h2>
        <div class="text">Success Project</div>
      </div>
      <div class="counter__counter">
        <h2 class="heading heading_counter">15</h2>
        <div class="text">Active Project</div>
      </div>
      <div class="counter__counter">
        <h2 class="heading heading_counter">95</h2>
        <div class="text">Happy CUstomers</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPageCounter",
};
</script>

<style lang="scss" scoped>
.counter {
  padding-block: pxToVw(151);
  background-color: $light-background-color;

  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    padding-inline: pxToVw(1200 - 1082);
  }

  &__counter {
    position: relative;
    display: grid;
    width: fit-content;
    justify-items: center;

    &:not(:first-child) {
      margin-left: pxToVw(76);

      &::before {
        position: absolute;
        top: 1.1rem;
        left: pxToVw(-76);
        display: block;
        content: "";
        width: 1px;
        height: 13rem;
        background: $accent-color;
      }
    }

    &:not(:last-child) {
      margin-right: pxToVw(54);
    }
  }

  @media (max-width: $breakpoint-md) {
    &__container {
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }

    &__counter {
      margin-inline: pxToVw(76) !important;

      &:nth-child(3)::before {
        display: none;
      }

      &:nth-child(3),
      &:nth-child(4) {
        margin-top: pxToVw(76);

        &::after {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          content: "";
          width: 13rem;
          height: 1px;
          background: $accent-color;
        }
      }
    }
  }

  @media (max-width: $breakpoint-sm) {
    &__container {
      grid-template-columns: 1fr;
    }

    &__counter {
      margin-inline: pxToVw(54) !important;

      &:nth-child(2),
      &:nth-child(4) {
        &::before {
          display: none;
        }
      }

      &:not(:first-child) {
        margin-top: pxToVw(76);

        &::after {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          content: "";
          width: 13rem;
          height: 1px;
          background: $accent-color;
        }
      }
    }
  }
}
</style>
