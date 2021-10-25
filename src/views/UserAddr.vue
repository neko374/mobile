<template>
  <div>
    <div class="head">
      <van-row gutter="20">
        <van-col span="7" offset="1" class="hz"
          ><van-icon name="arrow-left"
        /></van-col>
        <van-col span="6" offset="2" class="hc">地址管理</van-col>
        <van-col span="3" offset="5" class="hr"
          ><van-icon name="weapp-nav"
        /></van-col>
      </van-row>
    </div>
    <div class="box">
      <router-link to="/useraddrdizhi">
        <van-row gutter="20" class="con">
          <van-col span="13" offset="1"
            ><div class="z1">剁手党的春天</div>
            <div class="z2">贵州大学男生6号宿舍806号</div></van-col
          >
          <van-col span="3" offset="7"
            ><div class="check">
              <van-checkbox v-model="checked"></van-checkbox></div
          ></van-col> </van-row
      ></router-link>
      <router-link to="/useraddrdizhi">
        <van-row gutter="20" class="con1">
          <van-col span="13" offset="1"
            ><div class="z1">剁手党的春天</div>
            <div class="z2">贵州大学男生6号宿舍806号</div></van-col
          >
          <van-col span="3" offset="7"
            ><div class="z3"><van-icon name="arrow" /></div
          ></van-col> </van-row
      ></router-link>
    </div>
    <router-link to="/useraddrnew">
      <div class="btn">
        <van-row>
          <van-col span="4"></van-col>
          <van-col span="16"
            ><van-button type="primary" size="large" class="btns"
              >添加新地址</van-button
            ></van-col
          >
          <van-col span="4"></van-col>
        </van-row></div
    ></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style scoped>
.head {
  padding: 0.4rem 0;
}
.hz {
  color: #9b9b9b;
  font-size: 1rem;
}
.hc {
  color: #333333;
  font-size: 1rem;
  line-height: 1.2rem;
}
.hr {
  color: #777777;
  font-size: 1rem;
}
.z1 {
  color: yellow;
  font-size: 0.933333rem;
  height: 1.066667rem;
  line-height: 1.066667rem;
}
.z2 {
  color: yellow;
  font-size: 0.8rem;
  height: 1.066667rem;
  line-height: 1.066667rem;
}
body {
  background: #f1f1f1;
}
.con {
  background: #4aa3e6;
  padding: 0.4rem 0;
}
.con1 {
  padding: 0.4rem 0;
}
.check {
  height: 1.066667rem;
  margin-top: 0.8rem;
}
.z3 {
  color: #83c0ee;
  font-size: 0.8rem;
  height: 1.066667rem;
  margin-top: 0.8rem;
}
.box {
  border-bottom: 0.013333rem solid #ebebeb;
  padding: 0.666667rem 0;
}
.btns {
  border-radius: 0.266667rem;
}
</style>