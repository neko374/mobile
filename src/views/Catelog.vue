<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        action-text="分类"
        shape="round"
        maxlength="12"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      />
    </form>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="零食点心" />
      <van-sidebar-item title="酒水" />
      <van-sidebar-item title="新鲜水果" />
      <van-sidebar-item title="生活用品" />
      <van-sidebar-item title="体育用品" />
      <van-sidebar-item title="文具" />
      <van-sidebar-item title="积分专区" />
    </van-sidebar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
  },
};
</script>

<style>
</style>