<template>
  <div class="main">
    <van-row class="g-header">
      <van-col span="3" offset="1" class="u-icon"
        ><van-icon name="arrow-left"
      /></van-col>
      <van-col span="16" class="texts">
        <span>商品评价</span>
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
          </template> </van-popover
      ></van-col>
    </van-row>
    <van-card
      num="2"
      price="205.00"
      desc="散装健康休闲食品农家米锅巴"
      title="益克孕妇零食小米锅巴小米煎饼手工"
      thumb="http://localhost:8080/images/big_5.jpg"
    />
    <div class="score">
      <span>评分</span>
      <br />
      <br />
      <span>描述：<van-rate v-model="value" size=".8rem" /></span>
      <br />
      <br />

      <span>服务：<van-rate v-model="value" size=".8rem" /></span>
      <br />
      <br />
      <span>发货：<van-rate v-model="value" size=".8rem" /></span>
      <br />
      <br />
      <span>物流：<van-rate v-model="value" size=".8rem" /></span>
      <br />
    </div>
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      class="textarea"
    />
    <van-button type="info" class="btn">发表评价</van-button>
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
    [Popover.name]: Popover,
  },
  data() {
    return {
      message: "",
      value: 0,
      showPopover: false,
      actions: [
        { text: "首页" },
        { text: "分类" },
        { text: "购物车" },
        { text: "会员中心" },
      ],
    };
  },
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
.score {
  width: 90%;
  margin: 1rem auto;
}
.score span {
  font-size: 1rem;
}
.textarea {
  width: 90%;
  height: 6rem;
  margin: 1rem auto;
  background: #fafafa;
  border: 1px solid #dddddd;
}
.btn {
  display: block;
  width: 90%;
  border-radius: 1rem;
  margin: 1rem auto;
}
</style>