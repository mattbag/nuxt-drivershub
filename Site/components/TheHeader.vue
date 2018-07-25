<template>
  <header class="border-b border-yellow" :class="{'bg-black': $route.name != 'index'}">
    <div>
      <nuxt-link class="always-inactive mr-8" to="/" @click.prevent="homeScrollTop">
        <span>{{meta.name}}</span>
      </nuxt-link>
      <nav>
        <nuxt-link to="/" exact>Home</nuxt-link>
        <nuxt-link to="/clubs">Clubs</nuxt-link>
        <nuxt-link to="/events">events</nuxt-link>
        <nuxt-link to="/sponsors">sponsors</nuxt-link>
        <nuxt-link to="/blog" exact>Blog</nuxt-link>
        <nuxt-link to="/store">store</nuxt-link>
        <nuxt-link to="/contact">contact</nuxt-link>
        <nuxt-link to="/pages/sample-page">Sample Page</nuxt-link>
      </nav>
    </div>

    <div>
      <nav>
        <nuxt-link to="/signup">signup</nuxt-link>
        <!-- <nuxt-link to="/login">login</nuxt-link> -->
        <btn-link 
          :text="'Join'"
          :url="'/login'"
          ></btn-link>
      </nav>
    </div>
  </header>
</template>

<script>
import btnLink from "@/components/atoms/btn-link";

export default {
  components: {
    btnLink
  },
  computed: {
    meta() {
      return this.$store.state.meta;
    }
  },

  mixins: {
    homeScrollTop: Function
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/vars.scss";

header {
  // font-family: "Roboto", sans-serif;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  > div {
    align-items: center;
    // border-bottom: 1px solid #d8d8d8;
    // background-color: #fff;
    display: flex;
    height: $headerHeight;
    padding: 0 2rem;
    transition: padding-top 0.5s, padding-bottom 0.5s;

    @media (max-width: 700px) {
      height: $headerHeight;
      padding: 1rem;
    }
  }


  nav {
    flex-shrink: 0;

    @media (max-width: 500px) {
      display: none;
    }
  }

  a:not(.btn) {
    border-color: $white;
    color: $white;
    font-weight: 300;
    text-decoration: none;
    transition: color 0.1s, border-color 0.1s;
    text-transform: uppercase;

    &:focus,
    &:hover {
      color: $accent;
      border-color: $accent;
    }

    &.nuxt-link-active:not(.always-inactive) {
      padding-bottom: 4px;
      border-bottom: 2px solid;
      color: yellow;
      border-color: yellow;
    }

    & + a {
      margin-left: 2rem;

      @media (max-width: 700px) {
        margin-left: 1rem;
      }
    }
  }
}
</style>
