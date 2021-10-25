<template>
  <div>
    <div class="head">
      <van-row gutter="20">
        <van-col span="7" offset="1" class="hz"
          ><van-icon name="arrow-left"
        /></van-col>
        <van-col span="6" offset="2" class="hc">地址管理</van-col>
        <van-col span="3" offset="5" class="hr"><van-icon name="weapp-nav" /></van-col>
      </van-row>
    </div>
    <div class="con">
    
      <van-cell-group inset>
        <van-field v-model="name" label="收货人姓名" placeholder="收货人姓名" />
        <van-field
          v-model="tel"
          type="number"
          label="手机号"
          placeholder="手机号（必填）"
        />
        <van-field v-model="xuex" type="text" label="学校" placeholder="学校" />
        <van-field
          v-model="xiangxdz"
          type="text"
          label="详细地址"
          placeholder="请输入详细地址"
        />
        <van-field
          v-model="dianzyj"
          type="text"
          label="电子邮件地址"
          placeholder="电子邮件地址"
        />
        <van-field
          v-model="yzbm"
          type="text"
          label="邮政编码"
          placeholder="邮政编码"
        />
      </van-cell-group>
      <div class="bom">
        <div class="no1"></div>
        <div class="no2"></div>
        <div class="no3"></div>
      </div>
    </div>
    <div class="btn"><button type="button">保存新地址</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tel: "",
      xuex: "",
      xiangxdz: "",
      dianzyj: "",
      yzbm: "",
    };
  },
};
</script>

<style scoped>
.body {
  background: #f1f1f1;
}
.head {
  padding: 0.4rem 0;
  border-bottom: 0.013333rem solid #dddddd;
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
.con {
  width: 100%;
  
  background: white;
  padding: 4rem 0 0 0;
}

.con .bom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.con .bom .no1 {
  width: 33.3%;
  height: 0.013333rem;
  background: red;
}
.con .bom .no2 {
  width: 33.3%;
  height: 0.013333rem;
  background: green;
}
.con .bom .no3 {
  width: 33.3%;
  height: 0.013333rem;
  background: blue;
}
.btn {
  width: 80%;
  height: 1.333333rem;
  margin: 0px auto;
  text-align: center;
  margin-top: 1.333333rem;
}
.btn button {
  width: 100%;
  height: 1.333333rem;
  margin: 0px auto;
  color: white;
  font-size: 0.533333rem;
  background: #4aa3e6;
  border-radius: 0.533333rem;
}
</style>