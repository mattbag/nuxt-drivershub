<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">


    <section class="px-4 w-1/2 mx-auto">
   <h2 class="text-red">Join</h2>
 
<div class="bg-white p-4 mb-8">
  <h1 class="text-2xl mt-0">Choose Clubs</h1>
  <br>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quae.</p>

<div class="py-2">

  <label v-for="c in clubs" :key="'club_filter_' + c.id" class="block cursor-pointer mb-2">
        <input type="checkbox" name="" id="" class="mr-2">
        <span>{{c.title.rendered}}</span>
  </label>

</div>
  <small>disclaimer</small>
</div>

<div class="bg-white p-4 mb-8">
  <h1 class="text-2xl mt-0">Choose Membership</h1>
  <br>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quae.</p>

<div class="py-2 flex flex-wrap -mx-4">

 <div class="md:w-1/2 p-4" v-for="m in memberships" :key="m.id">
    <div class="border border-black p-4 cursor-pointer" @click="selectPlan(m.id)" :class="{'bg-black text-white shadow':m.id == selectedPlan }">
      <p class="font-bold text-xl">{{m.name}}</p>
      <p>{{m.copy}}</p>
      <p>{{m.price}}</p>
    </div>
 </div>

</div>

</div>
      
    </section>

  </div>
</template>

<script>
export default {
  // async asyncData({ app, store, params }) {},

   data() {
    return {
      selectedPlan : null,
       memberships: [{
         id: 0,
         name: 'Supporter',
         copy:'copy',
         price: '99.99',
         image: ''
       },
       {
         id: 2,
         name: 'Crew Member',
         copy:'copy',
         price: '99.99',
         image: ''
       },{
         id: 3,
         name: 'Supporter',
         copy:'copy',
         price: '99.99',
         image: ''
       },
       {
         id: 4,
         name: 'Crew Member',
         copy:'copy',
         price: '99.99',
         image: ''
       }]
    };
  },

  components: {},

  computed: {
    clubs() {
      // console.log(this.$store.state.clubs);
      return this.$store.state.clubs;
    }
  },

  head() {
    return {
      title: `JOIN | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {
    selectPlan(id){
      // this.memberships.forEach(element => {
      //   element.selected = false;
      // });
      // m.selected = true;
      this.selectedPlan = id
    }
  }
};
</script>

<style>
</style>
