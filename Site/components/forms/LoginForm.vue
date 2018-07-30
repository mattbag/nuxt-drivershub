<template>
   <div>
       <LoginSocial />
       <or />
       <form action="">

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
       </form>
      <button class="btn bg-black text-yellow md:w-1/2" type="submit">
      login
      </button>
   </div>
</template>
<script>
import or from "@/components/atoms/or";
import LoginSocial from "@/components/forms/LoginSocial";

export default {
  components: {
    LoginSocial,
    or
  },
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
