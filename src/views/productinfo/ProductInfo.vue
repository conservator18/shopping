<template>
  <div>
    <!-- 头部 -->
    <product-info-top></product-info-top>

    <!-- 滑动区域 -->
    <div class="wrap" ref="wrap">
      <div class="content">
        <!-- 轮播图 -->
        <product-info-swiper :productInfoData="productInfoData"></product-info-swiper>
        <!-- 标题内容 -->
        <product-info-title :productTitleData="productTitleData" :columns="columns"></product-info-title>
        <!-- 服务 -->
        <product-service :services="services"></product-service>
        <!-- 商店信息 -->
        <product-shop :shopInfo="shopInfo"></product-shop>

        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfoTop from "./child/ProductInfoTop";
import ProductInfoSwiper from "./child/ProductInfoSwiper";
import BScroll from "better-scroll";
import ProductInfoTitle from "./child/ProductInfoTitle";
import ProductService from './child/ProductService';
import ProductShop from './child/ProductShop';
export default {
  name: "ProductInfo",
  components: {
    ProductInfoTop,
    ProductInfoSwiper,
    ProductInfoTitle,
    ProductService,
    ProductShop
  },
  data() {
    return {
      productId: "",
      productInfoData: [],
      Bscroll: null, //滚动实例
      productTitleData: {},
      columns: [],
      services: [],
      shopInfo: {}
    };
  },
  created() {
    this.productId = this.$route.query.id;
    this.getProductInfoData();
  },
  mounted() {
    //创建better-scroll实例
    this.Bscroll = new BScroll(this.$refs.wrap, {
      pullUpLoad: true,
      click: true,
      tap: true
    });
  },
  methods: {
    //请求商品详情信息
    getProductInfoData() {
      this.request({
        url: this.url.detail,
        methods: "get",
        params: {
          iid: this.productId
        }
      })
        .then(res => {
          console.log(res);
          this.productInfoData = res.result.itemInfo.topImages;
          this.productTitleData = res.result.itemInfo;
          this.columns = res.result.columns;
          this.services = res.result.shopInfo.services;
          this.shopInfo = res.result.shopInfo;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.wrap {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  margin-top: 44px;
}
</style>
