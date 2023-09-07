<template>
  <div id="layout">
    <Header :goto="goto" />
    <main>
      <slot></slot>
    </main>
    <Footer :goto="goto" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "PageLayout",
  props: ["goto"],
  components: {
    Header,
    Footer,
  },
};
</script>
