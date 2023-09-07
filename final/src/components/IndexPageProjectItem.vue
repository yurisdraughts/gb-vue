<template>
  <a
    href="#"
    class="link project-item"
    @click.prevent="goto({ page: 'project' })"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <article>
      <img
        :src="require('@/assets/images/' + project.img.src)"
        :alt="project.heading"
        class="project-item__img"
        :width="project.img.width"
        :height="project.img.height"
      />
      <div class="project-item__container">
        <div class="project-item__text">
          <h3 class="heading heading_item">{{ project.heading }}</h3>
          <div class="text">
            <template v-for="(tag, index) in project.tags">
              <a
                href="#"
                class="link"
                :key="index"
                @click.prevent="goto({ tag })"
                >{{ tag }}</a
              >
              {{ index + 1 !== project.tags.length ? " / " : "" }}
            </template>
          </div>
        </div>
        <RoundButton variant="large" :hovered="isHovering" />
      </div>
    </article>
  </a>
</template>

<script>
import RoundButton from "./RoundButton.vue";

export default {
  name: "IndexPageProjectItem",
  props: ["goto", "project"],
  components: {
    RoundButton,
  },
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  &__img {
    margin-bottom: 3rem;
    width: 100%;
    height: auto;
  }

  // &:nth-child(1) &__img {
  //   border-top-right-radius: 8rem;
  // }

  // &:nth-child(2) &__img {
  //   border-top-left-radius: 8rem;
  // }

  // &:nth-child(3) &__img {
  //   border-bottom-right-radius: 8rem;
  // }

  // &:nth-child(4) &__img {
  //   border-bottom-left-radius: 8rem;
  // }

  &__container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
