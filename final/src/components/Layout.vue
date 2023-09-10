<template>
  <div id="layout">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "PageLayout",
  components: {
    Header,
    Footer,
  },
};
</script>
