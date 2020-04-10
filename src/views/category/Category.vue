<template>
  <div>
    <h1>分类</h1>
  </div>
</template>

<script>
export default {
  name: "Category",
  created() {
    this.$toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner",
      duration: 0
    });
    this.$toast.clear()
  }
};
</script>

<style scoped>
</style>