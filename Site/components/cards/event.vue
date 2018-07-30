<template>
 <article class="bg-white h-full">
        <nuxt-link :to="`/${article.slug}`" v-if="article._embedded['wp:featuredmedia']">
          <div class="featured lazy" v-if="featuredImage(article)">
            <div class="image-height" :style="{ paddingTop: featuredImage(article).height / featuredImage(article).width * 100 + '%' }"></div>
            <img v-lazy="featuredImage(article).source_url" class="image"/>
            <Spinner1/>
          </div>
        </nuxt-link>
        
          <div class="p-4">
            <h2 v-html="article.title.rendered"></h2>
            <div class="excerpt" v-html="article.content.rendered"></div>
          <nuxt-link :to="`/${article.slug}`" class="uppercase underline font-bold hover:text-red">
          read more
          </nuxt-link>
          </div>
      </article>
</template>
<script>
import Spinner1 from "~/components/Spinner1";

export default {
  components: {
    Spinner1
  },
  props: {
    article: Object
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
</style>
