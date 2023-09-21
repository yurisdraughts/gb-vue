<template>
  <header class="header">
    <div class="container header__container">
      <Logo class="header__logo" />
      <nav>
        <ul class="nav-list header__nav-list">
          <li class="nav-list__list-item">
            <router-link :to="{ name: 'index' }" class="link header__nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-list__list-item">
            <router-link
              :to="{ name: 'projects' }"
              class="link header__nav-link"
            >
              Project
            </router-link>
          </li>
          <li class="nav-list__list-item">
            <router-link :to="{ name: 'blog' }" class="link header__nav-link">
              Blog
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "PageHeader",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
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

  @media (max-width: $breakpoint-sm) {
    &__container {
      flex-direction: column;
    }

    &__logo {
      margin-bottom: 1.8rem;
    }

    &__nav-list {
      margin-bottom: 3.1rem;
    }
  }
}
</style>
