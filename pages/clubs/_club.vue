<template>
  <div>

    <nav class="nav">
      <ul class="list-reset flex">
        <li class="home">
          <nuxt-link :to="clubRoot">{{page.title.rendered}}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="clubRoot">club home</nuxt-link>
        </li>
        <li>
          <router-link :to="{path:'/events', query:{ club: $store.state.page.slug }}">events</router-link>
        </li>
        <li>
          <nuxt-link :to="clubRoot+ '/drivers'">drivers</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/partners'">partner offers</nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="relative">
      <ArticleFeaturedImage v-if="featuredImage" :expanded="expanded" :featured-image="featuredImage" />
      <div class="absolute pin over flex flex-column items-center">
        <div class="max-w-3xl px-4 mx-auto w-full">

          <h1 class="text-2xl text-yellow" v-html="page.title.rendered"></h1>
          <div class="text-white py-2" v-html="page.content.rendered"></div>

        </div>
      </div>
    </div>

    <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
      <div class="w-full p-4">
        <h2 class="mb-4">Upcoming Events</h2>
        <GridEvent :articles="events" />

        <!-- <nuxt-link class="btn dark" :to="clubRoot+ '/events'">see all events</nuxt-link> -->
 <router-link class="btn dark" :to="{path:'/events', query:{ club: $store.state.page.slug }}">see all events</router-link>
      </div>

    </div>

    <div class="max-w-3xl px-4 mx-auto">
      <hr>
      <div class="p-4 w-full">
        <div class="p-4 bg-white">
            <h2 class="mb-4 w-full">Driver of the year</h2>
          <div class="flex flex-wrap -mx-4">
            <div class="md:w-1/4 px-4">
              image
            </div>
            <div class="md:w-3/4 px-4">
              copy
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ArticleFeaturedImage from "~/components/ArticleFeaturedImage.vue";
import GridEvent from "~/components/GridEvent";

export default {
  async asyncData({ app, store, params }) {
    let club = await app.$axios.get(
      `${store.state.wordpressAPI}${store.state.wordpressAPIpath}/club?slug=${params.club}&_embed`
    );
    store.commit("setPage", club.data[0]);

    if (!store.state.events) {
    console.log('no events')
     await store.dispatch('fetchEvents');
    }
  },

  beforeMount() {},

  components: {
    ArticleFeaturedImage,
    GridEvent
  },

  computed: {
    page() {
      return this.$store.state.page;
    },
    events() {
      // return this.$store.state.events;
      return this.$store.state.events.filter(e =>{
          // console.log(e)
            return e.acf.event_club.post_name === this.$store.state.page.slug
        })
    },
    clubRoot() {
      return "/clubs/" + this.$store.state.page.slug;
    },
    // author () {
    //   return this.$store.state.page._embedded.author[0]
    // },
    featuredImage() {
      let featuredImage = null;
      if (this.$store.state.page) {
        featuredImage = this.$store.state.page._embedded["wp:featuredmedia"];
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
            : "DriversHQ Australia Official Club"
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
.over {
  background-color: transparentize($color: $black, $amount: 0.5);
}

.nav {
  background-color: $gray-dark;
  display: flex;
  flex-shrink: 0;
  position: sticky;
  top: $headerHeight;
  z-index: 2;

  @media (max-width: 500px) {
    display: none;
  }
  li {
    padding: 1rem;
    &.home {
      border-right: 1px solid $accent;
      margin-right: 1rem;
    }
    a {
      text-transform: uppercase;
      color: $white;
      &:hover {
        color: $accent;
      }
    }
  }
}
</style>
