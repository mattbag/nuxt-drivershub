<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <section class="px-4 lg:w-1/2 mx-auto">
    <br>
   <h2 class="text-red">Summary and Payment</h2>
    <br>
 
<div class="bg-white p-4 mb-8">
  <h1 class="text-2xl mt-0">Summary</h1>
  <br>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quae.</p>
<p>Club1 </p>
<p>Club2 </p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet aliquid eligendi necessitatibus quos quibusdam dolorum recusandae nulla, molestiae illo quasi vel ex error. Sunt assumenda odit itaque in illum dolor dignissimos voluptates culpa earum! Ut quis aut officiis numquam!</p>
<p>price</p>
<br>
 <nuxt-link to="/join" class="btn bg-black text-yellow lg:w-1/2">
          edit
        </nuxt-link>
</div>

<div class="bg-white p-4 mb-8">
  <h1 class="text-2xl mt-0">Payment details</h1>
  
   <br>
    <form class="w-full max-w-md">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Cardholder Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Jane">
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
   
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Card Number
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4 mb-3 leading-tight" id="grid-password" type="number" placeholder="0000000000000000">
      <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        Exp. Month
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4 leading-tight" id="grid-city" type="text" placeholder="12">
    </div>
     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        Exp. Year
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4 leading-tight" id="grid-city" type="text" placeholder="2030">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
        CVV
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4 leading-tight" id="grid-zip" type="text" placeholder="000">
    </div>

  </div>
    <div class="md:w-1/2">
    <br>
     <button type="submit" class="btn bg-black w-full text-yellow">
          PAY $99.99
        </button>
  </div>
</form>
</div>
      
    </section>

  </div>
</template>

<script>
export default {
  // async asyncData({ app, store, params }) {},

  data() {
    return {
      selectedPlan: 0,
      memberships: [
        {
          id: 0,
          name: "Supporter",
          copy: "copy",
          price: "99.99",
          image: ""
        },
        {
          id: 2,
          name: "Crew Member",
          copy: "copy",
          price: "99.99",
          image: ""
        },
        {
          id: 3,
          name: "Supporter",
          copy: "copy",
          price: "99.99",
          image: ""
        },
        {
          id: 4,
          name: "Crew Member",
          copy: "copy",
          price: "99.99",
          image: ""
        }
      ]
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
    selectPlan(id) {
      // this.memberships.forEach(element => {
      //   element.selected = false;
      // });
      // m.selected = true;
      this.selectedPlan = id;
    }
  }
};
</script>

<style>
</style>
