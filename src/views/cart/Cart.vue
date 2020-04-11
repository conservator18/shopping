<template>
  <div>
    <h1>购物车</h1>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    created(){
      console.log(this.$store.state.cart);
    }
  }
</script>

<style scoped>

</style>