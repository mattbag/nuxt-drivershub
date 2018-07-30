<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <div class="w-full p-4">
      <h2>Events</h2>
    </div>

    <ArticleSidebarLeft />

    <div class="w-full lg:w-3/4 px-4">

      <article class="single-article">

        <transition-group name="slide-fade">
          <div class="mb-4" key="block_1">
            <ArticleFeaturedImage v-if="featuredImage" :expanded="expanded" :featured-image="featuredImage" />
            <!-- <pre>{{page.acf}}</pre> -->
          </div>
          <div class="bg-white p-4 mb-4" key="block_2">

            <h1 class="title text-red text-2xl mb-2" v-html="page.title.rendered"></h1>

            <p class="mb-3">{{page.acf.event_date}}</p>
            <p class="mb-3">{{page.acf.event_location || 'Location TBA'}}</p>
            <p class="mb-3">{{page.acf.event_price || 'Free attendance'}}</p>

            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-1/3 p-4">
                <button class="btn bg-black text-yellow w-full">1. RSVP</button>
              </div>
              <div class="w-full lg:w-1/3 p-4">
                <button class="btn bg-black text-yellow w-full">2. Add to calendar</button>
              </div>
              <div class="w-full lg:w-1/3 p-4">
                <button class="btn bg-black text-yellow w-full">3. indemnity form</button>
              </div>
            </div>
          </div>
          <div class="bg-white p-4 mb-4" key="block_3">

            <h3>22 going - 44 interested</h3>

          </div>
          <div class="bg-white p-4 mb-4" key="block_4">

            <h3 class="mb-2">Details</h3>
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
  async asyncData({ app, store, params }) {
    let event = await app.$axios.get(
      `${store.state.wordpressAPI}/wp/v2/event?slug=${params.event}&_embed`
    );
    // console.log(event.data[0])
    store.commit("setEvent", event.data[0]);
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
      return this.$store.state.event;
    },
    // author () {
    //   return this.$store.state.page._embedded.author[0]
    // },
    featuredImage() {
      let featuredImage = null;
      if (this.$store.state.event) {
        featuredImage = this.$store.state.event._embedded["wp:featuredmedia"];
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
            : "DriversHQ Australia Official Event"
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
