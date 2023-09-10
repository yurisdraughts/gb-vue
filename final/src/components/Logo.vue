<template>
  <router-link class="logo link" :to="{ name: 'index' }">
    <img
      src="@/assets/images/Logo.svg"
      alt="Interno Logo"
      width="34"
      height="34"
    />
    <div class="heading heading_logo">Interno</div>
  </router-link>
</template>

<script>
export default {
  name: "SiteLogo",
};
</script>

<style lang="scss" scoped>
.logo {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;
  width: fit-content;
}
</style>
