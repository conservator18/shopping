<template>
  <div id="app">
    <router-view/>

    <tab-bar-main></tab-bar-main>

  </div>
</template>

<script>
  import TabBarMain from "./components/tabbar/TabBarMain";
  export default {
    name: 'App',
    components: {TabBarMain}
  }

</script>

<style>
@import 'assets/css/base.css';
</style>
