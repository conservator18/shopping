<template>
  <div class="params">
      <table>
          <tr v-for="(item, index) in ruleParams" :key="index">
              <td v-for="(item1, index1) in item" :key="index1">{{item1}}</td>
          </tr>
      </table>
      <table class="info">
          <tr v-for="(item, index) in infoParams" :key="index">
              <td v-for="(item1, index1) in item" :key="index1">{{item1}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "ProductParams",
  props: {
      ruleParams: {
          type: Array,
          default(){
              return []
          }
      },
      infoParams: {
          type: Array,
          default(){
              return []
          }
      }
  }
};
</script>

<style scoped>
.params{
    padding: 10px;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 5px solid rgba(100, 100, 100, .1);
}
.params table{
    width: 100%;
}
.params table tr td{
    padding: 10px 0;
    border-bottom: 1px solid rgba(100, 100, 100, .3);
}
.info tr td:first-child{
    width: 30%;
}
.info tr td:last-child{
    color: #EB4868;
}
</style>
