<template>
<div>
  <Header></Header>
  <router-view></router-view>
  <!-- 这样写是可以的，但是如果后期有很多的页面都不需要显示footer，那么这里面就会写很长 -->
<!--  <Footer v-show="$route.path != '/login' && $route.path != '/register'"></Footer>-->
  <Footer v-show="!$route.meta.isHidden"></Footer>
</div>
</template>

<script>
    import Header from "./components/Header/Header";
    import Footer from "./components/Footer/Footer";

export default {
  name: 'App',
  components:{Header,Footer},
  mounted() {
    //在这发请求去获取三级分类的数据，那么就只会发一次，而且一次就够了，因为数据不变
    this.$store.dispatch("getCategoryList")

  }
}
</script>

<style>

</style>
