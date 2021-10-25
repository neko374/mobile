<template>
  <div class="home">
    <van-row class="g-header">
      <van-col span="3" offset="1" class="u-icon" @click="back">
        <van-icon name="arrow-left" />
      </van-col>
      
      <van-col span="16" class="texts">
        <span>我的评价</span>
      </van-col>
      <van-col span="3" offset="1" class="u-icon"
        >
        <van-popover
        v-model="showPopover"
        theme="dark"
        trigger="click"
        :actions="actions"
      >
        <template #reference>
          <van-icon name="ellipsis" />
        </template>
      </van-popover>
        </van-col>
    </van-row>
    <van-tabs v-model="active" animated title-class="title">
      <van-tab>
        <template #title class="choose"> 全部评价</template>
        <div class="shops">
          <div class="oneshop">
            <div class="rate">
              <span>评价：<van-rate v-model="value" size=".8rem" /></span>
              <span>2017-12-06</span>
            </div>
            <br />
            <span>很好吃很好吃很好看</span>
            <br />
            <span>晒单：有图有真相</span>
            <br />
            <van-image
              width="3rem"
              height="3rem"
              src="http://localhost:8080/images/pic02.jpg"
            />
            <van-image
              width="3rem"
              height="3rem"
              src="http://localhost:8080/images/pic05.jpg"
            />
            <br />
            <van-card
              num="2"
              price="205.00"
              desc="散装健康休闲食品农家米锅巴"
              title="益克孕妇零食小米锅巴小米煎饼手工"
              thumb="http://localhost:8080/images/big_5.jpg"
            />
          </div>
          <div class="oneshop" v-for="(item, index) in listData" :key="index">
            <div class="rate">
              <span>评价：<van-rate v-model="item.starts" size=".8rem" /></span>
              <span>{{ item.time }}</span>
            </div>
            <br />
            <span>{{ item.comment }}</span>
            <br />
            <span>晒单：{{ item.descp }}</span>
            <br />
            <van-image
              width="3rem"
              height="3rem"
              src="http://localhost:8080/images/pic02.jpg"
            />
            <van-image
              width="3rem"
              height="3rem"
              src="http://localhost:8080/images/pic05.jpg"
            />
            <br />
            <van-card
              num="2"
              price="205.00"
              desc="散装健康休闲食品农家米锅巴"
              title="益克孕妇零食小米锅巴小米煎饼手工"
              thumb="http://localhost:8080/images/big_5.jpg"
            />
            <van-row>
              <van-col span="13"></van-col>
              <van-col span="11">
                <van-button
              type="info"
              class="btn btn1"
              size="small"
              v-if="item.btn1 == 1"
              @click="pinj">发表评价</van-button
            >
            <van-button type="info" class="btn btn2" size="small"
              @click="shaid">发表晒单</van-button
            >
              </van-col>
            </van-row>
            
          </div>
        </div>
        <comment-foot></comment-foot>
      </van-tab>
      <van-tab>
        <template #title class="choose"> 待评价</template>
        <div>待评价</div>
        <comment-foot></comment-foot>
      </van-tab>
      <van-tab>
        <template #title class="choose"> 已评价</template>
        <div>已评价</div>
        <comment-foot></comment-foot>
      </van-tab>
    </van-tabs>
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
  Popover,
} from "vant";
import axios from "axios";
import CommentFoot from "../components/CommentFoot.vue";

export default {
  // name: "Home",
  components: {
    CommentFoot,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
    [Rate.name]: Rate,
    [VanImage.name]: VanImage,
    [Card.name]: Card,
    [Popover.name]: Popover,
  },
  data() {
    return {
      active: "",
      value: 3,
      listData: [],
      showPopover: false,
      actions: [{ text: '首页' }, { text: '分类' }, { text: '购物车' }, { text: '会员中心' }],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const result = await axios.get("/comment/list");
      this.listData = result.data;
      console.log(result.data);
    },
    back(){
      history.back()
    },
    pinj(){
      this.$router.push("/commentpinj")
    },
    shaid(){
      this.$router.push("/commentshaid")
    }
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
.choose {
  font-size: 1rem;
}
.shops {
  padding: 0.5rem 0rem;
  background-color: #f5f5f5;
}
.shops span {
  font-size: 0.6rem;
}
.oneshop {
  // position: relative;
  padding: 1rem;
  background-color: white;
  margin-top: 0.5rem;
}
.rate {
  display: flex;
  justify-content: space-between;
}
.btn {
  margin: 1rem 0.5rem 0rem 0.5rem;
  text-align: right;
  border-radius: 0.6rem;
  // position: absolute;
}
.btn1 {
  font-size: 1rem;
}
.title {
  font-size: 1rem;
}
</style>