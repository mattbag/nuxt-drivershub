<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <!-- <page-header heading="Your Portal" :breadcrumbs="[{url:'/', title: 'home'},{url:'/blog', title: 'blog'}]" /> -->
    <page-header heading="Your Portal" />
    <no-ssr>
      <section class="px-4">
        <h3>Events</h3>
        <br>
        <GridEvent :articles="events" />

        <nuxt-link to="/events" class="btn bg-black text-yellow">
          see all events
        </nuxt-link>
        <hr class="border-t border-black my-6 mx-0">

        <h3>Marketplace</h3>
        <br>
        <GridEvent :articles="$store.state.articles" />

        <nuxt-link to="/store" class="btn bg-black text-yellow">
          see marketplace
        </nuxt-link>

        <div slot="Spinner"></div>
      </section>
    </no-ssr>

  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import GridEvent from "~/components/GridEvent";

import Spinner1 from "~/components/Spinner1.vue";

export default {
  async asyncData({ app, store, params }) {
    // console.log('ctx ',store.state)
    // if (!store.state.articles.length) {
    //   let articles = await app.$axios.get(
    //     `${
    //       store.state.wordpressAPI
    //     }/wp/v2/posts?orderby=date&per_page=10&_embed`
    //   );
    //   store.commit("setArticles", articles.data);
    // }

    // if (!store.state.events) {
    //   let events = await app.$axios.get(
    //     `${
    //       store.state.wordpressAPI
    //     }/wp/v2/event?orderby=date&per_page=10&_embed`
    //   );
    //   store.commit("setEvents", events.data);
    // }
  },

  //  data() {
  //   return {
  //      browser: process.browser
  //   };
  // },

  components: {
    PageHeader,
    GridEvent,
    Spinner1
  },

  computed: {
    events() {
      // console.log(this.$store.state.events)
      return this.$store.state.events;
    }
  },

  head() {
    return {
      title: `PORTAL | ${this.$store.state.meta.name}`,
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