<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto py-6">

    <div class="w-full lg:w-1/4 px-4">
      <img :src="page.acf.partner_logo.url" :alt="page.acf.partner_logo.alt">
      <div class="py-2"></div>
      <div class="bg-white p-4">
        <h3 class="text-red mb-2">{{page.title.rendered}}</h3>
        <ul class="list-reset">
          <li v-for="l in page.acf.partner_links" :key="l.partner_link.url">
            <a :href="l.partner_link.url" target="_blank">
              <u>{{l.partner_link.title}}</u>
            </a>
          </li>
        </ul>
        <hr class="mx-auto">
        <div v-html="page.acf.partner_contact">
        </div>
      </div>
    </div>

    <div class="w-full lg:w-3/4 px-4">
      <h1 class="text-xl mb-4">Special Offers from {{page.title.rendered}}</h1>

      <article class="mb-6" v-for="offer in page.acf.partner_offers" :key="offer.partner_offers">
        <div class="flex bg-white">
          <div class="lg:w-2/5"><img :src="offer.offer_image.sizes['medium_large']" :alt="offer.offer_image.alt"></div>
          <div class="lg:w-3/5 p-6">
            <h4 class="text-xl">{{offer.offer_title}}</h4>
            <div class="py-2">
              {{offer.offer_excerpt}}
            </div>
            <a :href="offer.offer_link" target="_blank" class="btn dark">claim</a>
          </div>
        </div>
      </article>

      <article class="single-article">

        <transition-group name="slide-fade">
          <!-- <div class="mb-4" key="block_1">
            <pre>{{page.acf}}</pre>
          </div> -->

          <div class="mb-6" key="block_1">
            <ArticleFeaturedImage v-if="featuredImage" :expanded="true" :featured-image="featuredImage" />
          </div>

          <div class="bg-white p-4 mb-4" key="block_2">

            <h3 class="mb-2">About</h3>
            <div class="content" id="article-content" v-html="page.content.rendered"></div>

          </div>

        </transition-group>
      </article>
    </div>
  </div>
</template>

<script>
// import * as Vibrant from 'node-vibrant'
import ArticleSidebarLeft from "~/components/ArticleSidebarLeft.vue";
import ArticleFeaturedImage from "~/components/ArticleFeaturedImage.vue";

// if (process.browser) {
//   require('lightgallery.js')
//   require('lg-zoom.js')
//   require('lg-thumbnail.js')
// }

export default {
  async asyncData({ app, store, params, error, payload }) {
    // console.log(payload);
    let partner;
    if (payload) {
      // return { partner: payload };
      partner = payload;
    } else {
      partner = await app.$axios.get(
        `${store.state.wordpressAPI}/wp/v2/partner?slug=${
          params.partner
        }&_embed`
      );
    }

    // console.log(partner.data[0])
    store.commit("setPartner", partner.data[0]);
  },

  beforeMount() {
    // if (this.featuredImage.source_url) {
    //   let img = this.page._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
    //   // Vibrant.from(img).getPalette((err, palette) => {
    //   //   if (!err) {
    //   //     this.$store.commit('setFeaturedColor', palette)
    //   //   }
    //   // })
    // }
  },

  components: {
    ArticleFeaturedImage,
    ArticleSidebarLeft
  },

  computed: {
    page() {
      return this.$store.state.partner;
    },
    // author () {
    //   return this.$store.state.page._embedded.author[0]
    // },
    featuredImage() {
      let featuredImage = null;
      if (this.$store.state.partner) {
        featuredImage = this.$store.state.partner._embedded["wp:featuredmedia"];
      }
      if (featuredImage) {
        return (
          featuredImage[0].media_details.sizes.large ||
          featuredImage[0].media_details.sizes.full ||
          false
        );
      } else {
        return { height: 0, width: 0 };
      }
    }
  },

  data() {
    return {
      expanded: false
    };
  },

  head() {
    return {
      title: `${this.page.title.rendered || "nope"} | ${
        this.$store.state.meta.name
      }`,
      meta: [
        {
          description: this.page.excerpt
            ? this.page.excerpt.rendered
            : "DriversHQ Australia Official partner"
        }
      ]
    };
  },

  methods: {
    // gallery () {
    //   let galleries = document.querySelectorAll('.content > .gallery')
    //   for (let i = 0; i < galleries.length; i++) {
    //     // eslint-disable-next-line
    //     lightGallery(galleries[i], {
    //       download: false,
    //       selector: 'a'
    //     })
    //   }
    // }
  },

  mounted() {
    // this.gallery()
  }
};
</script>

<style lang="scss" scoped>
</style>
