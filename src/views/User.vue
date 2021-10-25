<template>
  <div>
    <div class="vip_index_box">
      <div class="box">
        <van-row gutter="20">
          <van-col span="7" offset="1">
            <van-image
              round
              width="80"
              height="80"
              src="http://localhost:8080/images/pic01.jpg"
              class="v-img"
            />
          </van-col>
          <van-col span="8"
            ><div class="uname">用户名</div>
            <div class="huiy">(钻石会员)</div></van-col
          >
          <van-col span="4" offset="3"><div class="sz">设置</div></van-col>
        </van-row>
      </div>
      <div class="box1">
        <van-row gutter="20">
          <van-col span="6" offset="2"
            ><div class="imgcon">
              <van-image
                round
                width="30"
                height="30"
                src="http://localhost:8080/images/vip_img/vip_icon_sc.png"
                class="v-img"
              />
            </div>
            <div class="con1">我的收藏(13)</div></van-col
          >
          <van-col span="6" offset="2"
            ><div class="imgcon">
              <van-image
                round
                width="30"
                height="30"
                src="http://localhost:8080/images/vip_img/vip_icon_dd.png"
                class="v-img"
              />
            </div>
            <div class="con1">我的收藏(13)</div></van-col
          >
          <van-col span="6" offset="2"
            ><div class="imgcon">
              <van-image
                round
                width="30"
                height="30"
                src="http://localhost:8080/images/vip_img/vip_icon_pj.png"
                class="v-img"
              />
            </div>
            <div class="con1">我的收藏(13)</div></van-col
          >
        </van-row>
      </div>
    </div>
    <div class="box2">
      <van-row gutter="20">
        <van-col span="7" offset="1"
          ><div class="jife">我的积分:<span>333</span></div></van-col
        >
        <van-col span="9"></van-col>
        <van-col span="6" offset="1"
          ><div class="jfdh">
            <router-link tag="div" to="/about"
              >积分兑换<van-icon name="arrow"
            /></router-link></div
        ></van-col>
      </van-row>
    </div>
    <div class="box3">
      <van-row gutter="20">
        <van-col span="5" offset="2"
          ><div class="bdgl-img">
            <van-image
              round
              width="60"
              height="60"
              src="http://localhost:8080/images/vip_img/vip_icon05.png"
            />
          </div>
          <div class="bdgl">本地管理</div></van-col
        >
        <van-col span="5" offset="3"
          ><div class="bdgl-img">
            <van-image
              round
              width="60"
              height="60"
              src="http://localhost:8080/images/vip_img/vip_icon06.png"
            />
          </div>
          <div class="bdgl">退款/售后</div></van-col
        >
        <van-col span="5" offset="3"
          ><div class="bdgl-img">
            <van-image
              round
              width="60"
              height="60"
              src="http://localhost:8080/images/vip_img/vip_icon04.png"
            />
          </div>
          <div class="bdgl">我的留言</div></van-col
        >
      </van-row>
    </div>
    <div class="box4">
      <van-row gutter="20">
        <van-col span="8"></van-col>
        <van-col span="14"
          ><div class="dsdch">
            <span>剁手党的春天 </span><span> | </span><span> 门店查询</span>
          </div></van-col
        >
        <van-col span="1"></van-col>
      </van-row>
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

<style scoped>
.uname {
  font-size: 0.8rem;
  height: 1.2rem;
  line-height: 1.333333rem;
  text-align: center;
  color: white;
}
.huiy {
  height: 0.666667rem;
  font-size: 0.6rem;
  text-align: center;
  color: #ffe06a;
}
.sz {
  font-size: 0.7rem;
  height: 0.9rem;
  color: skyblue;
  border-radius: 0.533333rem;
  border: 0.013333rem solid grey;
  text-align: center;
  line-height: 0.9rem;
  margin-top: 0.4rem;
}
.imgcon {
  text-align: center;
}
.con1 {
  text-align: center;
  color: white;
}
.vip_index_box {
  background: #4aa3e6;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}
.box1 {
  margin-top: 1.066667rem;
}
.box2 {
  background: white;
  margin-top: 0.7rem;
  padding: 0.4rem 0;
}
.box2 .jife {
  color: #999999;
  font-size: 0.8rem;
}
.box2 span {
  color: red;
  font-size: 0.8rem;
}
.jfdh div {
  color: #999999;
  font-size: 0.8rem;
}
.box3 {
  margin-top: 2rem;
}
.bdgl {
  text-align: center;
  font-size: 0.7rem;
  margin-top: 0.266667rem;
  color: #333333;
}
.bdgl-img {
  text-align: center;
}
.box4 {
  margin-top: 2.133333rem;
}
.dsdch {
  color: #999999;
  font-size: 0.8rem;
}
</style>