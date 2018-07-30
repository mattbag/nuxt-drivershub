<template>
  <header class="border-b border-yellow" :class="{'bg-black': $route.name != 'index'}">
    <div>
      <nuxt-link class="always-inactive mr-8" to="/" @click.prevent="homeScrollTop">
        <span>{{meta.name}}</span>
      </nuxt-link>
      <nav>
        <nuxt-link to="/home">Home</nuxt-link>
        <div class="drop mx-8 py-2">
          <nuxt-link to="/clubs" >Clubs <span style="vertical-align:middle"><caret/></span></nuxt-link>
          <div class="drop__menu bg-black p-4">
            <ul class="list-reset">
              <li v-for="c in clubs" :key="c.id"><nuxt-link :to="'/clubs/'+ c.slug">{{c.title.rendered}}</nuxt-link></li>
            </ul>
          </div>
        </div>
        <nuxt-link to="/calendar">calendar</nuxt-link>
        <nuxt-link to="/sponsors">sponsors</nuxt-link>
        <nuxt-link to="/blog" exact>Blog</nuxt-link>
        <nuxt-link to="/store">store</nuxt-link>
        <nuxt-link to="/contact">contact</nuxt-link>
        <nuxt-link to="/pages/sample-page">Sample Page</nuxt-link>
      </nav>
    </div>

    <div>
      <nav>
        <!-- <nuxt-link to="/signup">signup</nuxt-link> -->
        <nuxt-link to="/login">login</nuxt-link>
        <nuxt-link to="/join" class="btn bg-white join">join</nuxt-link>
        <!-- <btn-link 
          :text="'Join'"
          :url="'/join'"
          classes="bg-white text-black"
          ></btn-link> -->
      </nav>
    </div>
  </header>
</template>

<script>
import btnLink from "@/components/atoms/btn-link";
import caret from "@/components/atoms/caret";
import { setTimeout } from "timers";

export default {
  components: {
    btnLink,
    caret
  },
  data() {
    return {
      drop: false
    };
  },
  methods: {
    // toggleDrop() {
    //   setTimeout(_ => {
    //     this.drop = !this.drop;
    //   },300);
      // }, this.drop ? 300 : 0);
    // }
  },

  computed: {
    meta() {
      return this.$store.state.meta;
    },
    clubs() {
      // console.log(this.$store.state.clubs);
      return this.$store.state.clubs;
    }
  },

  mixins: {
    homeScrollTop: Function
  }
};
</script>

<style lang="scss" scoped>
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

  // .drop__toggle,
  a:not(.btn) {
    border-color: $white;
    color: $white;
    font-weight: bold;
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
      border-bottom: 1px solid;
      color: $accent;
      border-color: $accent;
    }

    & + a {
      margin-left: 2rem;

      @media (max-width: 700px) {
        margin-left: 1rem;
      }
    }
  }
}
.drop {
  display: inline-block;
  position: relative;
 
    &:hover {
      outline: none;
      // border-bottom:2px solid $accent;
      > .drop__menu {
        display: block;
      }
    }

  &__menu {
    width: 14rem;
    display: none;
    position: absolute;
    top: 2.4rem;
  }
}
.btn{
  &.join{
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
}
</style>
