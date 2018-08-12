<template>
    <div :class="expand" @click="exp"></div>
</template>
<script>
export default {
  data() {
    return {
      expand: ''
    };
  },
  methods:{
      exp(){
          this.expand = 'expand' +( Math.floor(Math.random() * (3 - 1 + 1)) + 1);
      }
  }
};
</script>
<style lang="scss" scoped>
div {
  padding-top: 100%;
  background-color: #ccc;
  transition: grid-area 300ms;
  cursor: pointer;
  .expand1 {
    grid-area: span 2 / span 2;
  }
  .expand2 {
    grid-area: span 3 / span 2;
  }
  .expand3 {
    grid-area: span 2 / span 3;
  }
}
</style>
