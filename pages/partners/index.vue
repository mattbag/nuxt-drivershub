<template>
  <div>
    <div v-html="page.content.rendered">

    </div>
    <div class="wrap">

      <div class="w-full px-4">

        <pre>
        Query the partners if coming from a club, otherwise render all =>
        {{$route.query.partner || 'all'}}
        <!-- {{cptList}} -->
      </pre>
        <hr class="mx-auto">

        <h4 class="text-lg mb-4">Premium Partners</h4>
        <section class="flex -mx-2">
          <div class="md:w-1/4 px-2" v-for="p in get4('20')" :key="p.id">
            <div class="bg-white p-4">
              <!-- {{p.title.rendered}} -->
              <img :src="p.acf.partner_logo.url" :alt="p.acf.partner_logo.alt" class="mb-2">
              <!-- <div class="py-2" v-html="p.excerpt.rendered"></div> -->
              <nuxt-link class="btn dark w-full" :to="'/partners/' + p.slug">more</nuxt-link>
            </div>
          </div>
        </section>
        <hr class="mx-auto">
        <h4 class="text-lg mb-4">Gold Partners</h4>
        <section class="flex -mx-2">
          <div class="md:w-1/4 px-2" v-for="p in get4('21')" :key="p.id">
            <div class="bg-white p-4">
              <!-- {{p.title.rendered}} -->
              <img :src="p.acf.partner_logo.url" :alt="p.acf.partner_logo.alt" class="mb-2">
              <!-- <div class="py-2" v-html="p.excerpt.rendered"></div> -->
              <div class="text-center">
                <nuxt-link class="uppercase" :to="'/partners/' + p.slug">
                  <u>more</u>
                </nuxt-link>
              </div>
            </div>
          </div>
        </section>
        <!-- <ul>
          <li v-for="cpt in cptList" :key="cpt.id">
            <nuxt-link :to="'/partners/' + cpt.slug">{{cpt.title.rendered}}</nuxt-link>
          </li>
        </ul> -->

      </div>

    </div>
  </div>
</template>

<script>
import Spinner1 from "~/components/Spinner1.vue";

export default {
  async asyncData({ app, store, params }) {
    // console.log('params' , params)
    let key = "partner";
    if (!store.state.partners) {
      let query = await app.$axios.get(
        `${
          store.state.wordpressAPI
        }/wp/v2/${key}?orderby=date&per_page=10&_embed`
      );
      store.commit("setPartners", query.data);
      // console.log(store.state)
    }

    let page = await app.$axios.get(
      `${store.state.wordpressAPI}/wp/v2/pages?slug=${"partners"}&_embed`
    );
    store.commit("setPage", page.data[0]);
  },

  //  data() {
  //   return {
  //      browser: process.browser
  //   };
  // },

  components: {
    Spinner1
  },
  methods: {
    get4(cat) {
      return this.cptList.filter(cpt => cpt.partners_rank == cat).slice(0, 4);
    }
  },

  computed: {
    page() {
      return this.$store.state.page;
    },
    cptList() {
      const query = this.$route.query.partner;
      if (!query) {
        return this.$store.state.partners;
      } else {
        return this.$store.state.partners.filter(e => {
          // console.log(e)
          return e.acf.event_club.post_name === query;
        });
      }
    },
    premium() {
      return this.cptList.filter(cpt => cpt.partners_rank == 20).slice(0, 4);
    }
  },

  head() {
    return {
      title: `OFFICIAL PARTNERS | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  }
};
</script>