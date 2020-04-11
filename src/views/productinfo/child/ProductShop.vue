<template>
  <div class="product-shop">
    <div class="shop-title">
      <img :src="shopInfo.shopLogo" alt />
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-content">
      <div class="left">
        <div class="sells">
          <div class="csells">{{shopInfo.cSells | csellFilter}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="goods">
          <div class="cgoods">{{shopInfo.cGoods}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{highscore: item.isBetter}">{{item.score}}</td>
            <td class="score-text" :class="{hightext: item.isBetter}">{{item.isBetter ? "高" : "低"}}</td>
          </tr>
        </table>
      </div>
    </div>
    <a :href="shopInfo.shopUrl">
        <div class="shoplink">
        进店逛逛
    </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    csellFilter(val) {
      return val > 10000 ? (val / 10000).toFixed(2) + "万" : val;
    }
  },
  created() {
  }
};
</script>

<style scoped>
.product-shop {
    padding-bottom: 20px;
  border-bottom: 5px solid rgba(100, 100, 100, 0.1);
}
.shop-title {
  margin: 30px 0;
}
.shop-title img {
  width: 47px;
  height: 47px;
  vertical-align: middle;
  border: 1px solid rgba(100, 100, 100, 0.1);
  border-radius: 50%;
  margin: 0 7px;
}
.shop-title span {
  font-size: 13px;
  font-weight: bold;
}
.shop-content {
    display: flex;
    padding: 0 30px;
    font-size: 12px;
}
.shop-content .left,.shop-content .right{
    flex: 1;
}
.shop-content .left{
    display: flex;
    padding: 10px 0;
    text-align: center;
}
.shop-content .left div{
    flex: 1;
}
.shop-content .left .csells,.shop-content .left .cgoods{
    font-size: 16px;
    color: #666;
}
.shop-content .goods{
    border-right: 1px solid rgba(71, 54, 54, 0.1)
}
.shop-content .right table{
    margin-left: 20px;
    text-align: center;
}
.shop-content .right table td{
    padding: 1px;
}
.shop-content .right table .score{
    color: #9ACD32;
}
.shop-content .right table .score-text{
    background: #9ACD32;
    color: #fff;
    border-radius: 3px;
}
.highscore{
    color: red !important;
}
.hightext{
    background: red !important;
}
.shoplink{
    width: 150px;
    height: 30px;
    line-height: 30px;
    margin: auto;
    background:rgba(100, 100, 100, 0.1);
    border-radius: 10px;
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
}
</style>
