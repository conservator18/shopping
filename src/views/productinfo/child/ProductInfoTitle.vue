<template>
  <div class="product-info-title">
    <h3>{{productTitleData.title}}</h3>
    <div class="productPrice">
      <span class="newPrice">{{productTitleData.price}}</span>
      <span class="oldPrice">{{productTitleData.oldPrice}}</span>
      <span class="discount" v-show="productTitleData.discountDesc">{{productTitleData.discountDesc}}</span>
    </div>
    <div class="columns">
        <div class="columns-item" v-for="(item, index) in columns" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfoTitle",
  props: {
    productTitleData: {
      type: Object,
      default() {
        return {};
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
  }
};
</script>

<style scoped>
.product-info-title {
  padding: 5px;
}
.productPrice {
  margin: 10px 0;
}
.productPrice .newPrice {
  color: #ff5777;
}
.productPrice .oldPrice {
  font-size: 12px;
  color: #666;
  text-decoration: line-through;
  margin: 0 5px;
}
.productPrice .discount {
  font-size: 12px;
  color: #fff;
  background: #ff5777;
  border-radius: 3px;
  padding: 0 2px;
}
.columns{
    font-size: 13px;
    color: #666;
    display: flex;
    border-bottom: 1px solid rgba(100, 100, 100, .5);
    padding: 5px 0;
}
.columns .columns-item{
    flex: 1;
}
</style>
