<template>
  <div>
    <van-row class="top">
      <van-col >
        <van-icon name="arrow-left" />
      </van-col>

      <van-col span="24">
        <van-tabs type="card">
          <van-tab title="标签 1" class="t_one">
               <!-- 轮播 -->
    <van-row>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in imgslist"
          :key="index"
          v-show="item"
        >
          <van-image
            v-if="item"
            :src="item"
            @click="getImg(imgslist, index)"
          ></van-image>
        </van-swipe-item>
      </van-swipe>
    </van-row>
    <!-- 轮播内容 -->
    <van-row>
      <div>
        <div>厂家直销新鲜丹夫华夫饼早餐食品零食西式糕点3斤即时面包整箱</div>
        <div class="l_new">￥498.00<span class="l_old"><s>市场价：￥699.00</s></span></div>
        <div class="l_box">
          <span class="l_di">10人评价</span>
          <span class="l_di">9人已付款</span>
          <span class="l_di">分享</span>
        </div>
      </div>
    </van-row>
    <!-- 商品规格 -->
    <van-row>
       <!-- 基础用法 -->
    <div class="sku-container">
      <van-sku
        v-model="showBase"
        :sku="skuData.sku"
        :goods="skuData.goods_info"
        :goods-id="skuData.goods_id"
        :hide-stock="skuData.sku.hide_stock"
        :quota="skuData.quota"
        :quota-used="skuData.quota_used"
        :initial-sku="initialSku"
        reset-stepper-on-hide
        reset-selected-sku-on-hide
        disable-stepper-input
        :close-on-click-overlay="closeOnClickOverlay"
        :custom-sku-validator="customSkuValidator"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
      <van-button color="#BCBCBC" @click="showBase = true" size="large">
        请选择糕点口味
      </van-button>
    </div>
    </van-row>
    <!-- 商品详情 -->
    <van-row>
      
        <van-panel title="商品详情">
  <van-image src="http://localhost:8080/images/goods_xqpic.jpg"></van-image>
</van-panel>
      
    </van-row>
             </van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
        </van-tabs>
      </van-col>
      
      <van-col >
        <van-icon name="ellipsis" />
      </van-col>
    </van-row>
 
  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem, ImagePreview, Card,Sku,} from "vant";
import skuData from "../assets/goods/sku"
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [Card.name]: Card,
    [Sku.name]: Sku,
    [SwipeItem.name]: SwipeItem,
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
  data() {
    return {
      //规格
       skuData: skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: "30349",
        s2: "1193",
        selectedNum: 3,
      },
      customSkuValidator: () => "请选择xxx!",
      //轮播图
      imgslist: [
        "http://localhost:8080/images/big_5.jpg",
        "http://localhost:8080/images/pic01.jpg",
        "http://localhost:8080/images/big_5.jpg",
        "http://localhost:8080/images/pic01.jpg",
      ],
       show: false,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
        
      },
    };
  },
  methods: {
    //规格
     onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast("add cart:" + JSON.stringify(data));
    },
  
  //
    getImg(images, index) {
      ImagePreview({
        images: this.imgslist, //预览图片的数组
        showIndex: true, //是否显示页码
        loop: false, //是否开启循环播放
        startPosition: index, //指明预览的图
      });
    },
  },
};
</script>

<style lang="less" scoped>
.demo-sku {
  .sku-container {
    padding: 0 15px;
  }
  }
.top {
  height: 2.7rem;
  background-color: #f5f5f5;
  font-size: 1rem;
  .t-word {
    background-color: #f5f5f5;
  }
}
.banner {
  width: 100%;
  height: 20rem;
}

.l_new{
  color: red;
  margin-top: .3125rem;
}
.l_old{
  color: #ddd;
  font-size: .5rem;
  margin-top: .3125rem;
}
.l_box{
  display: flex;
  justify-content: space-between;
  margin-top: .625rem;
  .l_di{
    font-size: .5rem;
    color: gray;
  }
}
</style>>