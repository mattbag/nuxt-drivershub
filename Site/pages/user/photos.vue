<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <!-- <page-header heading="Your Portal" :breadcrumbs="[{url:'/', title: 'home'},{url:'/blog', title: 'blog'}]" /> -->
    <page-header heading="Your Photos" />
    <no-ssr>
      <section class="px-4 w-full overflow-hidden">

        <div class="grid">
          <g-item v-for="i in 16" :key="'div_'+i"></g-item>
        </div>

        <div slot="Spinner"></div>
      </section>
    </no-ssr>

  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";

import Spinner1 from "~/components/Spinner1.vue";

import gItem from "~/components/gallery/g-item";

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
    Spinner1,
    gItem
  },

  head() {
    return {
      title: `Your Photos | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {}
};
</script>
<style lang="scss" scoped>
.grid {
  width: 100%;
  margin-bottom: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(8, 1fr);
  // grid-template-columns: repeat(auto-fill, minmax(10%, 1fr));
  // grid-template-rows: 10%;
  // grid-auto-flow: dense;
  // grid-auto-rows: 1fr;
}
</style>
