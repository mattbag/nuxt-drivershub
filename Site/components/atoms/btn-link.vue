<template>
    <nuxt-link :to="url" :class="classes">{{text}}</nuxt-link>
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
      default: "btn"
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
.btn {
  padding: 0.5rem 1rem;
  background-color: lightcoral;
}
</style>
