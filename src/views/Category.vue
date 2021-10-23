<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        action-text="筛选"
        shape="round"
        maxlength="12"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      />
    </form>
    <div>
        
    </div>
    <navb></navb>
  </div>
</template>

<script>
import navb from "../components/navb.vue";
export default {
  components: { navb },
};
</script>

<style>
</style>