<template>
  <aside class="sidebar px-4 w-1/4">

    <div class="py-4 bg-white px-4 mb-4">
      <p class="uppercase font-bold mb-2">Show</p>
      <label class="block cursor-pointer" @change="handleFilter(af, 'show')" v-for="af in eventsFilters" :key="af.name">
        <input type="checkbox" :checked="af.active" :name="af.name" id="" class="mr-2">
        <span class="uppercase">{{af.name}}</span>
        <!-- <span class="uppercase">{{af.active}}</span> -->
      </label>
      
    </div>
    <div class="py-4 bg-white px-4 mb-4">
      <p class="uppercase font-bold mb-2">Sort by</p>

      <div class="inline-block relative w-full">
        <select class="block appearance-none w-full bg-white rounded-none border border-black pl-2 py-2 pr-8">
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="date-newest">date:newest</option>
          <option value="date-oldest">date:oldest</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-black">
          <caret />
        </div>
      </div>
    </div>

    <div class="py-4 bg-white px-4 mb-4">
      <p class="uppercase font-bold mb-2">Club</p>
      <label v-for="c in clubs" :key="'club_filter_' + c.id" class="block cursor-pointer">
        <input type="checkbox" name="" id="" class="mr-2">
        <span>{{c.title.rendered}}</span>
      </label>
    </div>
    <!-- <div class="py-4 bg-white px-4 mb-4">
      <p class="uppercase font-bold mb-2">Categories</p>
      <label v-for="c in clubs" :key="'category_filter_' + c.id" class="block">
        <input type="checkbox" class="mr-2">
        <span>category</span>
      </label>
    </div> -->

  </aside>
</template>

<script>
import caret from "@/components/atoms/caret";

export default {
  data() {
    return {
      // clubs: [1, 2, 3, 4, 5]
    };
  },
  components: {
    caret
  },
  methods:{
    handleFilter(filter, type){
      // console.log('====');
      // console.log(filter);
      // console.log('====');

      this.$store.dispatch('toggleEventsFilters', filter, type);
    }
  },
  computed: {
    clubs() {
      return this.$store.state.clubs;
    },
    eventsFilters(){
      return this.$store.state.eventsFilters.show;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
