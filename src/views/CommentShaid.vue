<template>
  <div>
    <van-row class="g-header">
      <van-col span="3" offset="1" class="u-icon" @click="back"
        ><van-icon name="arrow-left"
      /></van-col>
      <van-col span="16" class="texts">
        <span>商品晒单</span>
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

    <van-card
      num="2"
      price="205.00"
      desc="散装健康休闲食品农家米锅巴"
      title="益克孕妇零食小米锅巴小米煎饼手工"
      thumb="http://localhost:8080/images/big_5.jpg"
    />
    <div class="main">
      <span>标题：</span>
      <br />
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        class="textarea oneLine"
      />
      <br />
      <span>内容：</span>
      <br />
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        class="textarea"
      />
      <span>上传图片：</span>
      <br />
      <van-uploader :show-upload="true" upload-text="111">
        <van-button v-model="fileList" class="upload">上传文件</van-button>
      </van-uploader>
      <br>
      <span>匿名评价</span>
      <van-button type="info" class="btn">发表评价</van-button>
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
  Uploader,
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
    [Uploader.name]: Uploader,
    [Popover.name]: Popover,
  },
  data() {
    return {
      message: "",
      fileList: "",
      showPopover: false,
      actions: [{ text: '首页' }, { text: '分类' }, { text: '购物车' }, { text: '会员中心' }],
    };
  },
  methods:{
    back(){
      history.back()
    },
  }
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
.textarea {
  height: 6rem;
  margin: 1rem auto;
  background: #fafafa;
  border: 1px solid #dddddd;
}
.main {
  width: 90%;
  margin: 1rem auto;
}
.mian span {
  font-size: 1rem;
}
.oneLine {
  height: 2rem;
}
.upload {
  width: 5rem;
  height: 2rem;
  background: #fafafa;
  margin: 1rem 0;
}
.btn{
    display: block;
    width: 90%;
    border-radius: 1rem;
    margin: 1rem auto;
}
</style>