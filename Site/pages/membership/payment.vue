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
 <nuxt-link to="/join" class="text-center inline-block bg-black hover:bg-red-dark w-full lg:w-1/2 text-yellow py-3 px-4">
          edit
        </nuxt-link>
</div>

<div class="bg-white p-4 mb-8">
  <h1 class="text-2xl mt-0">Choose Membership</h1>
  <br>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quae.</p>

<div class="py-2 flex flex-wrap -mx-4">

 <div class="w-full md:w-1/2 p-4" v-for="m in memberships" :key="m.id">
    <div class="border border-black p-4 cursor-pointer" @click="selectPlan(m.id)" :class="{'bg-black text-white shadow-lg':m.id == selectedPlan }">
      <div class="w-16 h-16 mb-4 rounded-full bg-red">

      </div>
      <p class="font-bold text-xl">{{m.name}}</p>
      <p>{{m.copy}}</p>
      <p class="mt-4">A$ {{m.price}}/year</p>
    </div>
 </div>
</div>
</div>

<div class="bg-white p-4 mb-8">
  <h1 class="text-2xl mt-0">Payment details</h1>
   

    <div class="py-2 flex flex-wrap -mx-4">
      <div class="p-4">
        <span>OR</span>
      </div>
       <div class="pr-4 flex-grow self-center">
        <hr class="w-full border-b border-black">
      </div>
    </div>
    <form class="w-full max-w-md">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Jane">
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight" id="grid-password" type="password" placeholder="******************">
      <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight" id="grid-zip" type="text" placeholder="90210">
    </div>

  </div>
    <div class="md:w-1/2">
    <br>
     <button type="submit" class="bg-black hover:bg-red-dark w-full text-yellow py-3 px-4">
          NEXT
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
