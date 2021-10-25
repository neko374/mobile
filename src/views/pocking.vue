<template>
  <div>
    <van-row>
    <van-nav-bar title="送货上门" left-text="返回" left-arrow @click-left="onClickLeft">
  <template #right>
    <van-icon name="ellipsis" />
  </template>
</van-nav-bar>
    </van-row>
    <van-row class="box">
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择所在地区"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
    </van-row>
    <van-row>
        <div class="qy">能配送区域</div>
        <div class="con">该区域不能送货</div>
    </van-row>
  </div>
</template>

<script>
import { Cascader,Popup ,Field  } from "vant";
export default {
  components: {
    [Cascader.name]: Cascader,
    [Popup.name]: Popup,
    [Field.name]: Field,
  },
  data() {
    return {
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
            onClickLeft() {
     this.$router.go(-1)
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
  },
};
</script>

<style lang="less" scoped>
.box{
    border-bottom: 1px solid red;
}
.qy{
    width: 100%;
    font-size: .7rem;
    border-bottom: 1px solid red;
    height: 44px;
    line-height: 44px;
    text-indent: .8rem;
    color: #646566;
}
.con{
    text-align: center;
    font-size: .5rem;
}
</style>>
