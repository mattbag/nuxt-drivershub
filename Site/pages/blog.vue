<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <page-header heading="Blog"/>

    <ArticleSidebarRight />

    <section class="articles px-4 w-1/2">

      <ArticleBig
        v-if="heroArticle"
        :hero-article="heroArticle"
      />


      <ArticleGrid :articles="$store.state.articles"/>
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
    </section>

  <div class="w-1/4 px-4">
    <ArticleSidebar v-if="$store.state.featuredArticles.length" :featured-articles="$store.state.featuredArticles"/>
    <ArticleSidebar v-else :featured-articles="$store.state.articles"/>
  </div>

  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import ArticleGrid from "~/components/ArticleGrid";
import ArticleBig from "~/components/ArticleBig";
import ArticleSidebar from "~/components/ArticleSidebar";
import ArticleSidebarRight from "~/components/ArticleSidebarRight";

// import InfiniteLoading from "vue-infinite-loading/src/components/InfiniteLoading.vue";
// import Smile from "~/assets/svg/Smile.vue";
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
    PageHeader,
    ArticleGrid,
    ArticleBig,
    ArticleSidebar,
    ArticleSidebarRight,
    // InfiniteLoading,
    // Smile,
    Spinner1
  },

  computed: {
    heroArticle() {
      return this.$store.state.articles[0];
    },
    // indexInfiniteLoading() {
    //   return this.$store.state.indexInfiniteLoading;
    // }
  },

  head() {
    return {
      title: `BLOG | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {
    // moreArticles($state) {
    //   this.indexInfiniteLoading.page++;

    //   this.$axios
    //     .get(
    //       `${
    //         this.$store.state.wordpressAPI
    //       }/wp/v2/posts?orderby=date&per_page=10&page=${
    //         this.indexInfiniteLoading.page
    //       }&_embed`
    //     )
    //     .then(response => {
    //       this.$store.commit("setArticles", response.data);
    //       // this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
    //       $state.loaded();
    //     })
    //     .catch(() => {
    //       // this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
    //       $state.complete();
    //     });
    // }
  }
};
</script>

<style>
select{
  appearance: none;
  border-radius:0;
  background-color:transparent;
}
</style>
