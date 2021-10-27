<template>
  <van-list>
    <van-cell v-for="item in lists" :key="item.id">
      <router-link :to="{ path: '/NewsXq', query: { id: item.id } }">
        <div class="lis">
          <div style="float: left">
            <img :src="item.image" />
          </div>
          <div style="float: left">
            <p style="color: black">{{ item.name }}</p>
            <span style="color: red">￥{{ item.price }}</span>
          </div>
        </div>
      </router-link>
    </van-cell>
  </van-list>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    async getData() {
      const result = await axios.get("/newsList");
      this.lists = result.data;
    },
  },
  data() {
    return {
      lists: [],
      ruleForm: {
        id: "",
        name: "",
        image: "",
        price: "",
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