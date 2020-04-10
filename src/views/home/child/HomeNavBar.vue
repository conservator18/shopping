<template>
  <div>
      <nav-bar class="nav-bar">
          <div slot="center">购物街</div>
      </nav-bar>
      
  </div>
</template>

<script>
import navBar from '../../../components/navbar/NavBar'
export default {
    name: 'HomeNavBar',
    components: {
        navBar
    }
}
</script>

<style scoped>
.nav-bar{
    background: #FF5777;
    color: #fff;
}
</style>