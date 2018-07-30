<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <section class="px-4 lg:w-1/2 mx-auto">
 <br>
   <h2 class="text-red">Join</h2>
 <br>
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
  <h1 class="text-2xl mt-0">Your details</h1>
  <br>
   <LoginSocial />

    <or />
    <form class="w-full max-w-md">
  <!-- <div class="flex flex-wrap -mx-3 mb-6"> -->
    <div class="w-full mb-4">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Jane">
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full mb-4">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4 leading-tight" id="grid-last-name" type="text" placeholder="Doe">
    </div>
    <div class="w-full mb-4">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-email">
        Email
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4 leading-tight" id="grid-email" type="text" placeholder="Doe">
    </div>
  <!-- </div> -->

    <div class="w-full mb-4">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4 mb-3 leading-tight" id="grid-password" type="password" placeholder="******************">
      <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
 <div class="w-full mb-4">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password-confirm">
       Confirm Password
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4 mb-3 leading-tight" id="grid-password-confirm" type="password" placeholder="******************">
      <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>

  
    <div class="md:w-1/2">
     <!-- <button type="submit" class="bg-black hover:bg-red-dark w-full text-yellow py-3 px-4">
          NEXT
        </button> -->
         <nuxt-link to="/membership/payment" class="btn bg-black w-full text-yellow">
          NEXT
        </nuxt-link>
  </div>
</form>
</div>
      
    </section>

  </div>
</template>

<script>
import or from '@/components/atoms/or'
import LoginSocial from '@/components/forms/LoginSocial'

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

  components: {
    LoginSocial,
    or
  },

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
