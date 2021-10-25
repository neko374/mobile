<template>
  <div>
    <div class="head">
      <van-row gutter="20">
        <van-col span="7" offset="1" class="hz"
          ><router-link to="/useraddr">
            <van-icon name="arrow-left"
          /></router-link>
        </van-col>
        <van-col span="6" offset="2" class="hc">地址管理</van-col>
        <van-col span="3" offset="5" class="hr"
          ><van-icon name="weapp-nav"
        /></van-col>
      </van-row>
    </div>
    <div class="con">
      <van-cell-group inset>
        <van-field v-model="xq" label="请输入详情" placeholder="请输入详情" />
        <van-field
          v-model="tel"
          type="number"
          label="手机号"
          placeholder="手机号"
        />
        <van-field
          v-model="shengs"
          type="text"
          label="请输入省市"
          placeholder="请输入省市"
        />
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
    </div>
    <div class="bom">
      <div class="no1"></div>
      <div class="no2"></div>
      <div class="no3"></div>
    </div>
    <div class="bottom">
      <div class="del"><van-icon name="delete-o" />删除</div>
      <div class="checked">设为默认收货地址</div>
      <div class="bcgg">保存更改</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xq: "",
      tel: "",
      shengs: "",
      xiangxdz: "",
      dianzyj: "",
      yzbm: "",
    };
  },
  methods: {},
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
  padding: 0.4rem 0;
}

.bom {
  width: 100%;
  display: flex;
}
.bom .no1 {
  width: 33.3%;
  height: 0.04rem;
  background: green;
}
.bom .no2 {
  width: 33.3%;
  height: 0.04rem;
  background: skyblue;
}
.bom .no3 {
  width: 33.3%;
  height: 0.04rem;
  background: red;
}
.bottom {
  width: 100%;
  height: 2rem;
  background: #4aa3e6;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
}
.bottom .del {
  width: 20%;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.666667rem;
}
.bottom .checked {
  width: 40%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.666667rem;
  border-radius: 0.133333rem;
  border: 0.013333rem solid white;
  margin-top: 0.4rem;
}
.bottom .bcgg {
  width: 20%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: 0.133333rem;
  border: 0.013333rem solid white;
  margin-top: 0.4rem;
}
</style>