<template>
    <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
        <PageHeader heading="DriversHQ Events Calendar" />

        <ArticleSidebarLeft />

        <section class="articles px-4 w-3/4">

            <!-- <pre>
       {{$store.state.events}}
     </pre> -->
        <GridEvent :articles="eventList" columns="2"/>
        </section>

        <!-- <div class="w-1/4 px-4">
      <ArticleSidebar v-if="$store.state.featuredArticles.length" :featured-articles="$store.state.featuredArticles" />
      <ArticleSidebar v-else :featured-articles="$store.state.articles" />
    </div> -->

    </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import ArticleSidebarLeft from "~/components/ArticleSidebarLeft";

import GridEvent from "~/components/GridEvent";

// import Spinner1 from "~/components/Spinner1.vue";

export default {
  async asyncData({ app, store, params }) {
    // console.log('params' , params)
    // if (!store.state.events) {
    //   let articles = await app.$axios.get(
    //     `${
    //       store.state.wordpressAPI
    //     }/wp/v2/event?orderby=date&per_page=10&_embed`
    //   );
    //   store.commit("setEvents", articles.data);
    // }
  },

  //  data() {
  //   return {
  //      browser: process.browser
  //   };
  // },

  components: {
    PageHeader,
    ArticleSidebarLeft,
    GridEvent,
    // Spinner1
  },

  computed: {
    eventList() {
      if (this.$store.state.events) {
        return this.$store.state.events;
      } else {
          console.log('====');
          console.log('fetch events');
          console.log('====');
          
        this.$store.dispatch("fetchEvents");
      }
      //   const query = this.$route.query.club;
      //   if (!query) {
      //     return this.$store.state.events;
      //   } else {
      //     return this.$store.state.events.filter(e => {
      //       // console.log(e)
      //       return e.acf.event_club.post_name === query;
      //     });
      //   }
    }
  },

  head() {
    return {
      title: `CALENDAR | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {}
};
</script>