<template>
<div class="max-w-3xl flex flex-wrap px-4 mx-auto">
 <page-header :heading="article.title.rendered"/>
  <ArticleSidebarRight />

    <transition name="slide-fade">
      <article class="md:w-3/4 px-4">

        <ArticleFeaturedImage
          v-if="featuredImage"
          :expanded="expanded"
          :featured-image="featuredImage"
        />
        
          <div class="bg-white p-4">
            
            <div class="meta">

              <div class="details">
                <!-- <span>{{ longTimestamp(article.date) }}</span> -->
                <!-- <span class="separator">|</span> -->
                <!-- <nuxt-link class="author fancy" :to="`/authors/${author.slug}`">{{ author.name }}</nuxt-link> -->
              </div>
            </div>
            <div class="content" id="article-content" v-html="article.content.rendered"></div>
            <!-- <ArticleComments :article="article"/> -->
          </div>
        <!-- <div v-html="linkRGB"></div> -->
      </article>
    </transition>
</div>
</template>

<script>
import * as Vibrant from "node-vibrant";

import PageHeader from "~/components/PageHeader";
import ArticleFeaturedImage from "~/components/ArticleFeaturedImage";
import ArticleComments from "~/components/ArticleComments";
import ArticleSidebarRight from "~/components/ArticleSidebarRight";

// if (process.browser) {
//   require("lightgallery.js");
//   require("lg-zoom.js");
//   require("lg-thumbnail.js");
// }

export default {
  async asyncData({ app, store, params }) {
    let article = await app.$axios.get(
      `${store.state.wordpressAPI}/wp/v2/posts?slug=${params.article}&_embed`
    );
    store.commit("setArticle", article.data[0]);
  },

  beforeMount() {
    if (this.featuredImage.source_url && this.article._embedded) {
      let img =
        this.article._embedded["wp:featuredmedia"][0].media_details.sizes
          .thumbnail.source_url || null;

      // Vibrant.from(img).getPalette((err, palette) => {
      //   if (!err) {
      //     this.$store.commit("setFeaturedColor", palette);
      //   }
      // });
    }
  },

  mixins: {
    longTimestamp: Function
  },

  components: {
    PageHeader,
    ArticleFeaturedImage,
    ArticleComments,
    ArticleSidebarRight
  },

  computed: {
    article() {
      return this.$store.state.article;
    },
    author() {
      return this.$store.state.article._embedded.author[0];
    },
    featuredImage() {
      if (this.$store.state.article) {
        let featuredImage = this.$store.state.article._embedded[
          "wp:featuredmedia"
        ];

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
    }
  },

  data() {
    return {
      disqusReady: false,
      expanded: false,
      linkRGB: {}
    };
  },

  head() {
    return {
      title: `${this.article.title.rendered} | ${this.$store.state.meta.name}`,
      meta: [{ description: this.article.excerpt.rendered }]
    };
  },

  methods: {
    expandFeaturedImage() {
      if (!this.expanded) {
        this.$router.push({ query: { image: null } });
      } else {
        this.$router.push({ query: null });
      }
      this.expanded = !this.expanded;
    },
    loadFeaturedImageExpanded() {
      if (this.$route.query.image === null) {
        this.expanded = true;
      }
    },
    gallery() {
      let galleries = document.querySelectorAll(".content > .gallery");

      for (let i = 0; i < galleries.length; i++) {
        // eslint-disable-next-line
        lightGallery(galleries[i], {
          download: false,
          selector: "a"
        });
      }
    }
  },

  mounted() {
    // this.gallery();
    // this.loadFeaturedImageExpanded();
  }
};
</script>

<style lang="scss" scoped>

</style>
