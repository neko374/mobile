<template>
  <div>
    <van-row class="g-header">
      <van-col span="3" offset="1" class="u-icon" @click="back"
        ><van-icon name="arrow-left"
      /></van-col>
      <van-col span="16" class="texts">
        <span>订单详情</span>
      </van-col>
      <van-col span="3" offset="1" class="u-icon"
        ><van-popover
        v-model="showPopover"
        theme="dark"
        trigger="click"
        :actions="actions"
      >
        <template #reference>
          <van-icon name="ellipsis" />
        </template>
      </van-popover></van-col>
    </van-row>
    <van-row class="head-line">
      <van-col span="3" offset="1" class="u-icon">
        <van-icon name="bill-o" color="#fff" size="2rem" />
      </van-col>
      <van-col span="20" class="texts">
        <span>未付款 卖家未发货</span>
        <br />
        <span>订单号：2018081218456</span>
        <br />
        <span>配送费用：￥15.00元</span>
      </van-col>
    </van-row>
    <van-row class="weixin">
      <van-col span="23" offset="1" class="texts">
        <span>所选支付方式：微信支付</span>
        <br />
        <span>应付款金额：</span><span class="red">￥290.00</span> 
        <br />
        <van-button type="primary" class="btn">去微信支付</van-button>
      </van-col>
    </van-row>
    <van-row class="userinfo">
      <van-row>
        <van-col span="15" offset="1">收货人姓名：VIVIAN</van-col>
        <van-col span="7" offset="1">15008508888</van-col>
      </van-row>
      <van-col span="23" offset="1" class="texts">
        <span>详细地址：贵州省贵阳市花溪区贵州大学男生宿舍608</span>
      </van-col>
    </van-row>
    <van-steps direction="vertical" :active="0" class="wuliu">
      物流信息未确认
      <van-step>
        <h3>等待发货</h3>
      </van-step>
      <van-step>
        <h3>卖家未发货</h3>
      </van-step>
      <van-step> </van-step>
    </van-steps>
    <div class="shops">
      <span class="title">颜文明体育用品</span>
      <br />
      <van-card
        num="2"
        price="145.00"
        desc="草莓味"
        title="千业吐司面包1Kg半切片三明治早餐蛋糕炼奶乳糕炼奶乳动"
        thumb="http://localhost:8080/images/big_5.jpg"
      />
      <span class="price">小计：￥290.00元</span>
      <br />
      <span class="price">
        <span>商品总价：￥290.00</span>
        <br>
        <span>应付金额：</span><span class="red">￥290.00</span> 
      </span>
    </div>
    <div class="end">
        <div class="text">
            <span>配送方式：千辉配送</span>
            <br>
            <span>支付方式：微信支付</span>
            <br>
            <span>订单附言：麻烦尽快发货，饿！</span>
            <br>
            <span>缺货处理：等待所有商品备齐后再发</span>
        </div>
    </div>
    <div class="footer">
        <van-button type="info" class="btn" @click="wuliu">查看物流信息</van-button>
    </div>
  </div>
</template>

<script>
import {
  Button,
  Col,
  Row,
  Icon,
  Tab,
  Tabs,
  Rate,
  Image as VanImage,
  Card,
  Field,
  Step,
  Steps,
  Popover
} from "vant";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
    [Rate.name]: Rate,
    [VanImage.name]: VanImage,
    [Card.name]: Card,
    [Field.name]: Field,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Popover.name]: Popover,
  },
  data(){
    return{
      showPopover: false,
      actions: [{ text: '首页' }, { text: '分类' }, { text: '购物车' }, { text: '会员中心' }],
    }
  },
  methods:{
    wuliu(){
      this.$router.push("/orderkuaidi")
    },
    back(){
      history.back()
    },
  }
};
</script>

<style scoped lang="less">
.g-header {
  height: 3rem;
  background: rgb(#f5f5f5);
  color: rgb(75, 73, 73);
  line-height: 3rem;
}
.g-header .texts {
  font-size: 1rem;
  text-align: center;
}
.head-line {
  padding-top: 1rem;
  height: 5rem;
  background: #4aa3e6;
}
.head-line span {
  color: white;
  font-size: 0.8rem;
}
.weixin {
  margin-top: 2rem;
  height: 7rem;
  border-bottom: 1px solid #dddddd;
}
.weixin span {
  font-size: 0.8rem;
}
.weixin .btn {
  display: block;
  width: 50%;
  margin: 1rem auto;
  border-radius: 0.5rem;
}
.userinfo {
  line-height: 1rem;
  font-size: 0.8rem;
  padding: 1rem 0;
  border-bottom: 1px solid #dddddd;
}
.wuliu {
  font-size: 1rem;
  border-bottom: 5px solid #dddddd;
}
.shops{
    width: 90%;
    margin: 1rem auto;
    font-size: .8rem;
    
}
.shops .title{
    font-size: 1rem;
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #dddddd;
    padding: 1rem 0;
}
.shops .price{
    display: inline-block;
    width: 100%;
    text-align: right;
    border-top: 1px solid #dddddd;
    padding: .3rem 0;
}
.end{
    border-top: 5px solid #dddddd;
    border-bottom: 3rem solid #dddddd;
}
.end .text{
    width: 90%;
    margin: 1rem auto;
    font-size: .7rem;
    line-height: 1.5rem;
    color: #666666;
}
.footer{
    position: fixed;
    width: 100%;
    bottom: 0;
}
.footer .btn{
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    background: #4AA3E6;
}
.red{
    color: red;
}
</style>