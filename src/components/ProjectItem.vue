<template>
  <router-link
    :to="{ name: 'project', params: { projectId: project.id } }"
    class="link project-item"
    :class="variant === 'index' ? 'project-item_index' : ''"
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
                :to="{ name: 'tag', params: { tagName: tag } }"
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
      <svg
        v-if="variant === 'project' && (project.isFavorite || isHovered)"
        class="project-item__star star"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="35"
        viewBox="0 0 36 35"
        fill="none"
        @click.prevent="toggleFavorite"
      >
        <g filter="url(#filter0_d_2_17)">
          <path
            class="star__path"
            :class="{ star__path_favorite: project.isFavorite }"
            d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
            fill="#FFA928"
            stroke="#FFA928"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2_17"
            x="0.186523"
            y="0.431396"
            width="35.627"
            height="34.3618"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_17"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_17"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </article>
  </router-link>
</template>

<script>
import RoundButton from "./RoundButton.vue";

export default {
  name: "ProjectItem",
  props: ["project", "variant"],
  components: {
    RoundButton,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch("toggleFavoriteProject", this.project.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  position: relative;

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

  &__star {
    position: absolute;
    top: 0.4rem;
    right: 0;
  }
}

.star {
  $color: #ffa928;
  $no-color: #ffa92800;

  &__path {
    @include transition(fill);
    fill: $no-color;
  }

  &:hover &__path,
  &__path_favorite {
    fill: $color;
  }
}
</style>
