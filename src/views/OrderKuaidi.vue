<template>
  <div>
    <van-row class="g-header">
      <van-col span="3" offset="1" class="u-icon"
        ><van-icon name="arrow-left"
      /></van-col>
      <van-col span="16" class="texts">
        <span>物流详情</span>
      </van-col>
      <van-col span="3" offset="1" class="u-icon"
        ><van-icon name="ellipsis"
      /></van-col>
    </van-row>
    <div class="title">订单商品</div>
    <van-card
        num="2"
        price="145.00"
        desc="草莓味"
        title="千业吐司面包1Kg半切片三明治早餐蛋糕炼奶乳糕炼奶乳动"
        thumb="http://localhost:8080/images/big_5.jpg"
      />
      <div class="line"></div>
    <div class="info">
        <span>同城快递</span>
        <br>
        <span>运单号码：2018080609875</span>
        <br>
        <span>物流状态：等待发货</span>
    </div>
    <van-steps direction="vertical" :active="0" class="wuliu">
      物流信息
      <van-step>
        <h3>等待发货</h3>
      </van-step>
      <van-step>
        <h3>卖家未发货</h3>
      </van-step>
      <van-step> </van-step>
    </van-steps>
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
  },
};
</script>

<style scoped>
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
.title{
    font-size: 1rem;
    color: #4AA3E6;
    border-bottom: 2px solid #4AA3E6;
    text-indent:1rem;
    height: 3rem;
    line-height: 3rem;
}
.line{
    width: 100%;
    height: .8rem;
    background: #dddddd;
}
.info{
    width: 90%;
    margin: 1rem auto;
    border-bottom: 1px solid #dddddd;
    line-height: 1.5rem;
    font-size: 1rem;
    color: #666;
}
.wuliu {
  font-size: 1rem;
  color: #666666;
}
</style>