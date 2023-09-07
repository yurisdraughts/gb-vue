<template>
  <a
    href="#"
    class="link"
    @click.prevent="goto({ article: dest })"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <article class="blog-item">
      <div class="blog-item__img-wrapper">
        <img
          :src="require('@/assets/images/' + article.imgSrc)"
          :alt="article.category"
          class="blog-item__img"
          width="340"
          height="289"
        />
        <div class="blog-item__category">{{ article.category }}</div>
      </div>
      <h3 class="heading heading_item blog-item__heading">
        {{ article.heading }}
      </h3>
      <div class="blog-item__bottom">
        <p class="text text_blog">
          {{ article.date.getDate() }}
          {{ article.date.toLocaleString("en-US", { month: "long" }) }},{{
            article.date.getFullYear()
          }}
        </p>
        <RoundButton variant="small" :hovered="isHovering" />
      </div>
    </article>
  </a>
</template>

<script>
import RoundButton from "./RoundButton.vue";

export default {
  name: "BlogItem",
  props: ["goto", "dest", "article"],
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
.blog-item {
  @include transition(background-color);
  display: block;
  border-radius: 6.2rem;
  border: 1px solid #e7e7e7;
  padding: 2.1rem;
  box-shadow: 0rem 1rem 3rem 0rem rgba(255, 255, 255, 0.25);

  &:hover {
    background-color: #f4f0ec;
  }

  &__img {
    width: 100%;
    height: auto;
    border-radius: 4.5rem 4.5rem 0 0;
  }

  &__img-wrapper {
    position: relative;
    margin-bottom: 2.1rem;
  }

  &__category {
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    border-radius: 0.8rem 0.8rem 0.8rem 0;
    padding: 0.4rem 1.1rem 0.8rem;
    background: #fff;

    color: $text-color;
    font-family: Jost;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.016rem;
    text-transform: capitalize;
  }

  &__heading {
    margin-bottom: 3rem;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
