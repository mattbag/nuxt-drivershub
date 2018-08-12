<template>
<Gate />
</template>
<script>
import Gate from '~/components/Gate'

export default {
  async asyncData({ app, store, params }) {
    // if (!store.state.clubs.length) {
    //   let clubs = await app.$axios.get(
    //     `${store.state.wordpressAPI}/wp/v2/club?_embed`
    //   );
    //   store.commit("setClubs", clubs.data);
    // }
  },

  components: {
    Gate
  },

  computed: {
    // clubs() {
    //   // console.log(this.$store.state.clubs);
    //   return this.$store.state.clubs;
    // }
  },
  mounted() {
    // console.log(this.$store.state.clubs)
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