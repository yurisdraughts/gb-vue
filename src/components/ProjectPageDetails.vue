<template>
  <section class="section project section_projects">
    <div class="container">
      <div class="project__text">
        <h1 class="heading project__heading">{{ project.heading }}</h1>
        <p
          class="text project__paragraph"
          v-for="(paragraph, index) in project.description"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
      <div class="project__images">
        <ProjectPageImage
          v-for="index in numberOfImages"
          :key="index"
          :class="[
            'project__image',
            { project__image_hidden: index !== currentImage },
          ]"
          :style="{ left: (index - currentImage) * 100 + 'vw' }"
          variant="carousel"
          :data="project"
          :onclick="flipFullScreenMode"
        />
      </div>
      <div class="pagination">
        <button
          v-for="index in numberOfImages"
          :key="index"
          class="pagination__circle"
          :class="{ pagination__circle_current: index === currentImage }"
          @click="currentImage = index"
        ></button>
      </div>
    </div>
    <Transition name="fullscreen">
      <ProjectPageImage
        v-if="isImageFullScreen"
        variant="fullscreen"
        :data="project"
        :onclick="flipFullScreenMode"
      />
    </Transition>
  </section>
</template>

<script>
import ProjectPageImage from "./ProjectPageImage.vue";

export default {
  name: "ProjectPageDetails",
  props: ["projectId"],
  components: {
    ProjectPageImage,
  },
  data() {
    return {
      isImageFullScreen: false,
      numberOfImages: 3,
      currentImage: 1,
    };
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.projectId);
    },
  },
  methods: {
    flipFullScreenMode() {
      this.isImageFullScreen = !this.isImageFullScreen;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.project {
  overflow: hidden;

  &__text {
    max-width: width(658);
    margin: 0 auto pxToVw(100);
  }

  &__heading {
    margin-bottom: 1.1rem;
  }

  &__paragraph {
    margin-bottom: 3.3rem;
  }

  &__images {
    position: relative;
  }

  &__image {
    @include transition(left opacity);
    width: 100%;
    opacity: 1;

    &_hidden {
      position: absolute;
      top: 0;
      opacity: 0;
    }
  }
}

.fullscreen {
  &-enter-active,
  &-leave-active {
    @include transition(opacity);
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

.pagination {
  display: grid;
  grid-auto-flow: column;
  gap: 0.9rem;
  margin: 2rem auto 0;
  width: fit-content;

  &__circle {
    border: 2px solid black;
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    background-color: transparent;
    cursor: pointer;

    &:hover,
    &_current {
      background-color: black;
    }
  }
}
</style>
