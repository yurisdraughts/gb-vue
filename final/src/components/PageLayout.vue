<template>
  <div id="layout">
    <PageHeader :goto="goto" />
    <main>
      <slot></slot>
    </main>
    <PageFooter :goto="goto" />
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "PageLayout",
  props: ["goto"],
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style scoped lang="scss"></style>
