<template>
  <header class="header">
    <div class="container header__container">
      <a class="logo link" @click.prevent="goto({ page: 'index' })">
        <img
          src="../assets/Logo.svg"
          alt="Interno Logo"
          width="34"
          height="34"
        />
        <div class="heading heading_logo">Interno</div>
      </a>
      <nav>
        <ul class="nav-list header__nav-list">
          <li class="nav-list__list-item">
            <a
              class="link header__nav-link"
              @click.prevent="goto({ page: 'index' })"
              >Home</a
            >
          </li>
          <li class="nav-list__list-item">
            <a
              class="link header__nav-link"
              @click.prevent="goto({ page: 'project' })"
              >Project</a
            >
          </li>
          <li class="nav-list__list-item">
            <a
              class="link header__nav-link"
              @click.prevent="goto({ page: 'blog' })"
              >Blog</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["goto"],
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.header {
  margin-bottom: pxToVw(57);

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav-list {
    display: grid;
    grid-auto-flow: column;
    gap: 4.8rem;
  }

  &__nav-link {
    color: $heading-color;
    font-family: "Jost";
    font-size: 2rem;
    line-height: 125%;
  }
}
</style>
