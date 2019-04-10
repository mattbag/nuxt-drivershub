<template>
  <header
    class="border-b border-yellow"
    :class="{'bg-black': $route.name != 'index'}"
  >
    <div>
      <nuxt-link
        class="always-inactive mr-8"
        :to="user ? '/user' : '/'"
        @click.prevent="homeScrollTop"
      >
        <span>{{meta.name}}</span>
      </nuxt-link>
      <nav>
        <nuxt-link :to="user ? '/user' : '/login'">Home</nuxt-link>
        <div class="drop mx-8 py-2">
          <nuxt-link to="/clubs"><span>Clubs</span>
            <span style="vertical-align:middle">
              <caret />
            </span>
          </nuxt-link>
          <div class="drop__menu p-4">
            <ul class="list-reset">
              <li
                v-for="c in clubs"
                :key="c.id"
                class="club mb-1"
              >
                <nuxt-link
                  :to="'/clubs/'+ c.slug"
                  class="py-2"
                >
                  <div class="img__frame">
                    <img
                      :src="c.acf.club_logo.url"
                      :alt="c.acf.club_logo.alt"
                    >
                  </div>
                  <!-- <span>{{c.title.rendered}}</span> -->
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <nuxt-link to="/events/calendar">calendar</nuxt-link>
        <!-- <nuxt-link to="/calendar">calendar</nuxt-link> -->
        <nuxt-link to="/sponsors">sponsors</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
        <nuxt-link to="/store">store</nuxt-link>
        <nuxt-link to="/contact">contact</nuxt-link>
        <nuxt-link to="/sample-page">Sample Page</nuxt-link>
      </nav>
    </div>

    <div>
      <nav v-if="user">
        <div class="drop mx-8 py-2">
          <nuxt-link
            to="/user"
            class="always-inactive drop--icon"
          >{{user.name}}
            <iuser />
            <caret />
          </nuxt-link>
          <div class="drop__menu pin-r p-4 bg-black">
            <ul class="list-reset text-center">
              <li>
                <nuxt-link to="/user/photos">gallery</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/user">your profile</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/user">your marketplace</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/user">edit profile</nuxt-link>
              </li>
              <li>
                <a
                  class="cursor-pointer"
                  @click.prevent="logout"
                >Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav v-else>
        <!-- <nuxt-link to="/signup">signup</nuxt-link> -->
        <nuxt-link
          to="/login"
          exact
        >login</nuxt-link>
        <nuxt-link
          to="/join"
          class="btn bg-white join"
        >join</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
import btnLink from "@/components/atoms/btn-link";
import caret from "@/components/atoms/caret";
import iuser from "@/components/atoms/icon/iuser";
import { setTimeout } from "timers";

export default {
  components: {
    btnLink,
    caret,
    iuser
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
    logout() {
      this.$store.commit("setUser", null);
      // this.$store.state.user;
      // console.log(this.$store.state.user)
      this.$router.push("/");
    }
  },

  computed: {
    meta() {
      return this.$store.state.meta;
    },
    user() {
      return this.$store.state.user;
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
.club {
  display: inline-block;
}
.img__frame {
  width: 6rem;
}
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
    // font-weight: bold;
    text-decoration: none;
    transition: color 0.1s, border-color 0.1s;
    text-transform: uppercase;

    &:focus,
    &:hover {
      color: $accent;
      border-color: $accent;
    }

    // &.nuxt-link-exact-active:not(.always-inactive) {
    &.nuxt-link-active:not(.always-inactive) {
      padding-bottom: 2px;
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
    display: none;
    /* width: 14rem; */
    /* background-color: #eee; */
    position: absolute;
    top: 100%;
    .nuxt-link-active {
      /* padding-bottom: 0 !important; */
      border: none !important;
    }
    a {
      display: flex;
      white-space: nowrap;
    }
  }
  &--icon {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    svg {
      margin-left: 0.5rem;
    }
  }
}

.btn {
  &.join {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
