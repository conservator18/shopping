<template>
  <div>
    <!-- 头部标题 -->
    <home-nav-bar></home-nav-bar>

    <!-- 流行、新款、特卖菜单吸铁石 -->
    <home-tab-control
      @tabIndex="tabIndex"
      class="topnav"
      :class="{tabNone: isTopNav}"
      :tabData="['流行','新款','精选']"
    ></home-tab-control>
    <!-- 滑动区域 -->
    <div class="wrap" ref="wrap">
      <div class="content">
        <!-- 轮播图 -->
        <home-swiper @bannerLoad="bannerLoad" class="home-swiper" :bannerList="bannerList"></home-swiper>
        <!-- 推荐 -->
        <home-recommend :recommendList="recommendList"></home-recommend>
        <!-- 流行 -->
        <home-pop></home-pop>
        <!-- 流行、新款、特卖菜单栏 -->
        <home-tab-control ref="control" :tabData="['流行','新款','精选']" @tabIndex="tabIndex"></home-tab-control>
        <!-- 显示商品 -->
        <home-message :messageList="goods[tabStyle].list" :Bscroll="Bscroll"></home-message>
      </div>
    </div>
    <!-- 最上 -->
    <div class="top" :class="{none: isTop}" @click="backTop">
      <img src="~assets/img/common/top.png" alt />
    </div>
  </div>
</template>

<script>
import HomeNavBar from "./child/HomeNavBar";
import HomeSwiper from "./child/HomeSwiper";
import HomeRecommend from "./child/HomeRecommend";
import HomePop from "./child/HomePop";
import BScroll from "better-scroll";
import HomeTabControl from "./child/HomeTabControl";
import HomeMessage from "./child/HomeMessage";
export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomePop,
    HomeTabControl,
    HomeMessage
  },
  data() {
    return {
      bannerList: [], //轮播图数组
      recommendList: [], //推荐数组
      Bscroll: null, //滚动实例
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      tabStyle: "pop",
      isTop: false, //是否显示返回首页
      isTopNav: false, //是否显示吸铁石
      tabOffSetTop: 0
    };
  },
  created() {
    this.getBannerData();

    this.getMessageData("pop");
    this.getMessageData("new");
    this.getMessageData("sell");
  },
  mounted() {
    //创建better-scroll实例
    this.Bscroll = new BScroll(this.$refs.wrap, {
      pullUpLoad: true,
      click: true,
      tap: true
    });
    // 下拉加载更多
    this.Bscroll.on("pullingUp", () => {
      this.Bscroll.finishPullUp();
      this.getMessageData(this.tabStyle);
    });
    // 返回最上面
    this.Bscroll.on("scroll", o => {
      this.isTop = -o.y > 500;
      this.isTopNav = -o.y > this.tabOffSetTop - 44;
    });
  },
  methods: {
    //轮播图加载完成
    bannerLoad() {
      //拿到tabcontrol到顶上的距离
      this.tabOffSetTop = this.$refs.control.$el.offsetTop;
    },
    // 获取轮播图数据
    getBannerData() {
      this.request({
        url: this.url.multidata,
        methods: "get"
      })
        .then(res => {
          this.bannerList = res.data.banner.list;
          this.recommendList = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取商品数据
    getMessageData(type) {
      let page = ++this.goods[type].page;
      this.request({
        url: this.url.messageData,
        methods: "get",
        params: {
          type: type,
          page: page
        }
      })
        .then(res => {
          let data = res.data.list;
          data.forEach(item => {
            this.goods[type].list.push(item);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 判断显示商品的种类
    tabIndex(index) {
      switch (index) {
        case 0:
          this.tabStyle = "pop";
          break;
        case 1:
          this.tabStyle = "new";
          break;
        case 2:
          this.tabStyle = "sell";
      }
    },
    //返回最上层
    backTop() {
      this.Bscroll.scrollTo(0, 0, 300);
    }
  }
};
</script>

<style scoped>
.topnav {
  width: 100vw;
  position: fixed;
  z-index: 999;
  background: #fff;
  display: none;
}
.wrap {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  margin-top: 44px;
}
.top {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 0;
  bottom: 49px;
  display: none;
}
.top img {
  width: 100%;
  opacity: 0.7;
}
.none {
  display: block;
}
.tabNone {
  display: flex;
}
</style>