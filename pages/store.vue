<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">

    <page-header heading="Store"/>

    <ArticleSidebarLeft />

    <section class="articles px-4 w-3/4">
 
      <ArticleGrid :articles="$store.state.articles" columns="3" />
      
    </section>

  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import ArticleGrid from "~/components/ArticleGrid";

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

  },

  //  data() {
  //   return {
  //      browser: process.browser
  //   };
  // },

  components: {
    PageHeader,
    ArticleGrid,
    ArticleSidebarLeft,
    Spinner1
  },

  computed: {
  
  },

  head() {
    return {
      title: `STORE | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {
 
  }
};
</script>

<style>

</style>
