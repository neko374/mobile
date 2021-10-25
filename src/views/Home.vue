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
      <van-col span="4" offset="1">
        <router-link to="/login" class="u-icon">
          登录
          <van-icon name="contact" class="c-icon" />
        </router-link>
      </van-col>
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
    <!-- 商城公告 -->
    <van-row class="v-gg">
      <van-col span="5">
        <van-image
          width="80"
          height="40"
          src="http://localhost:8080/images/news_tit.png"
        />
      </van-col>
      <van-col span="19">
        <van-notice-bar left-icon="volume-o" :scrollable="false">
          <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
          >
            <van-swipe-item
              >热烈祝贺颜文明体育贵阳市枣山路店盛大开业</van-swipe-item
            >
            <van-swipe-item
              >认真学习十九大精神，争取贯彻落实习总书记讲话</van-swipe-item
            >
            <van-swipe-item>董事长在员工大会上发表演讲！</van-swipe-item>
          </van-swipe>
        </van-notice-bar>
      </van-col>
    </van-row>
    <van-image width="100%" src="http://localhost:8080/images/bg_sj.jpg" />
    <!-- 热销品类 -->
    <div class="v-rx">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 50px' }"
      >
        热销品类
      </van-divider>
      <div class="v-xb">
        <van-image
          width="20%"
          src="http://localhost:8080/images/line_botm.jpg"
        />
      </div>
      <van-row>
        <van-col span="12">
          <van-swipe
            class="my-swipe1"
            :autoplay="3000"
            indicator-color="#ffe037"
          >
            <van-swipe-item>
              <van-image
                width="90%"
                src="http://localhost:8080/images/pic01.jpg"
              />
              <p style="color: #666">10支纳米牙刷软毛成人家用竹炭抑菌款</p>
              <p style="color: red">￥29.00</p>
            </van-swipe-item>
            <van-swipe-item>
              <van-image
                width="90%"
                src="http://localhost:8080/images/pic03.jpg"
              />
              <p style="color: #666">新品】康师傅金汤虾球面，营养健康新体验.</p>
              <p style="color: red">￥5.00</p>
            </van-swipe-item>
            <van-swipe-item>
              <van-image
                width="90%"
                src="http://localhost:8080/images/pic08.jpg"
              />
              <p style="color: #666">
                RIO锐澳鸡尾酒套装预调酒果酒洋酒经典275ml*24瓶整箱正品1517104正品
              </p>
              <p style="color: red">￥199.00</p>
            </van-swipe-item>
          </van-swipe>
        </van-col>
        <van-col span="12">
          <van-row>
            <van-col span="24">
              <van-image
                width="100%"
                height="100"
                src="http://localhost:8080/images/index_ad_pic(2).jpg"
              />
            </van-col>
          </van-row>
          <van-row>
            <van-col span="12">
              <van-image
                height="110"
                src="http://localhost:8080/images/index_ad_pic(3).jpg"
              />
            </van-col>
            <van-col span="12">
              <van-image
                height="110"
                src="http://localhost:8080/images/index_ad_pic(6).jpg"
              />
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <van-swipe
      style="margin-top: 1rem"
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item>
        <van-image
          width="100%"
          src="http://localhost:8080/images/ad_pic01.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          src="http://localhost:8080/images/ad_pic02.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          src="http://localhost:8080/images/ad_pic03.jpg"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 新品推荐 -->
    <div class="v-box">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 50px' }"
      >
        新品推荐
      </van-divider>
      <div class="v-xb">
        <van-image
          width="20%"
          src="http://localhost:8080/images/line_botm.jpg"
        />
      </div>
      <!-- 九宫格 -->
      <div>
        <van-grid :column-num="3" class="list-img">
          <van-grid-item v-for="item in gridData1" :key="item.id">
            <van-image :src="item.pic" lazy-load></van-image>
            <span>{{ item.title }}</span>
            <p style="color: red">{{ item.price }}</p>
          </van-grid-item>
          <van-button round class="v-btn">更多精品></van-button>
        </van-grid>
      </div>
    </div>
    <!--积分专区  -->
    <div class="v-rx">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 50px' }"
      >
        积分专区
      </van-divider>
      <div class="v-xb">
        <van-image
          width="20%"
          src="http://localhost:8080/images/line_botm.jpg"
        />
      </div>
      <div class="tu">
        <div>
          <van-image
            width="100"
            height="100"
            src="http://localhost:8080/images/pic01.jpg"
          />
          <p>日常用品</p>
          <p>￥199.00</p>
        </div>
        <div>
          <van-image
            width="100"
            height="100"
            src="http://localhost:8080/images/pic02.jpg"
          />
          <p>时尚数码</p>
          <p>￥199.00</p>
        </div>
        <div>
          <van-image
            width="100"
            height="100"
            src="http://localhost:8080/images/pic03.jpg"
          />
          <p>个护美妆</p>
          <p>￥199.00</p>
        </div>
        <div>
          <van-image
            width="100"
            height="100"
            src="http://localhost:8080/images/pic04.jpg"
          />
          <p>家居用品</p>
          <p>￥199.00</p>
        </div>
        <div>
          <van-image
            width="100"
            height="100"
            src="http://localhost:8080/images/pic05.jpg"
          />
          <p>家用电器</p>
          <p>￥199.00</p>
        </div>
        <div>
          <van-image
            width="100"
            height="100"
            src="http://localhost:8080/images/pic06.jpg"
          />
          <p>食品饮料</p>
          <p>￥199.00</p>
        </div>
        <div>
          <van-image
            width="100"
            height="100"
            src="http://localhost:8080/images/pic01.jpg"
          />
          <p>时尚数码</p>
          <p>￥199.00</p>
        </div>
        <div>
          <van-image
            width="100"
            height="100"
            src="http://localhost:8080/images/pic02.jpg"
          />
          <p>个护美妆</p>
          <p>￥199.00</p>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <van-swipe
      style="margin-top: 1rem"
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item>
        <van-image
          width="100%"
          src="http://localhost:8080/images/ad_pic01.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          src="http://localhost:8080/images/ad_pic02.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          src="http://localhost:8080/images/ad_pic03.jpg"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 酒水专区 -->
    <div class="v-zq">
      <van-tabs v-model="activeName1">
        <van-tab title="酒水专区" name="a">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典男鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="饮料专区" name="b">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典女鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="牛奶" name="c">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典男鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!--休闲零食  -->
    <div class="v-zq">
      <van-tabs v-model="activeName2">
        <van-tab title="休闲零食" name="a">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典男鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="新鲜水果" name="b">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典女鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="散装零食" name="c">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典男鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!--生活用品  -->
    <div class="v-zq">
      <van-tabs v-model="activeName3">
        <van-tab title="生活用品" name="a">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典男鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="学习文具" name="b">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典女鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="体育器材" name="c">
          <div>
            <van-grid :column-num="3" class="list-img">
              <van-grid-item v-for="item in gridData1" :key="item.id">
                <van-image :src="item.pic" lazy-load></van-image>
                <span>{{ item.title }}</span>
                <p style="color: red">{{ item.price }}</p>
              </van-grid-item>
              <van-button round class="v-btn">更多经典男鞋></van-button>
            </van-grid>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 精选推荐 -->
    <div class="v-box1">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 50px' }"
      >
        精选推荐
      </van-divider>
      <div class="v-xb">
        <van-image
          width="20%"
          src="http://localhost:8080/images/line_botm.jpg"
        />
      </div>
      <div>
        <van-grid :column-num="2" class="list-img">
          <van-grid-item v-for="item in gridData1" :key="item.id">
            <van-image :src="item.pic" lazy-load></van-image>
            <span>{{ item.title }}</span>
            <p style="color: red">{{ item.price }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <comment-foot></comment-foot> 
    <navb></navb>
  </div>
</template>

<script>
import CommentFoot from "../components/CommentFoot.vue";
import Navb from "../components/navb.vue";
export default {
  components: { CommentFoot, Navb },
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
      gridData1: [
        {
          id: 1,
          title: "10支纳米牙刷软毛成人家用竹炭抑菌款",
          pic: "http://localhost:8080/images/pic01.jpg",
          price: "￥29.00",
        },
        {
          id: 2,
          title: "日本进口食品丸京红豆铜锣烧310g蛋糕",
          pic: "http://localhost:8080/images/pic02.jpg",
          price: "￥299.00",
        },
        {
          id: 3,
          title: "康师傅红烧牛肉面康师傅红烧牛肉面",
          pic: "http://localhost:8080/images/pic03.jpg",
          price: "￥49.00",
        },
        {
          id: 4,
          title: "RIO锐澳鸡尾酒套装预调酒果酒洋酒经典275ml*24瓶",
          pic: "http://localhost:8080/images/pic04.jpg",
          price: "￥399.00",
        },
        {
          id: 5,
          title: "innisfree/悦诗风吟绿茶精萃保湿洁面乳",
          pic: "http://localhost:8080/images/pic05.jpg",
          price: "￥299.00",
        },
        {
          id: 6,
          title: "化妆品收纳盒桌面抽屉式办公室文具办公桌",
          pic: "http://localhost:8080/images/pic06.jpg",
          price: "￥199.00",
        },
      ],
      activeName1: "a",
      activeName2: "a",
      activeName3: "a",
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
  height: 14rem;
  text-align: center;
  // padding: 1rem;
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
.notice-swipe {
  height: 40px;
  line-height: 40px;
  color: #666;
}
.v-gg {
  margin-top: 0.5rem;
}
.v-rx {
  background: white;
}
.v-xb {
  margin-top: -1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}
.my-swipe1 .van-swipe-item {
  font-size: 0.7rem;
  text-align: center;
}
.v-box {
  overflow: hidden;
  background: white;
  height: 30rem;
}
.v-btn {
  margin: 1rem auto;
  width: 10rem;
  height: 1.7rem;
  color: white;
  background: blue;
}
.tu {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  overflow: scroll;
}
.tu div {
  display: inline-block;
  text-align: center;
  margin-left: 0.2rem;
}
.tu div > p {
  margin-top: 0.266667rem;
}
.v-zq {
  overflow: hidden;
  margin-top: 2rem;
  height: 28rem;
  background: white;
}
.v-box1{
  height: 40rem;
}
</style>