<template>
  <div class="product-top">
      <nav-bar>
          <div slot="left" class="left" @click="$router.back()">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center">商品详情</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/navbar/NavBar'
export default {
  name: "ProductInfoTop",
  components: {
      NavBar
  },
  methods: {
  }
};
</script>

<style scoped>
.product-top{
    background: #fff;
}
.left{
    padding-top: 5px;
    box-sizing: border-box;
}
</style>
