<template>
  <router-link :to="{ name: linkTo }" class="button">
    <slot></slot>
    <svg
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
  </router-link>
</template>

<script>
export default {
  name: "BigButton",
  props: ["linkTo"],
};
</script>
