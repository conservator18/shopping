<template>
  <div>
    <swiper class="product-info-swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in productInfoData" :key="index">
        <img :src="item" @load="swiperLoad" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "ProductInfoSwiper",
  props: {
    productInfoData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: {
          delay: 2000
        }
      }
    };
  },
  methods: {
    swiperLoad(){
      this.$emit('swiperLoad')
    }
  }
};
</script>

<style scoped>
.product-info-swiper {
  margin-top: 44px;
  height: 300px;
  overflow: hidden;
}
.product-info-swiper img {
  width: 100%;
}
.swiper-container {
  --swiper-theme-color: #fff;
}
</style>
