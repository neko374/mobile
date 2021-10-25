<template>
  <div>
    <van-nav-bar class="m-header" title="积分详情" left-arrow />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><van-image src="http://localhost:8080/images/big_5.jpg"
      /></van-swipe-item>
      <van-swipe-item
        ><van-image src="http://localhost:8080/images/pic01.jpg"
      /></van-swipe-item>
      <van-swipe-item
        ><van-image src="http://localhost:8080/images/big_5.jpg"
      /></van-swipe-item>
      <van-swipe-item
        ><van-image src="http://localhost:8080/images/pic01.jpg"
      /></van-swipe-item>
    </van-swipe>
    <div class="xq_exchange_title">
      <h2>澳益克孕妇零食小米锅巴小米煎饼手工散装健康休闲食品农家米锅巴</h2>
      <p>消耗积分：5280</p>
    </div>
    <!--  -->
    <foods-sku></foods-sku>
    <!--  -->
   <!-- 图片详情 -->
    <!-- 商品详情 -->
    <van-row>
      
        <van-panel title="商品详情">
  <van-image src="http://localhost:8080/images/goods_xqpic.jpg"></van-image>
        </van-panel>
      
    </van-row>
    <foot></foot>
  </div>
</template>

<script>
import FoodsSku from '../components/FoodsSku.vue';
import Foot from '../components/Foot.vue';
// import skuData from '../data/sku';
export default {
  components: { FoodsSku, Foot },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.m-header {
  z-index: 750px;
}
.xq_exchange_title {
  h2 {
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
  }
}
.content {
    padding: 16px 16px 160px;
  }
</style>>
