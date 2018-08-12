<template>
    <div class="flex flex-wrap -mx-4">
      <div class="md:w-1/2 px-4">
        <button class="btn facebook w-full">
          facebook
        </button>
      </div>
       <div class="md:w-1/2 px-4">
        <button class="btn google w-full">
          google
        </button>
      </div>  
    </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.btn{
  &.facebook{
    background-color: blue;
    color: $white;
  }
  &.google{
    background-color: $white;
    color: $black;
    border: 1px solid $black;
  }
}
</style>
