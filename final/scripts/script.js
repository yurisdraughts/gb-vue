const sourceOfTruth = {
  currentPage: null,
  articles: [
    {
      id: 0,
      category: "Kitchan Design",
      imgSrc: "images/Kitchan-Design2.png",
      heading: "Let’s Get Solution For Building Construction Work",
      date: new Date(2022, 11, 26),
      tags: ["Kithen", "Kitchen Planning"],
      fullHtml: `
      <p class="latest__text text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpis dignissim maximus.posuere in.Contrary to popular
        belief.
      </p>
      <p class="latest__text text">
        Lorem Ipsum is not simply random text. It has roots in a piece
        of classica.
      </p>
      `,
    },
    {
      id: 1,
      category: "Living Design",
      imgSrc: "images/Living-Design2.png",
      heading: "Low Cost Latest Invented Interior Designing Ideas.",
      date: new Date(2022, 11, 22),
      tags: ["Living", "Bedroom", "Building", "Architecture"],
      fullHtml: `
      <p class="latest__text text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpis dignissim maximus.posuere in.Contrary to popular
        belief.
      </p>
      <p class="latest__text text">
        Lorem Ipsum is not simply random text. It has roots in a piece
        of classica.
      </p>
      `,
    },
    {
      id: 2,
      category: "Interior Design",
      imgSrc: "images/Interior-Design2.png",
      heading: "Best For Any Office & Business Interior Solution",
      date: new Date(2022, 11, 25),
      tags: ["Kithen", "Bedroom", "Interior"],
      fullHtml: `
      <p class="latest__text text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpis dignissim maximus.posuere in.Contrary to popular
        belief.
      </p>
      <p class="latest__text text">
        Lorem Ipsum is not simply random text. It has roots in a piece
        of classica.
      </p>
      `,
    },
    {
      id: 3,
      category: "Kitchan Design",
      imgSrc: "images/Kitchan-Design.png",
      heading: "Let’s Get Solution For Building Construction Work",
      date: new Date(2022, 11, 26),
      tags: [
        "Kithen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bedroom",
      ],
      fullHtml: `
      <p class="latest__text text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpis dignissim maximus.posuere in.Contrary to popular
        belief.
      </p>
      <p class="latest__text text">
        Lorem Ipsum is not simply random text. It has roots in a piece
        of classica.
      </p>
      `,
    },
    {
      id: 4,
      category: "Living Design",
      imgSrc: "images/Living-Design.png",
      heading: "Low Cost Latest Invented Interior Designing Ideas.",
      date: new Date(2022, 11, 22),
      tags: ["Bedroom", "Building", "Bedroom"],
      fullHtml: `
      <p class="latest__text text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpis dignissim maximus.posuere in.Contrary to popular
        belief.
      </p>
      <p class="latest__text text">
        Lorem Ipsum is not simply random text. It has roots in a piece
        of classica.
      </p>
      `,
    },
    {
      id: 5,
      category: "Interior Design",
      imgSrc: "images/Interior-Design.png",
      heading: "Best For Any Office & Business Interior Solution",
      date: new Date(2022, 11, 25),
      tags: ["Architecture", "Living"],
      fullHtml: `
      <p class="latest__text text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpis dignissim maximus.posuere in.Contrary to popular
        belief.
      </p>
      <p class="latest__text text">
        Lorem Ipsum is not simply random text. It has roots in a piece
        of classica.
      </p>
      `,
    },
    {
      id: 6,
      category: "Interior Design",
      imgSrc: "images/Interior-Design.png",
      heading: "Best For Any Office & Business Interior Solution",
      date: new Date(2022, 11, 25),
      tags: ["Building", "Architecture"],
      fullHtml: `
      <p class="latest__text text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpis dignissim maximus.posuere in.Contrary to popular
        belief.
      </p>
      <p class="latest__text text">
        Lorem Ipsum is not simply random text. It has roots in a piece
        of classica.
      </p>
      `,
    },
    {
      id: 7,
      category: "Interior Design",
      imgSrc: "images/Interior-Design.png",
      heading: "Best For Any Office & Business Interior Solution",
      date: new Date(2022, 11, 25),
      tags: ["Bedroom", "Building"],
      fullHtml: `
      <p class="latest__text text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpis dignissim maximus.posuere in.Contrary to popular
        belief.
      </p>
      <p class="latest__text text">
        Lorem Ipsum is not simply random text. It has roots in a piece
        of classica.
      </p>
      `,
    },
  ],
};

Vue.component("layout", {
  props: ["page"],
  data() {
    return {
      homeHref: this.page === "index" ? "" : "../index.html",
      projectHref: "#",
      blogHref:
        (this.page === "index" ? "pages/" : "") +
        (this.page === "blog" ? "#" : "blog.html"),
    };
  },
  beforeMount() {
    sourceOfTruth.currentPage = this.page;
  },
  template: /*html*/ `
  <div id="layout">
    <header class="header">
      <div class="container header__container">
        <a href="#" class="logo link">
          <img :src="(page === 'index' ? '' : '../') + 'images/Logo.svg'" alt="Interno Logo" width="34" height="34" />
          <div class="heading heading_logo">Interno</div>
        </a>
        <nav>
          <ul class="nav-list header__nav-list">
            <li class="nav-list__list-item">
              <a :href="homeHref" class="link header__nav-link">Home</a>
            </li>
            <li class="nav-list__list-item">
              <a :href="projectHref" class="link header__nav-link">Project</a>
            </li>
            <li class="nav-list__list-item">
              <a :href="blogHref" class="link header__nav-link">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="footer">
      <div class="container footer__container">
        <div class="footer__main">
          <a href="#" class="footer__logo logo link">
            <img :src="(page === 'index' ? '' : '../') + 'images/Logo.svg'" alt="Interno Logo" width="34" height="34" />
            <div class="heading heading_logo">Interno</div>
          </a>
          <p class="text footer__info">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div class="footer__socials">
            <a href="#" class="link">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                  fill="#292F36" class="link__icon-path" />
              </svg>
            </a>
            <a href="#" class="link">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                  fill="#292F36" class="link__icon-path" />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer__pages">
          <h3 class="heading heading_footer footer__heading">Pages</h3>
          <nav>
            <ul class="nav-list">
              <li class="nav-list__list-item footer__text">
                <a :href="homeHref" class="link text">Home</a>
              </li>
              <li class="nav-list__list-item footer__text">
                <a :href="projectHref" class="link text">Project</a>
              </li>
              <li class="nav-list__list-item footer__text">
                <a :href="blogHref" class="link text">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <div></div>
        <div class="footer__contact">
          <h3 class="heading heading_footer footer__heading">Contact</h3>
          <p class="text footer__text">
            55 East Birchwood Ave.<br />Brooklyn, New York 11201
          </p>
          <p class="text footer__text">contact@interno.com</p>
          <p class="text footer__text">(123) 456 - 7890</p>
        </div>
      </div>
    </footer>
  </div>
  `,
});

Vue.component("blog-wrapper", {
  data() {
    return {
      page: sourceOfTruth.currentPage,
    };
  },
  template: /*html*/ `
  <a v-if="page === 'index'" href="pages/blog.html" class="link blog-item">
    <slot></slot>
  </a>
  <div v-else class="link blog-item">
    <slot></slot>
  </div>
  `,
});

Vue.component("blog", {
  props: ["article"],
  data() {
    return {
      page: sourceOfTruth.currentPage,
    };
  },
  template: /*html*/ `
  <blog-wrapper>
    <div class="blog-item__img-wrapper">
      <img :src="(page !== 'index' ? '../' : '') + article.imgSrc" :alt="article.category" class="blog-item__img" width="340" height="289" />
      <div class="blog-item__category">{{article.category}}</div>
    </div>
    <h3 class="heading heading_item blog-item__heading">
      {{article.heading}}
    </h3>
    <div class="blog-item__bottom">
      <p class="text text_blog">
        {{article.date.getDate()}}
        {{article.date.toLocaleString("en-US", {month: 'long'
      })}},{{article.date.getFullYear()}}
      </p>
      <div class="round-button round-button_small">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none"
          class="round-button__image">
          <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" class="blog-item__round-button" />
          <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </blog-wrapper>
  `,
});

Vue.component("blogs-list", {
  props: ["start", "length", "tag"],
  data() {
    return {
      articles: sourceOfTruth.articles,
    };
  },
  template: /*html*/ `
  <div class="blog__items-wrapper">
    <blog v-for="article in articles.slice(start, start + length).filter(article => {
      return tag === null ? true : article.tags.includes(tag);
    })" :article="article" :key="article.id" @click.native="$emit('select-article', article.id)" />
  </div>
  `,
});

Vue.component("blogs-layout", {
  props: ["articles"],
  data() {
    return {
      currentArticle: null,
      tag: null,
      start: 0,
    };
  },
  methods: {
    showArticle(index) {
      this.tag = null;
      this.currentArticle = index;
    },
    setStart(index) {
      this.start = index;
    },
    showTag(tag) {
      this.tag = tag;
      this.currentArticle = null;
    },
  },
  template: /*html*/ `
  <div>
    <section class="section banner">
      <header class="banner__header" v-if="currentArticle === null">
        <h1 class="heading">Articles & News</h1>
        <div class="text">
          <a href="../index.html" class="link text">Home</a>
          /
          <span class="link" @click="showArticle(null)">Blog</span>
          {{tag ? "/" : ""}}
          <span class="link">{{tag}}</span>
        </div>
      </header>
    </section>
    <section v-if="currentArticle === null && tag === null" class="section latest">
      <div class="container">
        <h2 class="section-header heading">Latest Post</h2>
        <div class="link latest__wrapper" @click="showArticle(articles.length - 1)">
          <img :src="'../' + articles.at(-1).imgSrc" alt="Latest" class="latest__img" width="569" height="478" />
          <div class="latest__text-wrapper">
            <h2 class="latest__heading heading">
              {{articles.at(-1).heading}}
            </h2>
            <div v-html="articles.at(-1).fullHtml" />
            <div class="latest__bottom">
              <p class="text">
                {{
                  articles.at(-1).date.getDate()
                }}
                {{
                  articles.at(-1).date.toLocaleString("en-US", { month: 'long' })
                }},{{
                  articles.at(-1).date.getFullYear()
                }}
              </p>
              <div class="round-button round-button_small">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"
                  class="round-button__image">
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="round-button__path" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="currentArticle !== null" class="section current">
      <div class="container current__container">
        <div class="current__main">
          <h2 class="heading current__heading">{{articles[currentArticle].heading}}</h2>
          <img :src="'../' + articles[currentArticle].imgSrc" :alt="articles[currentArticle].heading" width="799"
            height="539" class="current__img" />
          <p class="current__date text">
            {{
                  articles[currentArticle].date.getDate()
                }}
            {{
                  articles[currentArticle].date.toLocaleString("en-US", { month: 'long' })
                }},{{
                  articles[currentArticle].date.getFullYear()
                }}
          </p>
          <div v-html="articles[currentArticle].fullHtml" />
        </div>
        <div class="text current__tags">
          <div class="heading current__tags-heading">Tags</div>
          <div class="current__tags-wrapper">
            <div class="current__tag link" v-for="tag in articles[currentArticle].tags" @click="showTag(tag)">{{tag}}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section blog" v-if="currentArticle === null">
      <div class="container">
        <h2 class="section-header heading">Articles & News</h2>
        <blogs-list :start="start" length="6" :tag="tag" @select-article="showArticle" />
        <div class="blog__pagination">
          <span class="blog__page-link text round-button round-button_small"
            v-for="index in Array.from({ length: Math.ceil(articles.filter(article => {
              return tag === null ? true : article.tags.includes(tag);
            }).length / 6) }, (_, i) => i)"
            @click="setStart(index * 6)">
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none"
              class="round-button__image blog__page-link-img">
              <circle cx="26.5" cy="26" r="26" fill="#F4F0EC" />
            </svg>
            {{
              String(index + 1).padStart(2, "0")
            }}
          </span>
        </div>
      </div>
    </section>
  </div>
  `,
});

new Vue({
  el: "#app",
  data: {
    blogArticles: sourceOfTruth.articles,
  },
});
