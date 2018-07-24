<template>
  <div class="article-list flex flex-wrap -mx-4">

    <article class="mb-8 md:w-1/2 px-4" :class="`md:w-1/${columns}`" v-for="article in articles" :key="article.id">
        <div class="bg-white h-full">
        <nuxt-link :to="`/${article.slug}`" v-if="article._embedded['wp:featuredmedia']">
          <div class="featured lazy" v-if="featuredImage(article)">
            <div class="image-height" :style="{ paddingTop: featuredImage(article).height / featuredImage(article).width * 100 + '%' }"></div>
            <img v-lazy="featuredImage(article).source_url" class="image"/>
            <Spinner1/>
          </div>
        </nuxt-link>
          <!-- <div class="meta">
            <span v-html="shortTimestamp(article.date)"></span>&nbsp;–&nbsp;<nuxt-link class="topic fancy" v-for="topic in article._embedded['wp:term'][0]" :to="`/topics/${topic.slug}`" :key="topic.id" v-html="topic.name" v-if="topic.id !== $store.state.featuredID"></nuxt-link>
          </div> -->
          <div class="p-4">
            <h2 v-html="article.title.rendered"></h2>
            <div class="excerpt" v-html="article.excerpt.rendered"></div>
          <nuxt-link :to="`/${article.slug}`" class="uppercase underline font-bold hover:text-red">
          read more
          </nuxt-link>
            </div>  
        </div>
      </article>
    
  </div>
</template>

<script>
import Spinner1 from "~/components/Spinner1";

export default {
  components: {
    Spinner1
  },
  props: {
    articles: Array,
    columns: {
      type: Number,
      default: 2
    }
  },
  mixins: {
    shortTimestamp: Function,
    featuredImage: Function
  },
  methods: {
    featuredImage(article) {
      let featuredImage = article._embedded["wp:featuredmedia"];

      if (featuredImage) {
        return featuredImage[0].media_details.sizes.medium || false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/vars.scss";
</style>

<style lang="scss">
</style>
