<template>
  <div>
    <van-grid :column-num="2">
      <div v-for="item in lists" :key="item.id">
        <router-link :to="{ path: '/goods', query: { id: item.id } }">
          <img :src="item.image" />
          <p>{{ item.name }}</p>
          <p style="color: red">￥{{ item.price }}</p>
        </router-link>
      </div>
    </van-grid>
  </div>
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
      active: "",
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
.van-grid {
  float: left;
}
.van-grid img {
  width: 10rem;
  height: 10rem;
}
</style>