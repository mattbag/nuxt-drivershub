<template>
  <div class="wrap py4 px4">
    <header class="mb4 px4">
      <nuxt-link to="/">Home</nuxt-link>
        <span>/</span>
      <nuxt-link to="/blog">Blog</nuxt-link>

      <h1>Blog</h1>
    </header>

    <div class="sidebar px4">
    <div class="py4 bg-white px4 mb4">
sort by
    </div>
    <div class="py4 bg-white px4 mb4">
sort by
    </div>
    <div class="py4 bg-white px4 mb4">
sort by
    </div>
    </div>
    <div class="articles px4">
      <div class="bg-white py4">
      <TheHero
        v-if="heroArticle"
        :hero-article="heroArticle"
      />
      </div>

      <ArticleList :articles="$store.state.articles"/>
      <!-- <InfiniteLoading
        v-if="indexInfiniteLoading.enabled"
        ref="infiniteLoading"
        @infinite="moreArticles"
      >
        <span slot="spinner">
          <Spinner1/>
        </span>
        <span slot="no-results">
          <Smile/>
          <div>No more articles!</div>
        </span>
        <span slot="no-more">
          <Smile/>
          <div>No more articles!</div>
        </span>
      </InfiniteLoading> -->
    </div>

  <div class="sidebar px4">
    <TheSidebar :featured-articles="$store.state.featuredArticles"/>
  </div>

  </div>
</template>

<script>
import ArticleList from "~/components/ArticleList";
import TheHero from "~/components/TheHero";
import TheSidebar from "~/components/TheSidebar";
import InfiniteLoading from "vue-infinite-loading/src/components/InfiniteLoading.vue";
import Smile from "~/assets/svg/Smile.vue";
import Spinner1 from "~/components/Spinner1.vue";

export default {
  async asyncData({ app, store, params }) {
    if (!store.state.articles.length) {
      let articles = await app.$axios.get(
        `${
          store.state.wordpressAPI
        }/wp/v2/posts?orderby=date&per_page=10&_embed`
      );
      store.commit("setArticles", articles.data);
    }

    if (!store.state.featuredArticles.length) {
      let articles = await app.$axios.get(
        `${
          store.state.wordpressAPI
        }/wp/v2/posts?orderby=date&per_page=10&categories=${
          store.state.featuredID
        }&_embed`
      );
      store.commit("setFeaturedArticles", articles.data);
    }
  },

  components: {
    ArticleList,
    TheHero,
    TheSidebar,
    InfiniteLoading,
    Smile,
    Spinner1
  },

  computed: {
    heroArticle() {
      return this.$store.state.articles[0];
    },
    indexInfiniteLoading() {
      return this.$store.state.indexInfiniteLoading;
    }
  },

  head() {
    return {
      title: `Home | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {
    moreArticles($state) {
      this.indexInfiniteLoading.page++;

      this.$axios
        .get(
          `${
            this.$store.state.wordpressAPI
          }/wp/v2/posts?orderby=date&per_page=10&page=${
            this.indexInfiniteLoading.page
          }&_embed`
        )
        .then(response => {
          this.$store.commit("setArticles", response.data);
          // this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          $state.loaded();
        })
        .catch(() => {
          // this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
          $state.complete();
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/vars.scss";
@import "~assets/css/utils/space.scss";
@import "~assets/css/grid.scss";

.bg-white {
  background-color: $white;
}
header {
  width: 100%;
  h1 {
    color: $secondary;
    margin-top: 0;
  }
}
.sidebar {
  width: 25%;
}
.articles {
  width: 50%;
}
</style>

<style lang="scss">
</style>
