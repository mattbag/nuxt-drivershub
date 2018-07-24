<template>
  <div class="article-list flex flex-wrap -mx-4">

    <article v-for="article in articles" :key="article.id" class="md:w-1/2 px-4 mb-8">
    <div class="bg-white h-full">
      <!-- <div class="date">
        <span v-html="shortTimestamp(article.date)"></span>
        &nbsp;–&nbsp;
        <span class="topics">
          <nuxt-link class="topic fancy" v-for="topic in article._embedded['wp:term'][0]" :to="`/topics/${topic.slug}`" :key="topic.id" v-html="topic.name"></nuxt-link>
        </span>
      </div> -->
      <nuxt-link :to="`/${article.slug}`" class="row">

          <!-- <div class="lazy thumbnail" v-if="article._embedded['wp:featuredmedia']">
            <img v-lazy="article._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url">
            <Spinner1 class="spinner"/>
          </div> -->
          <div class="lazy medium" v-if="article._embedded['wp:featuredmedia']">
            <img v-lazy="article._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url">
            <Spinner1 class="spinner"/>
          </div>
      </nuxt-link>

        <div class="p-4">
          <h2 v-html="article.title.rendered"></h2>
          <div class="excerpt mb-2" v-html="article.excerpt.rendered"></div>
          <nuxt-link :to="`/${article.slug}`" class="uppercase underline font-bold hover:text-red">read more</nuxt-link>
        </div>
    </div>
    </article>

  </div>
</template>

<script>
import Spinner1 from '~/components/Spinner1'

export default {
  components: {
    Spinner1
  },
  props: {
    articles: Array
  },
  mixins: {
    shortTimestamp: Function
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/vars.scss';

</style>

<style lang="scss">

</style>
