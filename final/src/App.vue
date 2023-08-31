<template>
  <div id="app">
    <PageLayout :goto="goto">
      <IndexPage
        v-if="currentPage === 'index'"
        :goto="goto"
        :articles="articles"
      />
      <BlogPage
        v-if="currentPage === 'blog'"
        :goto="goto"
        :articles="articles"
        :current-article-id="currentArticleId"
        :current-tag="currentTag"
      />
    </PageLayout>
  </div>
</template>

<script>
import articles from "./assets/articles.js";
import PageLayout from "./components/PageLayout.vue";
import IndexPage from "./components/IndexPage.vue";
import BlogPage from "./components/BlogPage.vue";

export default {
  name: "App",
  components: {
    PageLayout,
    IndexPage,
    BlogPage,
  },
  data() {
    return {
      articles,
      currentPage: "index",
      currentArticleId: null,
      currentTag: null,
    };
  },
  methods: {
    goto(dest) {
      if (dest.page !== undefined) {
        this.currentPage = dest.page;
        this.currentArticleId = null;
        this.currentTag = null;
      } else if (dest.tag !== undefined) {
        this.currentPage = "blog";
        this.currentArticleId = null;
        this.currentTag = dest.tag;
      } else if (dest.article !== undefined) {
        this.currentPage = "blog";
        this.currentArticleId = dest.article;
        this.currentTag = null;
      }
    },
  },
};
</script>

<style lang="scss">
@import "assets/variables";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
}

body {
  margin-block: pxToVw(53) pxToVw(134);
  background: {
    image: url(assets/Background.png);
    size: cover;
  }
}

.button {
  @include transition(background-color);
  display: inline-block;
  border: none;
  padding: 2.6rem 4.9rem 2.6rem 4.8rem;
  border-radius: 1.8rem;
  background-color: $heading-color;
  box-shadow: 0rem 1rem 2rem 0rem rgba(192, 192, 192, 0.35);

  color: #fff;
  font-family: "Jost";
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.036rem;
  text-decoration: none;

  &__arrow-icon {
    margin-left: 1rem;
  }

  &__arrow-icon-path {
    @include transition(stroke);
    stroke: $accent-color;
  }

  &:hover {
    background-color: $accent-color;
  }

  &:hover &__arrow-icon-path {
    stroke: $heading-color;
  }
}

.round-button {
  display: block;
  border: none;
  width: pxToVw(70);
  height: pxToVw(70);
  color: inherit;
  background-color: transparent;
  transform-origin: center;
  cursor: inherit;

  &_small {
    width: pxToVw(52);
    height: pxToVw(52);
  }

  &__image {
    width: 100%;
    height: auto;
  }
}

.container {
  margin: 0 auto;
  width: min(1200px, 62.5vw);
}

.heading {
  color: $heading-color;
  font-family: "DM Serif Display";
  font-size: 5rem;
  font-weight: inherit;
  line-height: 125%;
  letter-spacing: 0.01rem;

  &_logo,
  &_main {
    letter-spacing: normal;
  }

  &_logo {
    font-size: 4rem;
  }

  &_main {
    font-size: 6.5rem;
  }

  &_item {
    font-size: 2.5rem;
    letter-spacing: 0.005rem;
  }

  &_counter {
    color: $accent-color;
    font-size: 8.5rem;
    letter-spacing: 0.17rem;
  }

  &_footer {
    font-size: 2.5rem;
    letter-spacing: normal;
  }
}

.link {
  @include transition(color);
  text-decoration: none;

  &__icon-path {
    @include transition(fill);
  }

  &:hover {
    color: $accent-color;
    cursor: pointer;
  }

  &:hover &__icon-path {
    fill: $accent-color;
  }
}

.logo {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;
  width: fit-content;
}

.nav-list {
  &__list-item {
    display: block;
  }
}

.section {
  margin-bottom: pxToVw(96);

  &__header {
    display: grid;
    gap: 0.8rem;
    margin: 0 auto;
    width: 61.4%;
    text-align: center;
  }
}

.text {
  color: $text-color;
  font-family: "Jost";
  font-size: 2.2rem;
  line-height: 150%;
  letter-spacing: 0.022rem;

  &_blog {
    font-size: 1.6rem;
    letter-spacing: 0.016rem;
    text-transform: capitalize;
  }
}
</style>
