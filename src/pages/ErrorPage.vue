<template>
  <div>
    <Header />
    <ErrorPageBanner />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ErrorPageBanner from "@/components/ErrorPageBanner.vue";

export default {
  name: "ErrorPage",
  components: {
    Header,
    ErrorPageBanner,
  },
};
</script>

<style lang="scss" scoped></style>
