<template>
  <div class="flex flex-wrap -mx-4">

<div class="mb-8 md:w-1/2 px-4" :class="`md:w-1/${columns}`" v-for="article in articles" :key="article.id" :columns="columns">
  <event :article="article" />
</div>
    
  </div>
</template>

<script>
// import Spinner1 from "~/components/Spinner1";
import event from "~/components/cards/event";

export default {
  components: {
    // Spinner1,
    event
  },
  props: {
    articles: Array,
    columns: {
      type: [Number, String],
      default: 4
    }
  },
  // mixins: {
  //   shortTimestamp: Function
  // }
};
</script>