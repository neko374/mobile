<template>
  <div>
    <van-nav-bar title="商城公告" left-arrow @click-left="onClickLeft" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in lists" :key="index"
        ><img :src="item.image"
      /></van-swipe-item>
    </van-swipe>
    <van-list>
      <van-cell v-for="(item, index) in lists" :key="index">
        <router-link to="/NewsXq">
          <div class="lis">
            <div style="float: left">
              <p style="color: black">{{ item.title }}</p>
              <span style="color: gray">{{ item.time }}</span>
            </div>
            <div style="float: right">
              <img :src="item.image" />
            </div>
          </div>
        </router-link>
      </van-cell>
    </van-list>
    <van-pagination
      v-model="currentPage"
      :total-items="lists.length"
      :items-per-page="5"
      mode="simple"
    />
    <div style="height: 3rem"></div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="cluster">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" badge="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" dot>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    onClickLeft() {
      history.back();
    },
    async getData() {
      const result = await axios.get("/newsList");
      this.lists = result.data;
    },
  },
  data() {
    return {
      active: "",
      currentPage: 1,
      lists: [],
      ruleForm: {
        id: "",
        name: "",
        time: "",
        image: "",
      },
    };
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.van-swipe-item {
  width: 100%;
  height: 12rem;
}

.van-swipe-item img {
  width: 100%;
  height: 12rem;
}

.lis {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  font-size: 1rem;
  border-bottom: 1px gray solid;
  margin-top: 1rem;
  line-height: 1.2rem;
}

.lis img {
  width: 8rem;
  height: 4rem;
}
</style>