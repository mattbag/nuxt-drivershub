<template>
  <article class="bg-white mb-8">
    <nuxt-link :to="`/articles/${this.heroArticle.slug}`">
      <div class="featured-image lazy" v-if="featuredImage">
        <div class="image-height" :style="paddingTop"></div>
        <div class="image" v-lazy:backgroundImage="featuredImage.source_url"></div>
        <Spinner1/>
      </div>
    </nuxt-link>
      <!-- <div class="date">
        <span v-html="shortTimestamp(heroArticle.date)"></span>
        &nbsp;–&nbsp;
        <span
          v-for="topic in topics"
          class="topic fancy"
          :key="topic.id"
          v-html="topic.name"
        ></span>
      </div> -->
      <div class="meta p-4">
        <h2 v-html="this.heroArticle.title.rendered"></h2>
        <div class="mb-2" v-html="this.heroArticle.excerpt.rendered"></div>
         <nuxt-link :to="`/articles/${this.heroArticle.slug}`" class="uppercase underline font-bold hover:text-red">read more</nuxt-link>
      </div>
  </article>
</template>

<script>
import Spinner1 from '~/components/Spinner1'

export default {
  components: {
    Spinner1
  },
  props: {
    heroArticle: Object
  },
  mixins: {
    shortTimestamp: Function
  },
  computed: {
    paddingTop () {
      return {
        paddingTop: this.featuredImage.height / this.featuredImage.width * 100 + '%'
      }
    },
    topics () {
      return this.heroArticle._embedded['wp:term'][0]
    },
    featuredImage () {
      let featuredImage = this.heroArticle._embedded['wp:featuredmedia']

      if (featuredImage) {
        return featuredImage[0].media_details.sizes.large || featuredImage[0].media_details.sizes.full || false
      }
    }
  }
}
</script>