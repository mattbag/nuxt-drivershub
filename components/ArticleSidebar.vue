<template>
  <aside>
    <div class="inner-container">
      <article class="mb-8" v-for="article in featuredArticles" :key="'featured_'+article.id">
        <nuxt-link :to="`/${article.slug}`" v-if="article._embedded['wp:featuredmedia']">
          <div class="featured lazy" v-if="featuredImage(article)">
            <div class="image-height" :style="{ paddingTop: featuredImage(article).height / featuredImage(article).width * 100 + '%' }"></div>
            <img v-lazy="featuredImage(article).source_url" class="image"/>
            <Spinner1/>
          </div>
        </nuxt-link>
        <div class="bg-white p-4">
          <!-- <div class="meta">
            <span v-html="shortTimestamp(article.date)"></span>&nbsp;–&nbsp;<nuxt-link class="topic fancy" v-for="topic in article._embedded['wp:term'][0]" :to="`/topics/${topic.slug}`" :key="topic.id" v-html="topic.name" v-if="topic.id !== $store.state.featuredID"></nuxt-link>
          </div> -->
            <h2 v-html="article.title.rendered"></h2>
            <div class="excerpt" v-html="article.excerpt.rendered"></div>
          <nuxt-link :to="`/${article.slug}`" class="uppercase underline font-bold hover:text-red">
          read more
          </nuxt-link>
        </div>
      </article>
    </div>
  </aside>
</template>

<script>
import Spinner1 from '~/components/Spinner1'

export default {
  components: {
    Spinner1
  },
  props: {
    featuredArticles: Array
  },
  mixins: {
    shortTimestamp: Function
  },
  methods: {
    featuredImage (article) {
      let featuredImage = article._embedded['wp:featuredmedia']

      if (featuredImage) {
        return featuredImage[0].media_details.sizes.medium || false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
