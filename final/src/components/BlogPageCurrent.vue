<template>
  <section class="section current">
    <div class="container current__container">
      <div class="current__main">
        <h2 class="heading current__heading">
          {{ currentArticle.heading }}
        </h2>
        <img
          :src="require('@/assets/' + currentArticle.imgSrc)"
          :alt="currentArticle.heading"
          width="799"
          height="539"
          class="current__img"
        />
        <p class="current__date text">
          {{ currentArticle.date.getDate() }}
          {{
            currentArticle.date.toLocaleString("en-US", {
              month: "long",
            })
          }},{{ currentArticle.date.getFullYear() }}
        </p>
        <div v-html="currentArticle.fullHtml" />
      </div>
      <div class="text current__tags">
        <div class="heading current__tags-heading">Tags</div>
        <div class="current__tags-wrapper">
          <a
            href="#"
            class="current__tag link text"
            v-for="(currentTag, index) in currentArticle.tags"
            :key="index"
            @click.prevent="goto({ tag: currentTag })"
          >
            {{ currentTag }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPageCurrent",
  props: ["goto", "articles", "currentArticleId", "currentTag"],
  computed: {
    currentArticle() {
      let currentArticle;

      for (const article of this.articles) {
        if (article.id === this.currentArticleId) {
          currentArticle = article;
        }
      }

      return currentArticle;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.current {
  &__container {
    display: grid;
    grid-auto-flow: column;
    gap: pxToVw(52);
  }

  &__heading {
    margin-bottom: 2.1rem;
  }

  &__img {
    width: pxToVw(799);
    height: auto;
    border-radius: pxToVw(50);
  }

  &__date {
    margin-block: 4.6rem 4.8rem;
    font-size: 1.6rem;
    letter-spacing: 0.016rem;
    text-transform: capitalize;
  }

  &__tags {
    min-width: pxToVw(345);
  }

  &__tags-heading {
    margin-bottom: 2.4rem;
    font-size: 2.5rem;
    letter-spacing: 0.05rem;
  }

  &__tags-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  &__tag {
    @include transition(background-color);
    border-radius: 1rem;
    margin-right: 1rem;
    margin-bottom: 1.1rem;
    padding: 0.9rem 3rem;
    background-color: #f4f0ec;
    font-size: 1.8rem;

    &:hover {
      background-color: #292f36;
      color: #fff;
    }
  }
}
</style>
