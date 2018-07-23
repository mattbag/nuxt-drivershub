<template>
<HeroSlider :clubs="$store.state.clubs"/>

</template>
<script>
import HeroSlider from '~/components/HeroSlider'

export default {
  async asyncData({ app, store, params }) {
    if (!store.state.articles.length) {
      let clubs = await app.$axios.get(
        `${store.state.wordpressAPI}/wp/v2/club?_embed`
      );
      store.commit("setClubs", clubs.data);
    }
  },

  components: {
    HeroSlider
  },

  computed: {},
  mounted() {
    // console.log(this.$store.state.clubs[0])
  },
  head() {
    return {
      title: `Welcome to ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
</style>