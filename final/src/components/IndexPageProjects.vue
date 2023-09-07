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
        <IndexPageProjectItem
          :goto="goto"
          v-for="(project, index) in projects.slice(projects.length - 4)"
          :project="project"
          :key="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import projects from "@/assets/projects";
import IndexPageProjectItem from "./IndexPageProjectItem.vue";

export default {
  name: "IndexPageProjects",
  props: ["goto"],
  components: {
    IndexPageProjectItem,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>
.project {
  &__header {
    margin-bottom: pxToVw(93);
  }

  &__items-wrapper {
    display: grid;
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
