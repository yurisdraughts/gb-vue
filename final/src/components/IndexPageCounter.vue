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
@import "../assets/variables";
.counter {
  padding-block: pxToVw(151);
  background-color: #f4f0ec;

  &__container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding-inline: 3vw;
  }

  &__counter {
    position: relative;
    display: grid;
    width: fit-content;
    justify-items: center;

    &:not(:first-child) {
      margin-left: 4vw;

      &::before {
        position: absolute;
        top: 1.1rem;
        left: -4vw;
        display: block;
        content: "";
        width: 1px;
        height: 13rem;
        background: $accent-color;
      }
    }

    &:not(:last-child) {
      margin-right: min(pxToVw(54));
    }
  }
}
</style>
