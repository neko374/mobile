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
    <div style="display: flex">
      <div style="width: 22%">
        <van-sidebar v-model="activeKey">
          <a href="#one"><van-sidebar-item title="零食点心" /></a>
          <a href="#two"><van-sidebar-item title="酒水" /></a>
          <a href="#three"><van-sidebar-item title="新鲜水果" /></a>
          <a href="#four"><van-sidebar-item title="生活用品" /></a>
          <a href="#five"><van-sidebar-item title="体育用品" /></a>
          <a href="#six"><van-sidebar-item title="文具" /></a>
          <a href="#seven"><van-sidebar-item title="积分专区" /></a>
        </van-sidebar>
      </div>
      <div style="width: 78%; float: right">
        <router-link to="category">
          <div id="one">
            <div
              style="
                border-left: 6px solid blue;
                border-bottom: 2px solid gray;
                margin-top: 5%;
                padding: 5%;
              "
            >
              <h1>零食点心</h1>
            </div>
            <div class="shopl">
              <van-grid :column-num="3">
                <van-grid-item
                  v-for="item in lists"
                  :key="item.id"
                  :icon="item.image"
                  :text="item.name"
                />
              </van-grid>
            </div>
          </div>

          <div
            id="two"
            style="
              border-left: 6px solid red;
              border-bottom: 2px solid gray;
              margin-top: 5%;
              padding: 5%;
            "
          >
            <h1>酒水</h1>
          </div>
          <div class="shopl">
            <van-grid :column-num="3">
              <van-grid-item
                v-for="item in lists"
                :key="item.id"
                :icon="item.image"
                :text="item.name"
              />
            </van-grid>
          </div>
          <div
            id="three"
            style="
              border-left: 6px solid green;
              border-bottom: 2px solid gray;
              margin-top: 5%;
              padding: 5%;
            "
          >
            <h1>新鲜水果</h1>
          </div>
          <div class="shopl">
            <van-grid :column-num="3">
              <van-grid-item
                v-for="item in lists"
                :key="item.id"
                :icon="item.image"
                :text="item.name"
              />
            </van-grid>
          </div>
          <div
            id="four"
            style="
              border-left: 6px solid yellow;
              border-bottom: 2px solid gray;
              margin-top: 5%;
              padding: 5%;
            "
          >
            <h1>生活用品</h1>
          </div>
          <div class="shopl">
            <van-grid :column-num="3">
              <van-grid-item
                v-for="item in lists"
                :key="item.id"
                :icon="item.image"
                :text="item.name"
              />
            </van-grid>
          </div>
          <div
            id="five"
            style="
              border-left: 6px solid orange;
              border-bottom: 2px solid gray;
              margin-top: 5%;
              padding: 5%;
            "
          >
            <h1>体育用品</h1>
          </div>
          <div class="shopl">
            <van-grid :column-num="3">
              <van-grid-item
                v-for="item in lists"
                :key="item.id"
                :icon="item.image"
                :text="item.name"
              />
            </van-grid>
          </div>
          <div
            id="six"
            style="
              border-left: 6px solid pink;
              border-bottom: 2px solid gray;
              margin-top: 5%;
              padding: 5%;
            "
          >
            <h1>文具</h1>
          </div>
          <div class="shopl">
            <van-grid :column-num="3">
              <van-grid-item
                v-for="item in lists"
                :key="item.id"
                :icon="item.image"
                :text="item.name"
              />
            </van-grid>
          </div>
          <div
            id="seven"
            style="
              border-left: 6px solid gold;
              border-bottom: 2px solid gray;
              margin-top: 5%;
              padding: 5%;
            "
          >
            <h1>积分专区</h1>
          </div>
          <div class="shopl">
            <van-grid :column-num="3">
              <van-grid-item
                v-for="item in lists"
                :key="item.id"
                :icon="item.image"
                :text="item.name"
              />
            </van-grid></div
        ></router-link>
      </div>
    </div>
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
      value: "",
      activeKey: 0,
      lists: [],
      ruleForm: {
        id: "",
        name: "",
        image: "",
      },
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
  },
};
</script>

<style scoped>
body html {
  height: 100%;
  width: 100%;
}
.van-sidebar {
  position: fixed;
  top: 6%;
  z-index: 9;
}

form {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
}
</style>