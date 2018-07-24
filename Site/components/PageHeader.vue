<template>
    <header class="px-4 py-2 w-full">
      <nuxt-link  class="uppercase text-sm hover:text-red" to="/">Home</nuxt-link>
        <span class="mx-1">/</span>
      <nuxt-link  class="uppercase text-sm hover:text-red" to="/blog">Blog</nuxt-link>
      <h1 class="text-red text-2xl my-2">{{heading}}</h1>
    </header>

</template>
<script>
export default {
    props:{
        heading: String
    }
}
</script>
