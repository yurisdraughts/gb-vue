<template>
  <section class="section section_projects">
    <div class="container">
      <div class="projects__filter filter">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          class="text filter__button"
          :class="filter === currentFilter ? 'filter__button_current' : ''"
          @click="setFilter(filter)"
        >
          {{ filter }}
        </button>
      </div>
      <div class="projects__wrapper" v-if="projectsOnPage.length !== 0">
        <ProjectItem
          class="projects__item"
          v-for="(project, index) in projectsOnPage"
          :project="project"
          :key="index"
          variant="project"
        />
      </div>
      <div v-else class="text projects__no-projects">No projects</div>
      <Pagination
        :current-page="currentPage"
        :number-of-items="filteredProjects.length"
        :number-of-items-shown="numberOfProjectsShown"
        :set-starting-index="setStartingIndex"
      />
    </div>
  </section>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import Pagination from "./Pagination.vue";

export default {
  name: "ProjectPageProjects",
  components: {
    ProjectItem,
    Pagination,
  },
  data() {
    return {
      startingIndex: 0,
      currentPage: 0,
      numberOfProjectsShown: 8,
      currentFilter: null,
    };
  },
  created() {
    this.currentFilter = this.filters[1];
  },
  computed: {
    projects() {
      return this.$store.getters.getProjects;
    },
    filters() {
      return this.$store.getters.getProjectCategories;
    },
    filteredProjects() {
      return this.projects.filter(
        (project) => project.category === this.currentFilter
      );
    },
    projectsOnPage() {
      return JSON.parse(
        JSON.stringify(
          this.filteredProjects.slice(
            this.startingIndex,
            this.startingIndex + this.numberOfProjectsShown
          )
        )
      ).reverse();
    },
  },
  methods: {
    setStartingIndex(currentPage) {
      this.currentPage = currentPage;
      this.startingIndex = currentPage * this.numberOfProjectsShown;
    },
    setFilter(filter) {
      this.currentFilter = filter;
      this.currentPage = 0;
      this.startingIndex = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  $gap: pxToVw(30);

  &__no-projects {
    margin: 0 auto;
    width: fit-content;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin-left: $gap;
    max-height: pxToVw(3480);
  }

  &__item {
    width: pxToVw(585);
    margin-right: $gap;
    margin-bottom: $gap;
  }

  @media (max-width: $breakpoint-sm) {
    &__wrapper {
      max-height: fit-content;
    }

    &__item {
      width: 100%;
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }
}

.filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  width: fit-content;
  border-radius: 18px;
  border: 1px solid $accent-color;
  margin-bottom: pxToVw(61);

  &__button {
    @include transition(color background-color);
    border: none;
    border-radius: 1.8rem;
    padding: 2.6rem pxToVw(66);
    background-color: transparent;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.036rem;
    cursor: pointer;

    &:hover,
    &_current {
      background-color: $accent-color;
      color: $neutral-background-color;
    }
  }
}
</style>
