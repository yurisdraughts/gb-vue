<template>
  <section class="section latest">
    <div class="container">
      <h2 class="section-header heading">Latest Post</h2>
      <div
        class="link latest__wrapper"
        @click="goto({ article: lastArticleIndex })"
      >
        <img
          :src="require('@/assets/' + lastArticle.imgSrc)"
          alt="Latest"
          class="latest__img"
          width="569"
          height="478"
        />
        <div class="latest__text-wrapper">
          <h2 class="latest__heading heading">
            {{ lastArticle.heading }}
          </h2>
          <div v-html="lastArticle.fullHtml" />
          <div class="latest__bottom">
            <p class="text">
              {{ lastArticle.date.getDate() }}
              {{
                lastArticle.date.toLocaleString("en-US", { month: "long" })
              }},{{ lastArticle.date.getFullYear() }}
            </p>
            <div class="round-button round-button_small">
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
  name: "BlogPageLatest",
  props: ["goto", "articles"],
  data() {
    return {
      lastArticle: this.articles.at(-1),
      lastArticleIndex: this.articles.length - 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.latest {
  margin-bottom: pxToVw(150);

  &__wrapper {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 6.5rem;
    padding: 2.2rem;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  }

  &__img {
    width: pxToVw(569);
    height: auto;
    border-radius: pxToVw(50);
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
}
</style>
