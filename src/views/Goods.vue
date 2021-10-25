<template>
  <div>
    <van-row class="top">
      <van-col class="bac">
        <span v-on:click="back"><van-icon name="arrow-left" /></span>
      </van-col>

      <van-col span="24">
        <van-tabs type="card">
          <van-tab title="商品" class="t_one">
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
          <van-tab title="详情">
                  <van-panel title="商品信息">
  <div class="word">
    <ul>
      <li>
        <span>产品标准号：</span>
        <span> SC12435068101915</span>
      </li>
       <li>
        <span>厂号：</span>
        <span> 丹夫集团有限公司</span>
      </li>
       <li>
        <span>厂址：</span>
        <span> 龙海市东园镇工业区厂家</span>
      </li>
       <li>
        <span>联系方式：</span>
        <span>  0596-6711333</span>
      </li>
        <li>
        <span>配料表：</span>
        <span>鲜鸡蛋，白砂糖，小麦粉，植物油，水，食品添加...</span>
      </li>
        <li>
        <span>储藏方法：</span>
        <span>常温储存，避免放于日晒，高温和潮湿的地方</span>
      </li>
         <li>
        <span>保质期：</span>
        <span>180天</span>
      </li>
         <li>
        <span>食品添加剂：</span>
        <span>山梨糖醇液，甘油，丙二醇，改性大豆磷脂</span>
      </li>
           <li>
        <span>脂肪酸：</span>
        <span>Danco/丹夫系列: 1.5kg原味</span>
      </li>
           <li>
        <span>口味：</span>
        <span>原味（畅销口味） 奶油味（奶香浓郁)</span>
      </li>
    </ul>
  </div>
</van-panel>
          </van-tab>
          <van-tab title="评价">
              <van-panel title="匿名" desc="果断五星，下次再来" status="2017-12-04">
  <div></div>
</van-panel>
          </van-tab>
        </van-tabs>
      </van-col>
      
      <van-col >
        <van-icon name="ellipsis" />
      </van-col>
    </van-row>
 <van-row>
   <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="gocar"/>
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
  <van-goods-action-button type="warning" text="加入购物车" @click="gocar"/>
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
 </van-row>
  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem, ImagePreview, Card,Sku,GoodsAction, GoodsActionIcon, GoodsActionButton,Toast} from "vant";
import skuData from "../assets/goods/sku"
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [Card.name]: Card,
    [Sku.name]: Sku,
    [Toast.name]: Toast,
     [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
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
     //返回
    back(){
      this.$router.go(-1)
    },
      //加入购物车
    cart(){
      Toast('加入购物车');
    },
     gocar(){
      this.$router.push({name:'flow'})
    },
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
.word ul li{
  font-size: .5rem;
}
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