<template>
  <aside class="sidebar px-4 w-1/4">

    <div class="py-4 bg-white px-4 mb-4">
      <p class="uppercase font-bold mb-2">Sort by</p>
      <select name="" id="" class="w-full block px-3 py-2 border-black border">
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="date-newest">date:newest</option>
        <option value="date-oldest">date:oldest</option>
      </select>
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
  data(){
    return{
      clubs: [1,2,3,4,5]
    }
  },

}
</script>

<style lang="scss" scoped>



</style>
