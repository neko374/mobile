<template>
  <div>
    <van-grid :column-num="2">
      <van-grid-item
        v-for="item in lists"
        :key="item.id"
        :icon="item.image"
        :text="item.price"
      />
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
        cname: "",
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
</style>