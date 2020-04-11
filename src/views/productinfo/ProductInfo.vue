<template>
  <div class="product-info">
    <!-- 头部 -->
    <product-info-top></product-info-top>

    <!-- 滑动区域 -->
    <div class="wrap" ref="wrap">
      <div class="content">
        <!-- 轮播图 -->
        <product-info-swiper :productInfoData="productInfoData" @swiperLoad="swiperLoad"></product-info-swiper>
        <!-- 标题内容 -->
        <product-info-title :productTitleData="productTitleData" :columns="columns"></product-info-title>
        <!-- 服务 -->
        <product-service :services="services"></product-service>
        <!-- 商店信息 -->
        <product-shop :shopInfo="shopInfo"></product-shop>
        <!-- 图片展示 -->
        <product-show-img :detailImg="detailImg" @imgLoad="imgLoad"></product-show-img>
        <!-- 参数展示 -->
        <product-params :ruleParams="ruleParams" :infoParams="infoParams"></product-params>
      </div>
    </div>
    <!-- 购买菜单 -->
    <product-bot-nav @addCart="addCart"></product-bot-nav>
  </div>
</template>

<script>
import ProductInfoTop from "./child/ProductInfoTop";
import ProductInfoSwiper from "./child/ProductInfoSwiper";
import BScroll from "better-scroll";
import ProductInfoTitle from "./child/ProductInfoTitle";
import ProductService from "./child/ProductService";
import ProductShop from "./child/ProductShop";
import ProductShowImg from "./child/ProductShowImg";
import ProductParams from "./child/ProductParams";
import ProductBotNav from "./child/ProductBotNav";
export default {
  name: "ProductInfo",
  components: {
    ProductInfoTop,
    ProductInfoSwiper,
    ProductInfoTitle,
    ProductService,
    ProductShop,
    ProductShowImg,
    ProductParams,
    ProductBotNav
  },
  data() {
    return {
      productId: "",
      productInfoData: [],
      Bscroll: null, //滚动实例
      productTitleData: {},
      columns: [],
      services: [],
      shopInfo: {},
      detailImg: [],
      ruleParams: [],
      infoParams: []
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
          this.productInfoData = res.result.itemInfo.topImages;
          this.productTitleData = res.result.itemInfo;
          this.columns = res.result.columns;
          this.services = res.result.shopInfo.services;
          this.shopInfo = res.result.shopInfo;
          this.detailImg = res.result.detailInfo.detailImage[0].list;
          this.ruleParams = res.result.itemParams.rule.tables[0];
          this.infoParams = res.result.itemParams.info.set;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //轮播图加载完成
    swiperLoad() {
      this.Bscroll.refresh();
    },
    //详情图片加载完成
    imgLoad() {
      this.Bscroll.refresh();
    },
    //添加到购物车
    addCart(){
      this.$toast("加入成功");
      let obj = {
        iid: this.productId,
        title: this.productTitleData.title,
        desc: this.productTitleData.desc,
        price: this.productTitleData.lowNowPrice,
        count: 1,
        img: this.productInfoData[0],
        checked: true
      }

      this.$store.commit('addCartData', obj)
    }
  }
};
</script>

<style scoped>
.product-info {
  position: relative;
  height: 100vh;
  z-index: 999;
  background: #fff;
}
.wrap {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  margin-top: 44px;
}
</style>
