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
        <div
          class="link project-item"
          v-for="(project, index) in projects"
          :key="index"
          @click="goto({ page: 'project' })"
        >
          <img
            :src="require('@/assets/' + project.img.src)"
            :alt="project.heading"
            class="project-item__img"
            :width="project.img.width"
            :height="project.img.height"
          />
          <div class="project-item__container">
            <div class="project-item__text">
              <h3 class="heading heading_item">{{ project.heading }}</h3>
              <div class="text">{{ project.text }}</div>
            </div>
            <div class="round-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                class="round-button__image"
              >
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="round-button__path"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPageProjects",
  props: ["goto"],
  data() {
    return {
      projects: [
        {
          heading: "Modern Kitchan",
          text: "Decor / Artchitecture",
          img: { src: "Kitchan1.png", height: 525, width: 548 },
        },
        {
          heading: "Modern Kitchan",
          text: "Decor / Artchitecture",
          img: { src: "Kitchan2.png", height: 525, width: 548 },
        },
        {
          heading: "Modern Kitchan",
          text: "Decor / Artchitecture",
          img: { src: "Kitchan3.png", height: 525, width: 552 },
        },
        {
          heading: "Modern Kitchan",
          text: "Decor / Artchitecture",
          img: { src: "Kitchan4.png", height: 525, width: 550 },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.project {
  &__header {
    margin-bottom: pxToVw(93);
  }

  &__items-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: pxToVw(56) pxToVw(100);
  }
}

.project-item {
  &__img {
    margin-bottom: 3rem;
    width: 100%;
    height: auto;
  }

  &:nth-child(1) &__img {
    border-top-right-radius: 8rem;
  }

  &:nth-child(2) &__img {
    border-top-left-radius: 8rem;
  }

  &:nth-child(3) &__img {
    border-bottom-right-radius: 8rem;
  }

  &:nth-child(4) &__img {
    border-bottom-left-radius: 8rem;
  }

  &__container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
