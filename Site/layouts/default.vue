<template>
  <div class="blog" id="blog" style="padding-top:60px">
    <!-- <Spinner1/> -->
    <div class="interface">
      <TheHeader/>
      <main role="main" :class="$route.name != 'index' && 'py-2'">
        <nuxt/>
      </main>
      <TheFooter v-if="$route.name != 'index'"/>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";
import Spinner1 from "~/components/Spinner1";

export default {
  components: {
    TheHeader,
    TheFooter,
    Spinner1
  }
};
</script>

<style lang="scss">

html {
  background-color: $black;
  box-sizing: border-box;
  color: $primary;
  font-family: "Roboto", sans-serif;
  font-kerning: normal;
  font-size: 100%;
  // font-weight: 400;
  // overflow-y: scroll;
  transition: background-color 0.8s;
  transition-timing-function: cubic-bezier(0.11, 0.89, 0.31, 0.99);
  min-width: 320px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  // font-size: 0.85rem;
  // font-weight: 300;
  background-color: $gray-light;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-enter-active {
  transition: opacity 0.2s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

a {
  color: inherit;
  font-weight: 400;
  position: relative;
  text-decoration: none;
  transition: 0.1s;
}

.lazy {
  background-color: #333;
  position: relative;
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  img {
    backface-visibility: hidden;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
    width: 100%;
  }

  [lazy="loading"] {
    opacity: 0;
  }

  [lazy="loaded"] {
    opacity: 1;
  }

  [lazy="loading"] + .spinner {
    opacity: 1;
  }

  .spinner {
    left: 50%;
    margin: -20px;
    opacity: 0;
    position: absolute;
    top: 50%;
  }
}

.infinite-loading-container {
  min-height: calc(64px * 2 + 40px) !important;
  padding: 64px;
}

.infinite-status-prompt {
  padding: 0 !important;
  position: relative;

  span {
    display: block;
  }

  svg {
    display: block;
    fill: rgba($primary, 0.45);
    width: 40px;
    height: 40px;
    position: relative;
    margin: auto;
  }

  div {
    bottom: -26px;
    color: rgba($primary, 0.65);
    font-size: 14px;
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
  }
}

.spinner {
  position: relative;
  margin: auto;
}

select {
  appearance: none;
  border-radius: 0;
  background-color: transparent;
}

</style>
