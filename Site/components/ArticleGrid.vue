<template>
  <div class="article-list flex flex-wrap -mx-4">

<div class="mb-8 md:w-1/2 px-4" :class="`md:w-1/${columns}`" v-for="article in articles" :key="article.id" :columns="columns">
  <post :article="article" />
</div>
    
  </div>
</template>

<script>
// import Spinner1 from "~/components/Spinner1";
import post from "~/components/cards/post";

export default {
  components: {
    // Spinner1,
    post
  },
  props: {
    articles: Array,
    columns: {
      type: [Number, String],
      default: 2
    }
  },
  // mixins: {
  //   shortTimestamp: Function
  // }
};
</script>