<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchname"
        show-action
        action-text="筛选"
        shape="round"
        maxlength="12"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      />
    </form>
    <div class="bar">
      <router-link
        :class="{ active: idx === 0 }"
        to="/category/zh"
        @click.native="changeIdx(0)"
        >综合</router-link
      >
      <router-link
        :class="{ active: idx === 1 }"
        to="/category/xl"
        @click.native="changeIdx(1)"
        >销量</router-link
      >
      <router-link
        :class="{ active: idx === 2 }"
        to="/category/jg"
        @click.native="changeIdx(2)"
        >价格</router-link
      >
      <router-link
        :class="{ active: idx === 3 }"
        to="/category/list"
        @click.native="changeIdx(3)"
        ><van-icon name="bars" color="blue"
      /></router-link>
    </div>
    <div><router-view /></div>
    <navb></navb>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
import navb from "../components/navb.vue";
export default {
  components: { navb },
  data() {
    return {
      activeKey: 0,
      lists: [],
      searchname: "",
      filterData: [],
      ruleForm: {
        id: "",
        name: "",
        image: "",
      },
      idx: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    async getData() {
      const result = await axios.get("/newsList");
      this.lists = result.data;
    },
    changeIdx(i) {
      this.idx = i;
    },
  },
  watch: {
    searchname(val) {
      this.filterData = [];
      let flag = false;
      for (let i = 0; i < this.lists.length; i++) {
        if (this.lists[i].name.includes(val)) {
          this.filterData.push(this.lists[i]);
          flag = true;
        }
      }
      if (flag) {
        this.lists = this.filterData;
      } else {
        this.lists = [];
      }
      if (val === "") {
        this.getData();
      }
    },
  },
};
</script>

<style scoped>
form {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}
.bar {
  width: 100%;
  background: white;
  margin-top: 54px;
  display: flex;
  justify-content: space-evenly;
  float: left;
  font-size: 0.8rem;
  padding: 0.6rem 0;
  line-height: 1rem;
  z-index: 9;
}
.router-link {
  color: black;
}
.active {
  box-sizing: border-box;
  padding: 0 0.6rem;
  background: skyblue;
  color: white;
  border-radius: 0.6rem;
  line-height: 1rem;
}
</style>