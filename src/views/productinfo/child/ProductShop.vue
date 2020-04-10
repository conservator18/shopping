<template>
  <div class="product-shop">
      <div class="shop-title">
          <img :src="shopInfo.shopLogo" alt="">
          <span>{{shopInfo.name}}</span>
      </div>
      <div class="shop-content">
          <div class="left">
              <div class="csells">{{shopInfo.cSells | csellFilter}}</div>
              <div class="cgoods">{{shopInfo.cGoods}}</div>
              <div>总销量</div>
              <div>全部宝贝</div>
          </div>
          <div class="right">
              <table>
                  <tr v-for="(item, index) in shopInfo.score" :key="index">
                      <td>{{item.name}}</td>
                      <td>{{item.score}}</td>
                      <td></td>
                  </tr>
              </table>
          </div>
      </div>
      <div></div>
  </div>
</template>

<script>
export default {
  name: "ProductShop",
  props: {
      shopInfo: {
          type: Object,
          default(){
              return {}
          }
      }
  },
  filters: {
      csellFilter(val){
          return val > 10000 ? (val / 10000).toFixed(2) + '万' : val;
      }
  },
  created(){
      console.log(this.shopInfo);
  }
};
</script>

<style scoped>
.product-shop{
    height: 250px;
}
.shop-title{
    margin: 30px 0;
}
.shop-title img{
    width: 47px;
    height: 47px;
    vertical-align: middle;
    border: 1px solid rgba(100, 100, 100, .1);
    border-radius: 50%;
    margin: 0 7px;
}
.shop-title span{
    font-size: 13px;
    font-weight: bold;
}
.shop-content{
    display: flex;
    padding: 0 20px;
    background: yellow;
}
.shop-content .left,.shop-content .right{
    flex: 1;
}
.shop-content .left{
    display: flex;
    flex-wrap: wrap;
}
.shop-content .left div{
    width: 50%;
    text-align: center;
    font-size: 12px;
    box-sizing: border-box;
    line-height: 15px;
    display: inline-block;
}
.shop-content .left div:nth-child(2n){
    border-right: 1px solid rgba(100, 100, 100, .3);
}
.shop-content .left .csells,.shop-content .left .cgoods{
    color: #666;
    font-size: 16px;
}
.shop-content .right{
    font-size: 12px;
}
</style>
