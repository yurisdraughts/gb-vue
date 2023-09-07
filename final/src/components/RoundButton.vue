<template>
  <div class="round-button" :class="[`round-button_${variant}`, { hovered }]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="svg.width"
      :height="svg.height"
      :viewBox="`0 0 ${svg.width} ${svg.height}`"
      fill="none"
      class="round-button__svg"
    >
      <circle
        :cx="svg.circle.cx"
        :cy="svg.circle.cy"
        :r="svg.circle.r"
        fill="#F4F0EC"
        class="round-button__circle"
      />
      <path
        v-if="!empty"
        :d="svg.path.d"
        stroke="#292F36"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="round-button__path"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "RoundButton",
  props: {
    variant: String,
    hovered: Boolean,
    empty: Boolean,
  },
  computed: {
    svg() {
      let width, height, cx, cy, r, d;

      if (this.variant === "small" || this.variant == "pagination") {
        width = height = 53;
        cx = cy = r = 26;
        d = "M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815";
      } else if (this.variant === "large") {
        width = height = 70;
        cx = cy = r = 35;
        d = "M32 44L40 35L32 26";
      } else {
        throw new Error("Unknown variant of RoundButton compinent");
      }

      return { width, height, circle: { cx, cy, r }, path: { d } };
    },
  },
};
</script>

<style lang="scss" scoped>
.round-button {
  width: 5.2rem;
  height: 5.2rem;

  &__path {
    @include transition(stroke);
    stroke: $heading-color;
  }

  &:hover &__path {
    stroke: $accent-color;
  }

  &__svg {
    width: 5.2rem;
    height: 5.2rem;
  }

  &_small &__circle {
    @include transition(fill);
    fill: $light-bg-colot;
  }

  &_small.hovered &__circle {
    fill: #fff;
  }

  &_large {
    width: 7rem;
    height: 7rem;
  }

  &_large &__svg {
    width: 7rem;
    height: 7rem;
  }

  &_large &__path {
    @include transition(stroke);
    stroke: $heading-color;
  }

  &_large.hovered &__path {
    stroke: $accent-color;
  }

  &_pagination &__circle {
    fill: none;
    stroke: $accent-color;
  }
}
</style>
