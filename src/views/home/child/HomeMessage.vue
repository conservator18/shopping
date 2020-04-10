<template>
  <div class="message">
    <div class="message-item" v-for="(item, index) in messageList" :key="index" @click="goProductInfo(item.iid)">
      <img :src="item.show.img" alt @load="imgLoad" />
      <div class="bottom">
        <div class="title">{{item.title}}</div>
        <span class="price">{{item.price}}</span>
        <span class="cfav">{{item.cfav | cfavFilter}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMessage",
  props: {
    messageList: {
      type: Array,
      default() {
        return [];
      }
    },
    Bscroll: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    cfavFilter(val) {
      return val > 10000 ? (val / 10000).toFixed(2) + "万" : val;
    }
  },
  methods: {
    //每张图片加载完成后都重新计算一下滚动区域的长度
    imgLoad() {
      this.Bscroll.refresh();
    },
    //跳转到详情页
    goProductInfo(iid){
      this.$router.push({
        path: '/productinfo',
        query: {
          id: iid
        }
      })
    }
  }
};
</script>

<style scoped>
.message {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.message-item {
  width: 48%;
  border: 1px solid rgba(100, 100, 100, 0.1);
  padding: 2px;
  margin: 5px 0;
  border-radius: 3px;
  text-align: center;
  position: relative;
}
.message-item img {
  width: 100%;
  margin-bottom: 40px;
}
.bottom {
  width: 100%;
  position: absolute;
  bottom: 5px;
}
.message-item .title {
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  color: #666;
}
.message-item .price {
  font-size: 15px;
  color: #ff5777;
  padding: 0 2px;
}
.message-item .cfav {
  font-size: 13px;
  color: #666;
}
.message-item .cfav::before {
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url("~assets/img/common/collect.svg");
  background-size: 13px 13px;
}
</style>
