<template>
  <router-link
    :to="{ name: 'project', params: { projectId: project.id } }"
    class="link project-item"
    :class="isIndexPage ? 'project-item_index' : ''"
    @mouseenter.native="isHovered = true"
    @mouseleave.native="isHovered = false"
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
              <router-link
                :to="{ name: 'tag', params: { tagId: tag } }"
                class="link"
                :key="index"
              >
                {{ tag }}
              </router-link>
              {{ index + 1 !== project.tags.length ? " / " : "" }}
            </template>
          </div>
        </div>
        <RoundButton variant="large" :is-hovered="isHovered" />
      </div>
    </article>
  </router-link>
</template>

<script>
import RoundButton from "./RoundButton.vue";

export default {
  name: "ProjectItem",
  props: ["project", "isIndexPage"],
  components: {
    RoundButton,
  },
  data() {
    return {
      isHovered: false,
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

  &_index:nth-child(1) &__img {
    border-top-right-radius: 8rem;
  }

  &_index:nth-child(2) &__img {
    border-top-left-radius: 8rem;
  }

  &_index:nth-child(3) &__img {
    border-bottom-right-radius: 8rem;
  }

  &_index:nth-child(4) &__img {
    border-bottom-left-radius: 8rem;
  }

  &__container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
