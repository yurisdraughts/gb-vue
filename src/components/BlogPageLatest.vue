<template>
  <section class="section latest">
    <div class="container">
      <h2 class="section__blog-page-heading heading">Latest Post</h2>
      <router-link
        :to="{ name: 'article', params: { articleId: lastArticleIndex } }"
        class="link latest__wrapper"
        @mouseenter.native="isHovered = true"
        @mouseleave.native="isHovered = false"
      >
        <img
          :src="require('@/assets/images/' + lastArticle.imgSrc)"
          alt="Latest"
          class="latest__img"
          width="569"
          height="478"
        />
        <div class="latest__text-wrapper">
          <h2 class="latest__heading heading">
            {{ lastArticle.heading }}
          </h2>
          <p class="text latest__text">
            {{ firstParagraph }}
          </p>
          <div class="latest__bottom">
            <p class="text">
              {{ lastArticle.date.getDate() }}
              {{
                lastArticle.date.toLocaleString("en-US", { month: "long" })
              }},{{ lastArticle.date.getFullYear() }}
            </p>
            <RoundButton variant="small" :is-hovered="isHovered" />
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import RoundButton from "./RoundButton.vue";

export default {
  name: "BlogPageLatest",
  components: {
    RoundButton,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    lastArticle() {
      return this.$store.getters.getArticles.at(-1);
    },
    lastArticleIndex() {
      return this.$store.getters.getArticles.length - 1;
    },
    firstParagraph() {
      let paragraph = "";

      for (const el of this.lastArticle.content) {
        if (el.paragraph) {
          paragraph = el.paragraph;
          break;
        }
      }

      return paragraph;
    },
  },
};
</script>

<style lang="scss" scoped>
.latest {
  margin-bottom: pxToVw(150);

  &__wrapper {
    @include transition(background-color);
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 6.5rem;
    padding: 2.2rem;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

    &:hover {
      background-color: #f4f0ec;
    }
  }

  &__img {
    width: pxToVw(569);
    height: auto;
    border-radius: 5rem;
  }

  &__text-wrapper {
    margin-right: 3.4rem;
  }

  &__heading {
    margin-bottom: 2.2rem;
    font-size: 2.5rem;
    letter-spacing: 0.05rem;
  }

  &__text {
    margin-bottom: 4.1rem;
  }

  &__bottom {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: $breakpoint-lg) {
    &__wrapper {
      grid-auto-flow: row;
      justify-items: center;
    }

    &__img {
      width: 100%;
    }
  }
}
</style>
