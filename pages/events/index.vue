<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <page-header heading="DriversHQ Official Events" />

    <ArticleSidebarLeft />

    <section class="articles px-4 w-1/2">

      <pre>
        Query the events if coming froma club, otherwise render all
        {{$route.query.club || 'all'}}
      </pre>
      <!-- <pre>
       {{$store.state.events}}
     </pre> -->
     <ul>
       <li v-for="e in eventList" :key="e.id" v-html="e.title.rendered"></li>
     </ul>

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
    // console.log('params' , params)
    if (!store.state.events) {
      let articles = await app.$axios.get(
        `${
          store.state.wordpressAPI
        }/wp/v2/event?orderby=date&per_page=10&_embed`
      );
      store.commit("setEvents", articles.data);
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

  computed: {
    eventList(){
      const query = this.$route.query.club
      if(!query){
        return this.$store.state.events
      }else{
        return this.$store.state.events.filter(e =>{
          // console.log(e)
            return e.acf.event_club.post_name === query
        })
      }
    }
  },

  head() {
    return {
      title: `OFFICIAL CLUBS | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {}
};
</script>