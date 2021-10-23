<template>
  <div>
    <van-nav-bar title="商城公告" left-arrow @click-left="onClickLeft" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
      <van-swipe-item v-for="item in lists" :key="item.id"
        ><img :src="item.image" />
        <div class="sw">
          {{ item.title }}
        </div></van-swipe-item
      >
    </van-swipe>
    <van-list>
      <van-cell v-for="item in lists" :key="item.id">
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
    <navb></navb>
  </div>
</template>

<script>
import axios from "axios";
import navb from "../components/navb.vue";
export default {
  components: { navb },
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
        title: "",
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

.sw {
  width: 100%;
  height: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
}

.van-swipe-item {
  width: 100%;
  height: 12rem;
  position: relative;
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