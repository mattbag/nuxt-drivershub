<template>
  <aside class="sidebar px-4 w-1/4">

    <div class="py-4 bg-white px-4 mb-4">
      <p class="uppercase font-bold mb-2">Sort by</p>

      <div class="inline-block relative w-full">
        <select class="block appearance-none w-full bg-white border border-black px-4 py-2 pr-8">
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="date-newest">date:newest</option>
          <option value="date-oldest">date:oldest</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-black">
          <svg class="fill-current" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

    </div>
    <div class="py-4 bg-white px-4 mb-4">
      <p class="uppercase font-bold mb-2">Club</p>
      <label v-for="c in clubs" :key="'club_filder_' + c" class="block">
        <input type="checkbox" name="" id="" class="mr-2">
        <span>club {{c}}</span>
      </label>
    </div>
    <div class="py-4 bg-white px-4 mb-4">
      <p class="uppercase font-bold mb-2">Categories</p>
      <label v-for="c in clubs" :key="'club_filder_' + c" class="block">
        <input type="checkbox" class="mr-2">
        <span>category {{c}}</span>
      </label>
    </div>

    </aside>
</template>

<script>
export default {
  data() {
    return {
      clubs: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
