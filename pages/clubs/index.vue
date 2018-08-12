<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <page-header heading="DriversHQ Official Clubs" />

    <ArticleSidebarLeft />

    <section class="articles px-4 w-1/2">

      <pre>
       {{$store.state.clubs}}
     </pre>

    </section>

    <!-- <div class="w-1/4 px-4">
      <ArticleSidebar v-if="$store.state.featuredArticles.length" :featured-articles="$store.state.featuredArticles" />
      <ArticleSidebar v-else :featured-articles="$store.state.articles" />
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
    if (!store.state.clubs) {
      let articles = await app.$axios.get(
        `${
          store.state.wordpressAPI
        }/wp/v2/club?orderby=date&per_page=10&_embed`
      );
      store.commit("setClubs", articles.data);
    }
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

  computed: {},

  head() {
    return {
      title: `OFFICIAL CLUBS | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {}
};
</script>