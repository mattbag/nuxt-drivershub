<template>
    <nuxt-link :to="url" class="btn" :class="classes">{{text}}</nuxt-link>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      required: false,
      default: "bg-yellow text-black"
    },
    url: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
