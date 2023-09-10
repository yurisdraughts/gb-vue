<template>
  <section class="section current">
    <div class="container current__container">
      <div class="current__main">
        <h2 class="heading current__heading">
          {{ currentArticle.heading }}
        </h2>
        <img
          :src="require('@/assets/images/' + currentArticle.imgSrc)"
          :alt="currentArticle.heading"
          width="799"
          height="539"
          class="current__img"
        />
        <div class="current__info text">
          <div class="">
            {{ currentArticle.date.getDate() }}
            {{
              currentArticle.date.toLocaleString("en-US", {
                month: "long",
              })
            }},{{ currentArticle.date.getFullYear() }}
          </div>
          <div>
            <router-link :to="{ name: 'index' }" class="link">Home</router-link>
            /
            <router-link :to="{ name: 'blog' }" class="link">Blog</router-link>
          </div>
        </div>
        <template v-for="(el, i) in currentArticle.content">
          <h3 v-if="el.heading" :key="i" class="heading">{{ el.heading }}</h3>
          <p v-else-if="el.paragraph" :key="i" class="text current__text">
            {{ el.paragraph }}
          </p>
          <blockquote
            v-else-if="el.quote"
            :key="i"
            class="text current__text current__quote"
          >
            {{ el.quote }}
          </blockquote>
          <template v-else-if="el.list">
            <ol :key="i" class="current__text">
              <li
                v-for="(item, j) in el.list"
                :key="j"
                class="text current__list-item"
              >
                {{ item }}
              </li>
            </ol>
          </template>
        </template>
      </div>
      <div class="text current__tags">
        <div class="heading current__tags-heading">Tags</div>
        <div class="current__tags-wrapper">
          <router-link
            :to="{ name: 'tag', params: { tagId: tag } }"
            class="current__tag link text"
            v-for="(tag, index) in currentArticle.tags"
            :key="index"
          >
            {{ tag }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPageCurrent",
  props: ["articleId"],
  computed: {
    currentArticle() {
      return this.$store.getters.getArticleById(this.articleId);
    },
  },
};
</script>

<style lang="scss" scoped>
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
    width: 100%;
    height: auto;
    border-radius: 5rem;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    margin-block: 4.6rem 4.8rem;
    font-size: 1.6rem;
    letter-spacing: 0.016rem;
    text-transform: capitalize;
  }

  &__text:not(:last-child) {
    margin-bottom: 3.5rem;
  }

  &__list-item {
    display: grid;
    grid-auto-flow: column;
    gap: 1.4rem;
    list-style: none;
    counter-increment: custom; // increment counter value on every <li>

    &:first-child {
      counter-reset: custom; // start counter on first <li>
    }

    &::before {
      display: block;
      top: 0;
      left: -1.4rem;
      content: counter(custom); // display current counter value
      color: #cda274;
      font-family: DM Serif Display;
      font-size: 20px;
      line-height: 125%;
      letter-spacing: 0.4px;
    }

    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }

  &__quote {
    border-radius: 50px;
    padding: 5.3rem pxToVw(227);
    background: $light-background-color;
    font-family: DM Serif Display;
    font-style: italic;
    line-height: 125%;
    text-align: center;
    letter-spacing: 0.05rem;
    color: $accent-color;

    &::before {
      display: block;
      position: static;
      content: "”";
      height: 9rem;
      font-size: 13.3rem;
      font-style: italic;
      line-height: 125%;
      letter-spacing: 0.4rem;
    }
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
    background-color: $light-background-color;
    font-size: 1.8rem;

    &:hover {
      background-color: $heading-color;
      color: $neutral-background-color;
    }
  }

  @media (max-width: $breakpoint-md) {
    &__container {
      grid-auto-flow: row;
    }
  }
}
</style>
