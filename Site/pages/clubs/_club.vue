<template>
  <div>
    <nav class="nav">
      <ul class="list-reset flex">
        <li class="home">
          <nuxt-link to="/clubs">club home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/clubs/sponsors">events</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/clubs/blog">drivers</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/clubs/store">partners offers</nuxt-link>
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
        <h2>Events</h2>
      </div>

      <div class="w-full px-4">

        cards
      </div>
    </div>
  </div>
</template>

<script>
import ArticleFeaturedImage from "~/components/ArticleFeaturedImage.vue";

export default {
  async asyncData({ app, store, params }) {
    let club = await app.$axios.get(
      `${store.state.wordpressAPI}/wp/v2/club?slug=${params.club}&_embed`
    );
    // console.log(club.data[0])
    store.commit("setPage", club.data[0]);
  },

  beforeMount() {},

  components: {
    ArticleFeaturedImage
  },

  computed: {
    page() {
      return this.$store.state.page;
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
  top:$headerHeight;
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
