<template>
  <div class="home">
    <!-- 头部 -->
    <van-row class="g-header">
      <van-col span="4" offset="1" class="u-icon">
        <van-image class="v-logo" src="http://localhost:8080/images/logo.png" />
      </van-col>
      <van-col span="12" offset="2">
        <div class="m-search">
          <input type="text" class="u-input" placeholder="零食..." />
        </div>
      </van-col>
      <van-col span="4" offset="1" class="u-icon"
        >登录<van-icon name="contact" class="c-icon"
      /></van-col>
    </van-row>
    <!-- 轮播图 -->
    <van-row span="24">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image
            src="http://localhost:8080/images/banner.jpg"
            lazy-load
            class="u-banner"
          ></van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            src="http://localhost:8080/images/banner01.jpg"
            lazy-load
            class="u-banner"
          ></van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            src="http://localhost:8080/images/banner.jpg"
            lazy-load
            class="u-banner"
          ></van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            src="http://localhost:8080/images/banner01.jpg"
            lazy-load
            class="u-banner"
          ></van-image>
        </van-swipe-item>
      </van-swipe>
    </van-row>
    <!-- 九宫 -->
    <van-row span="24">
      <van-swipe class="my-swipe" indicator-color="orange">
        <van-swipe-item>
          <van-image>
            <van-grid class="list-img">
              <van-grid-item v-for="item in gridData" :key="item.id">
                <router-link :to="'//' + item.id">
                  <van-image
                    class="list-img-pic"
                    :src="item.pic"
                    lazy-load
                  ></van-image>
                  <span>{{ item.title }}</span>
                </router-link>
              </van-grid-item>
            </van-grid>
          </van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image>
            <van-grid class="list-img">
              <van-grid-item v-for="item in gridData" :key="item.id">
                <router-link :to="'//' + item.id">
                  <van-image
                    class="list-img-pic"
                    :src="item.pic"
                    lazy-load
                  ></van-image>
                  <span>{{ item.title }}</span>
                </router-link>
              </van-grid-item>
            </van-grid>
          </van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image>
            <van-grid class="list-img">
              <van-grid-item v-for="item in gridData" :key="item.id">
                <router-link :to="'//' + item.id">
                  <van-image
                    class="list-img-pic"
                    :src="item.pic"
                    lazy-load
                  ></van-image>
                  <span>{{ item.title }}</span>
                </router-link>
              </van-grid-item>
            </van-grid>
          </van-image>
        </van-swipe-item>
      </van-swipe>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      gridData: [
        {
          id: 1,
          title: "饮料饮品",
          pic: "http://localhost:8080/images/nav_icon01.png",
          descp: "",
          price: "18",
        },
        {
          id: 2,
          title: "休闲零食",
          pic: "http://localhost:8080/images/nav_icon02.png",
          descp: "",
          price: "18",
        },
        {
          id: 3,
          title: "新鲜水果",
          pic: "http://localhost:8080/images/nav_icon03.png",
          descp: "",
          price: "18",
        },
        {
          id: 4,
          title: "散称零食",
          pic: "http://localhost:8080/images/nav_icon04.png",
          descp: "",
          price: "18",
        },
        {
          id: 5,
          title: "方便面",
          pic: "http://localhost:8080/images/nav_icon05.png",
          descp: "",
          price: "18",
        },
        {
          id: 6,
          title: "酒水专区",
          pic: "http://localhost:8080/images/nav_icon06.png",
          descp: "",
          price: "18",
        },
        {
          id: 7,
          title: "冲调食品",
          pic: "http://localhost:8080/images/nav_icon07.png",
          descp: "",
          price: "18",
        },
        {
          id: 8,
          title: "牛奶",
          pic: "http://localhost:8080/images/nav_icon08.png",
          descp: "",
          price: "18",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.g-header {
  position: fixed;
  height: 2.8rem;
  line-height: 3rem;
  z-index: 10;
  background: rgba(182, 179, 179, 0.5);
  font-size: 0.8rem;
}
.v-logo {
  width: 4.5rem;
}
.m-search {
  height: 2rem;
  width: 15rem;
  .u-input {
    height: 1.8rem;
    width: 10rem;
    border-radius: 2rem;
    padding-left: 0.5rem;
    box-sizing: border-box;
    font-size: 0.8rem;
  }
}
.c-icon {
  width: 1rem;
  color: white;
}
.u-icon {
  color: white;
}
.u-banner {
  width: 100%;
  height: 11rem;
}
.list-img {
  text-align: center;
  padding: 1rem;
  margin: 0 auto;
  background: white;
  span {
    font-size: 0.6rem;
    color: rgb(177, 169, 169);
  }
}
.list-img .list-img-pic {
  padding: 0.5rem;
}
</style>