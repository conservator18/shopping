<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in tabData"
      :key="index"
      @click="tabChange(index)"
    >
      <span :class="{active:tabActive == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
const data = {
  tabActive: 0
};
export default {
  name: "HomeTabControl",
  props: {
    tabData: {
      type: Array,
      default() {
        return ["流行", "新款", "精选"];
      }
    }
  },
  data() {
    return data;
  },
  methods: {
    tabChange(index) {
      this.tabActive = index;
      this.$emit("tabIndex", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: #ff5777;
  border-bottom: 2px solid #ff5777;
  padding: 7px;
}
</style>
