<template>
  <div class="service">
      <div class="service-item" v-for="(item, index) in services" :key="index">
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "ProductService",
  props: {
    services: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  updated() {
  }
};
</script>

<style scoped>
.service{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 5px;
    border-bottom: 5px solid rgba(100, 100, 100, .1);
}
.service-item{
    width: 33.33%;
    font-size: 13px;
    line-height: 30px;
}
.service-item img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
}
</style>
