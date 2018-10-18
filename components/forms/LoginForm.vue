<template>
  <div v-if="!doLogin">
    <LoginSocial />
    <or />
    <form action="" @submit.prevent="loginUser">

      <div class="w-full mb-4">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-email">
          Email
        </label>
        <input class="input" id="grid-email" type="text" placeholder="Doe">
      </div>

      <div class="w-full mb-4">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
          Password
        </label>
        <input class="input" id="grid-password" type="password" placeholder="******************">
        <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
      </div>
      <button class="btn bg-black text-yellow md:w-1/2" type="submit">
        login
      </button>
    </form>
  </div>
</template>
<script>
import or from "@/components/atoms/or";
import LoginSocial from "@/components/forms/LoginSocial";

export default {
  data() {
    return { doLogin: false }
  },
  components: {
    LoginSocial,
    or
  },
  methods: {
    loginUser() {
      this.doLogin = true;
      this.$store.commit("setUser", { name: "Matt", type: "Premium" });
      // this.$store.state.user;
      // console.log(this.$store.state.user)
      this.$router.push("/user");
    }
  }
  //   props: {
  //     text: {
  //       type: String,
  //       required: true
  //     },
  //     classes: {
  //       type: String,
  //       required: false,
  //       default: "bg-yellow text-black"
  //     },
  //     url: {
  //       type: String,
  //       required: true
  //     },
  //     external: {
  //       type: Boolean,
  //       required: false,
  //       default: false
  //     }
  //   }
};
</script>
<style lang="scss" scoped>
</style>
