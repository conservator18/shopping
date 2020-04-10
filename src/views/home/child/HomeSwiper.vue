<template>
  <div>
    <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in bannerList" :key="index">
        <img :src="item.image" @load="bannerLoad" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      }
    }
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
    bannerLoad() {
      this.$emit("bannerLoad");
    }
  }
};
</script>

<style scoped>
.home-swiper {
  height: 52vw;
}
.home-swiper img {
  width: 100%;
  height: 100%;
}
.swiper-container {
  --swiper-theme-color: #fff;
}
</style>