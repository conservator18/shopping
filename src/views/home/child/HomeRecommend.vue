<template>
 <div class="recommend">
   <div class="recommend-item" v-for="(item, index) in recommendList" :key="index">
     <a :href="item.link">
       <img :src="item.image" alt="">
     <div class="recommend-item-text">{{item.title}}</div>
     </a>
   </div>
 </div>
</template>

<script>
 export default {
   name: 'HomeRecommend',
   props: {
     recommendList: {
       type: Array,
       default() {
         return []
       }
     }
   }
 }
</script>

<style scoped>
.recommend{
  width: 100vw;
  display: flex;
  padding: 10px 0;
  text-align: center;
  border-bottom: 10px solid rgba(100, 100, 100, .1);
}
 .recommend-item{
   flex: 1;
 }
 .recommend-item img{
   width: 100%;
   margin-bottom: 4px; 
 }
 .recommend-item-text{
   font-size: 13px;
   color: #666;
 }
</style>
