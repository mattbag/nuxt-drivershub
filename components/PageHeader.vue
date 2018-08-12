<template>
    <header class="px-4 py-2 w-full">
        <div v-if="breadcrumbs">

            <!-- <nuxt-link  class="uppercase text-sm hover:text-red" to="/">Home</nuxt-link>
        <span class="mx-1">/</span>
      <nuxt-link  class="uppercase text-sm hover:text-red" to="/blog">Blog</nuxt-link> -->
            <span v-for="(b,i) in breadcrumbs" :key="b.url">
                <nuxt-link class="uppercase text-sm hover:text-red" :to="b.url">{{b.title}}</nuxt-link>
                <span class="mx-1" v-if="i != breadcrumbs.length -1">/</span>
            </span>

        </div>
        <h1 class="text-red text-2xl my-2">{{heading}}</h1>
    </header>

</template>
<script>
export default {
  props: {
    heading: String,
    breadcrumbs: Array
  }
};
</script>
