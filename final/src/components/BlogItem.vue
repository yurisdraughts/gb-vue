<template>
  <a href="#" class="link blog-item" @click.prevent="goto({ article: dest })">
    <div class="blog-item__img-wrapper">
      <img
        :src="require('@/assets/' + article.imgSrc)"
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
      <div class="round-button round-button_small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="53"
          viewBox="0 0 52 53"
          fill="none"
          class="round-button__image"
        >
          <circle
            cx="26"
            cy="26.267"
            r="26"
            fill="#F4F0EC"
            class="blog-item__round-button"
          />
          <path
            d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["goto", "dest", "article"],
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.blog-item {
  @include transition(background-color);
  display: block;
  border-radius: pxToVw(62);
  border: 1px solid #e7e7e7;
  padding: 2.1rem;
  box-shadow: 0rem 1rem 3rem 0rem rgba(255, 255, 255, 0.25);

  &:hover {
    background-color: #f4f0ec;
  }

  &__round-button {
    @include transition(fill);
  }

  &:hover &__round-button {
    fill: white;
  }

  &__img {
    width: 100%;
    height: auto;
    border-radius: pxToVw(45) pxToVw(45) 0 0;
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
