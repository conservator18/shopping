<template>
  <div class="img-show">
      <div class="text">图片展示</div>
      <div class="img" v-for="(item, index) in detailImg" :key="index">
          <img :src="item" alt="" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
  name: "ProductShowImg",
  props: {
      detailImg: {
          type: Array,
          default(){
              return []
          }
      }
  },
  methods: {
      imgLoad(){
          this.$emit('imgLoad')
      }
  }
};
</script>

<style scoped>
.img-show{
    border-bottom: 5px solid rgba(100, 100, 100, .2);
}
.text{
    font-weight: bold;
    color: #666;
    text-align: center;
    margin: 10px;
}
.img img{
    width: 100%;
}
</style>
