<template>
  <footer class="bg-white border-t border-black">
    <div class="wrap p-8 text-center justify-center">
      <div>
      <nuxt-link class="fancy link" to="/" @click.prevent="homeScrollTop">
        <span v-html="meta.name"></span>
      </nuxt-link>
      <br>
      <div v-if="meta.description" v-html="meta.description"></div>
      <div>© {{ year }}</div>
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

<style lang="scss" scoped>

footer {
  // > div {
  //   align-items: center;
  //   background-color: #fff;
  //   color: #aaa;
  //   display: flex;
  //   flex-direction: column;
  //   height: 200px;
  //   font-family: 'Roboto', sans-serif;
  //   font-size: .7rem;
  //   margin: 0 auto;
  //   max-width: $containerWidth;
  //   padding: 64px 32px;
  //   text-align: center;
  // }

  .link {
    color: #aaa;
    font-weight: 400;
  }
}
</style>
