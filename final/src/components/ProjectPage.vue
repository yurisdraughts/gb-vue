<template>
  <div class="projects">
    <Banner
      :goto="goto"
      variant="project"
      :current-project-id="currentProjectId"
    />
    <section class="section projects__section">
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
        <div class="projects__wrapper">
          <IndexPageProjectItem
            class="projects__item"
            :goto="goto"
            v-for="(project, index) in projectsOnPage"
            :project="project"
            :key="index"
          />
        </div>
      </div>
    </section>
    <Pagination
      :current-page="currentPage"
      :number-of-items="filteredProjects.length"
      :number-of-pages-shown="numberOfPagesShown"
      :set-start="setStart"
    />
  </div>
</template>

<script>
import projects from "@/assets/projects";
import { categories } from "@/assets/projects";
import Banner from "./Banner.vue";
import IndexPageProjectItem from "./IndexPageProjectItem.vue";
import Pagination from "./Pagination.vue";

export default {
  name: "ProjectPage",
  props: ["goto", "currentProjectId"],
  components: {
    Banner,
    IndexPageProjectItem,
    Pagination,
  },
  data() {
    return {
      projects,
      start: 0,
      currentPage: 0,
      numberOfPagesShown: 8,
      filters: categories,
      currentFilter: categories[1],
    };
  },
  computed: {
    filteredProjects() {
      return projects.filter(
        (project) => project.category === this.currentFilter
      );
    },
    projectsOnPage() {
      return structuredClone(
        this.filteredProjects.slice(this.start, this.start + 8)
      ).reverse();
    },
  },
  methods: {
    setStart(currentPage) {
      this.currentPage = currentPage;
      this.start = currentPage * this.numberOfPagesShown;
    },
    setFilter(filter) {
      this.currentFilter = filter;
      this.currentPage = 0;
      this.start = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  margin-bottom: pxToVw(200);

  &__section {
    margin-bottom: pxToVw(61);
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    max-height: pxToVw(3500);
  }

  &__item {
    width: min(585px, calc(50% - 2 * 3rem));
    margin-right: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: $breakpoint-sm) {
    &__wrapper {
      max-height: fit-content;
    }

    &__item {
      width: 100%;
      margin-right: 0;
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
      color: #fff;
    }
  }
}
</style>
