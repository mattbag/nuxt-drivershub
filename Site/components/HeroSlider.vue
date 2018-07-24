<template>
  <section class="hero">

    <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption" fade>
    <div class="swiper-wrapper">
      <div class="hero__slide swiper-slide" :key="'slide__' +club.id" v-for="(club,i) in clubs" >
        <!-- <img :src="club._embedded['wp:featuredmedia'][0].source_url"> -->
        <div class="hero__slide" :style="{backgroundImage: `url(${ club._embedded ? club._embedded['wp:featuredmedia'][0].source_url : ''})`}">
        </div>
        <h1>{{i}}</h1>
      </div>
    </div>
    <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
  </div>
   <div class="hero__over"></div>
   <div class="hero__controls">
   <div class="hero__controls--left">
        <div class="hero__controls--line" :style="{transform: `translateY(${linePosition}px)`}">
                    <hr />
                </div>
        <ul class="hero__list">
            <li class="hero__list--item" v-for="(club,i) in clubs"
    :key="'toggle__' +club.id"><a @click.prevent="changeSlide(i)">{{club.title.rendered}}</a></li>
        </ul>

    </div>
    <div class="hero__controls--right">
                <!-- <transition-group mode="out-in"> -->

                <div class="hero__panel" v-show="currentSlide == i" :key="'panel__' +club.id" v-for="(club,i) in clubs" >
                    <h2>{{club.acf.long_title || club.title.rendered}}</h2>
                    <div v-html="club.content.rendered"></div>
                    <br>
                    <btn-link 
                    :text="'Find our more'"
                    :url="'/blog'"
                    ></btn-link>
                </div>

                <!-- </transition-group> -->
                
            </div>
    </div>
  </section>

</template>

<script>
import Spinner1 from "@/components/Spinner1";
import btnLink from "@/components/atoms/btn-link";

// https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/nuxt-ssr-example/nuxt-ssr-example.vue

export default {
  data: () => ({
    currentSlide: 0,
    swiperOption: {
      effect: "fade",
      loop: true,
      slideToClickedSlide: false,
      simulateTouch: false,
      // pagination: {
      //   el: ".swiper-pagination",
      //   dynamicBullets: true
      // },
      on: {
        init() {
          // console.log("onSlideChangeEnd", this);
        },
        slideChange() {
          // this.currentSlide = this.realIndex;
        }
        // tap() {
        //   console.log("onTap", this);
        // }
      }
    }
  }),
  components: {
    Spinner1,
    btnLink
  },
  props: {
    clubs: Array
  },
  mixins: {
    shortTimestamp: Function
  },
  methods: {
    changeSlide(i) {
      this.mySwiper.slideTo(i);
      this.currentSlide = i;
      //   console.log(this);
      //   this.VueperSlides.goToSlide(i);
    }
  },
  mounted() {
    this.mySwiper.slideTo(0);
  },
  computed: {
    linePosition() {
      return 68 * (this.currentSlide + 1 * 0.8);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/css/vars.scss";

$hero-pad: 2rem;
a {
  cursor: pointer;
  color: inherit;
}

.hero {
  margin-top: -$headerHeight;
  color: #fff;
  h2 {
    color: $accent;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 1.3;
  }
  &__slide {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  &__controls {
    display: flex;
    position: absolute;
    top: 30%;
    // transform: translateY(-40%);
    padding: $hero-pad / 2; // bottom:0;
    // right:0;
    left: 0;
    z-index: 2;
    &--line {
      position: absolute;
      top: 0;
      z-index: 0;
      width: 100%;
      transition: transform 500ms ease;
      will-change: transform;
      pointer-events: none;
      hr {
      border-bottom-width: 1px;
        margin: 0;
        border-color: $accent;
      }
    }
    &--left {
      border-right: 1px solid $accent; // margin: 2rem 0;
      position: relative;
      width: 30vw;
      max-width: 400px;
    }
    &--right {
      padding: 1.5rem;
      // position: relative;
      width: 70vw;
      @media screen and (min-width: 1000px) {
        max-width: 400px;
        width: 30vw;
      }
    }
  }
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    &--item {
      padding: 1rem 0 !important; // margin: .7rem 0;
      // padding-right: 0 !important;
      font-size: 1.5rem;
      &:focus {
        color: $accent;
      }
    }
  }

  &__over {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
    height: 100%;
    background-color: transparentize(black, 0.5);
  }
}
</style>
