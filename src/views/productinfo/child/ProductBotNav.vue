<template>
  <div class="bot-nav">
      <div class="left">
          <div class="customer-service">
              <div class="img"></div>
              <div class="text">客服</div>
          </div>
          <div class="shop">
              <div class="img"></div>
              <div class="text">店铺</div>
          </div>
          <div class="collection">
              <div class="img"></div>
              <div class="text">收藏</div>
          </div>
      </div>
      <div class="right">
          <div class="addCart" @click="addCart">加入购物车</div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ProductBotNav",
  methods: {
      addCart(){
          this.$emit("addCart");
      }
  }
};
</script>

<style scoped>
.bot-nav{
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .3);
}
.left{
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    padding: 4px 0;
}
.right{
    flex: 1;
    display: flex;
    font-size: 13px;
    text-align: center;
    color: #fff;
    margin: 10px 0;
    line-height: 29px;
}
.left .img{
    width: 22px;
    height: 22px;
    background-image: url('~assets/img/detail/detail_bottom.png');
    background-size: 22px 150px;
    background-repeat: no-repeat;
    margin: auto;
}
.left .text{
    font-size: 13px;
}
.left .customer-service .img{
    background-position: 0 -52px;
}
.left .shop .img{
    background-position: 0 -97px;
}
.left .collection .img{
    background-position: 0 2px;
}
.right .addCart{
    flex: 1;
    background: #FF8A00;
    border-radius: 10px 0 0 10px;
}
.right .buy{
    flex: 1;
    background: #FF4400;
    border-radius: 0 10px 10px 0;
}
</style>
