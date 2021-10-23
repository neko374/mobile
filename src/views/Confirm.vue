<template>
  <div>
    <!-- 头部 -->
    <van-row class="top">
      <van-nav-bar class="t-word"
  title="确认订单"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  :border="false"
/>
    </van-row>

    <!-- 收货 -->
    <van-row class="s-box">
        <van-col span="3">
            <van-icon name="location-o" color="#fff" size="40" />
        </van-col>
        <van-col span="20" >
            <div>收货人：<span>买东西</span></div>
            <div class="s-div">收货地址：<span>贵州省贵阳市花溪区贵州大学男生5号宿舍608</span></div>
        </van-col>
        <van-col span="1">
            <van-icon name="arrow-left" />
        </van-col>
    </van-row>
    <!-- 详情 -->
    <van-panel title="订单详情">
        <div class="x-title">盛千辉便利店</div>
        <van-card class="x-word"
  num="2"
  price="2.00"
  desc="原味"
  title="港式菠萝包冰火菠萝油面包早餐糕点汉堡胚供奶茶店茶餐厅100克/个"
  thumb="http://localhost:8080/images/pic01.jpg" lazy-load
/>
    </van-panel>
    <van-row class="x-box">
        <van-button plain hairline type="info" >千辉便利店配送</van-button>
        <div class="x-con">千辉便利店会在2个小时内送到您的手中...</div>
    </van-row>
    <!-- 其他选项 -->
    <van-row class="x-box">
        <div class="q-top">其他选项</div>
        <van-collapse v-model="activeNames">
  <van-collapse-item title="开发票和缺货处理" name="1">
      <div class="q-title">缺货处理</div>
      <div v-for="item,index in collapselist" :key="index">
          <van-icon name="minus" />
          <span>{{item.con}}</span>
      </div>
  </van-collapse-item>
  <van-collapse-item title="送货时间" name="2">
      <div v-for="item,index in collapselist1" :key="index">
          <van-icon name="minus" />
          <span>{{item.con}}</span>
      </div>
  </van-collapse-item>
  <van-collapse-item title="订单附言" name="3">
      <textarea rows="3" cols="60" placeholder="请输入留言"></textarea>
  </van-collapse-item>
</van-collapse>
    </van-row>
    <!-- 支付方式 -->
    <van-row>
          <div class="q-top">支付方式 
              <span class="q-sel">（必选）</span>
              <span class="q-fs">请选择支付方式</span>
              </div>
              <div class="w-box">
                  <van-image src="http://localhost:8080/images/web/icon_wechat.png" lazy-load class="z-img"></van-image>
                  <span class="z-wechat">微信支付</span>
              </div>
              <div class="q-des">该订单完成后你将获得<span>250</span>积分以及价值<span>￥40</span>的红包</div>
                  <!-- 提交订单 -->
                <van-submit-bar :price="3050" button-text="提交订单"/>
    </van-row>

   
  </div>
</template>

<script>
import { Toast,Panel,Card ,SubmitBar   } from 'vant';
export default {
    components:{
    [Panel.name]:Panel,
    [Card.name]:Card,
    [SubmitBar.name]:SubmitBar,
  },
    data() {
    return {
      activeNames: ['1'],
      collapselist:[
          {id:1,con:"等待所有商品备齐后再发"},
          {id:2,con:"取消订单"},
          {id:3,con:"与店主协商"},
      ],
      collapselist1:[
          {id:1,con:"送货时间不限"},
          {id:2,con:"只双休日/节假日送货（工作日不用送）"},
          {id:3,con:"只工作日（双休日/节假日不用送）"},
      ]
    };
  },
  methods: {
       onClickLeft() {
      Toast('返回');
    },
  },
};
</script>

<style lang="less" scoped>
.top{
    height: 2.7rem;
    background-color: #F5F5F5;
    font-size: 1rem;
    .t-word{
        background-color: #F5F5F5;
        
    }
}
.s-box{
    width: 100%;
    height: 4rem;
    background: #4AA3E6;
    color:#fff;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    span{
        display: inline-block;
    }
    .s-div{
        font-size: 0.65rem;
        margin-top: 0.5rem;
    }
}
.x-word{
    font-size: 0.7rem;
}
.x-title{
    margin-left: .5rem;
    font-weight: 100;
    font-size: .8rem;
}
.x-con{
    color: #999;
    font-size: .2rem;
    margin: .4rem 0;
}
.x-box{
    margin: .6rem;
    border-bottom: 5px solid #F1F1F1;
}
.q-title{
    color: black;
}
textarea{
    border-color: #999;
}
.q-top{
    color: #4aa3e6;
    font-size: .8rem;
    margin-left: .5rem;
    margin-bottom: .5rem;
    .q-sel{
        color: red;
        font-size: .6rem;
    }
    .q-fs{
        color: #999;
        font-size: .6rem;
    }
}
.z-img{
    width: 25px;
}
.w-box{
    display: flex;
    align-items: center;
    margin-left: .5rem;
    .z-wechat{
    font-size: .6rem;
    color: #333;
}

}
.q-des{
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    border-top: 5px solid #F1F1F1;
    border-bottom: 5px solid #F1F1F1;
    margin-bottom: 2rem;
}
</style>

