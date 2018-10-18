<template>
  <footer class="bg-white border-t border-black">
    <div class="wrap p-8 text-center justify-center">
      <div>
      <nuxt-link class="fancy link" to="/" @click.prevent="homeScrollTop">
        <span v-html="meta.name"></span><span> © {{ year }}</span>
      </nuxt-link>
      <br>
      <div v-if="meta.description" v-html="meta.description"></div>
      
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    meta () {
      return this.$store.state.meta
    },
    year () {
      return new Date().getFullYear()
    }
  },

  mixins: {
    homeScrollTop: Function
  }
}
</script>