<template>
  <div class="max-w-3xl flex flex-wrap px-4 mx-auto">
    <section class="px-4 lg:w-1/2 mx-auto">
      <br>
      <h2 class="text-red">Login</h2>
      <br>
      <div class="bg-white p-4 mb-6">
        <LoginForm v-show="!showPasswordForgotten" />
        <div v-show="showPasswordForgotten">
          <div>
            <p>Reset your password</p>
          </div>

          <button v-show="showPasswordForgotten" @click="showPasswordForgotten = !showPasswordForgotten" class="uppercase underline">go back</button>

        </div>
        <br>
        <button v-show="!showPasswordForgotten" @click="showPasswordForgotten = !showPasswordForgotten" class="uppercase underline">forgot password?</button>
      </div>
      <nuxt-link to="/join" class="underline uppercase">not a member?</nuxt-link>
      <div class="mb-6"></div>
    </section>
  </div>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm";

export default {
  // async asyncData({ app, store, params }) {},
  data: () => {
    return {
      showPasswordForgotten: false
    };
  },
  components: {
    LoginForm
  },

  head() {
    return {
      title: `LOGIN | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  }
};
</script>

<style>
</style>
