<template>
  <div>
    <div style="height: 3rem"></div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"
        ><router-link to="/home">首页</router-link></van-tabbar-item
      >
      <van-tabbar-item icon="apps-o"
        ><router-link to="/catelog">分类</router-link></van-tabbar-item
      >
      <van-tabbar-item icon="cart-o" badge="5"
        ><router-link to="/flow">购物车</router-link></van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" dot>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
    };
  },
};
</script>

<style>
</style>