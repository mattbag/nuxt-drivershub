<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <page-header heading="Blog" />

    <ArticleSidebarLeft />

    <section class="articles px-4 w-full lg:w-3/4">

      <ArticleBig
        v-if="heroArticle"
        :hero-article="heroArticle"
      />

      <ArticleGrid
        :articles="$store.state.articles"
        columns="3"
      />

    </section>

    <!-- <div class="w-1/4 px-4">
    <ArticleSidebar v-if="$store.state.featuredArticles.length" :featured-articles="$store.state.featuredArticles"/>
    <ArticleSidebar v-else :featured-articles="$store.state.articles"/>
  </div> -->

  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import ArticleGrid from "~/components/ArticleGrid";
import ArticleBig from "~/components/ArticleBig";
import ArticleSidebar from "~/components/ArticleSidebar";
import ArticleSidebarLeft from "~/components/ArticleSidebarLeft";

import Spinner1 from "~/components/Spinner1.vue";

export default {
  async asyncData({ app, store, params }) {
    // console.log('ctx ',store.state)
    if (!store.state.articles.length) {
      let articles = await app.$axios.get(
        `${
          store.state.wordpressAPI
        }/wp/v2/posts?orderby=date&per_page=10&_embed`
      );
      store.commit("setArticles", articles.data);
    }

    // if (!store.state.featuredArticles.length) {
    //   let articles = await app.$axios.get(
    //     `${
    //       store.state.wordpressAPI
    //     }/wp/v2/posts?orderby=date&per_page=10&categories=${
    //       store.state.featuredID
    //     }&_embed`
    //   );
    //   store.commit("setFeaturedArticles", articles.data);
    // }
  },

  //  data() {
  //   return {
  //      browser: process.browser
  //   };
  // },

  components: {
    PageHeader,
    ArticleGrid,
    ArticleBig,
    ArticleSidebar,
    ArticleSidebarLeft,
    // InfiniteLoading,
    // Smile,
    Spinner1
  },

  computed: {
    heroArticle() {
      return this.$store.state.articles[0];
    }
  },

  head() {
    return {
      title: `BLOG | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {}
};
</script>