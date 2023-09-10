<template>
  <section class="section project">
    <div class="container">
      <header class="section__header project__header">
        <h2 class="heading">Follow Our Projects</h2>
        <p class="text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </header>
      <div class="project__items-wrapper">
        <ProjectItem
          v-for="(project, index) in projects.slice(projects.length - 4)"
          :key="index"
          :project="project"
          :is-index-page="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "IndexPageProjects",
  components: {
    ProjectItem,
  },
  computed: {
    projects() {
      return this.$store.getters.getProjects;
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  &__header {
    margin-bottom: pxToVw(93);
  }

  &__items-wrapper {
    display: grid;
    align-items: end;
    grid-template-columns: repeat(2, 1fr);
    gap: pxToVw(56) pxToVw(100);
  }

  @media (max-width: $breakpoint-sm) {
    &__items-wrapper {
      grid-template-columns: 1fr;
    }
  }
}
</style>
