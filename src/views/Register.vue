<template>
  <div>
    <!-- 头部 -->
    <van-row class="v-header">
      <van-col span="8" offset="1"
        ><van-icon class="v-icon" name="arrow-left"
      /></van-col>
      <van-col span="8">会员注册</van-col>
      <van-col span="4" offset="2" class="v-icon">
        <router-link to="/login" class="v-icon"> 账户登录</router-link>
      </van-col>
    </van-row>
    <div class="v-rgs">
      <div class="v-ctn">
        <van-tabs v-model="active">
          <van-tab title="手机注册">
            <van-form @submit="onSubmit">
              <van-field
                v-model="username"
                name="手机号"
                label="手机号"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
              />
              <van-field
                v-model="psd"
                type="psd"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
              />
              <van-field
                v-model="psdone"
                type="psdone"
                name="密码"
                label="确认密码"
                placeholder="请确认密码"
                :rules="[{ required: true, message: '请填写确认密码' }]"
              />
              <van-field
                v-model="phcode"
                type="phcode"
                name="验证码"
                label="手机验证码"
                placeholder="请输入手机验证码"
                :rules="[{ required: true, message: '请填写验证码' }]"
              />
              <div style="margin: 1rem 1rem auto;">
                我已看过并接受
                <span style="color: blue">《用户协议》</span>
              </div>
              <div style="margin: 16px">
                <van-button round block type="info" native-type="submit"
                  >注册</van-button
                >
              </div>
            </van-form>
          </van-tab>
          <van-tab title="邮箱注册"
            ><van-form @submit="onSubmit1">
              <van-field
                v-model="username1"
                name="邮箱"
                label="邮箱"
                placeholder="请输入邮箱"
                :rules="[{ required: true, message: '请填写邮箱' }]"
              />
              <van-field
                v-model="psd"
                type="psd"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
              />
              <van-field
                v-model="psdone"
                type="psdone"
                name="密码"
                label="确认密码"
                placeholder="请确认密码"
                :rules="[{ required: true, message: '请填写确认密码' }]"
              />
              <van-field
                v-model="code"
                type="code"
                name="验证码"
                label="邮箱验证码"
                placeholder="请输入邮箱验证码"
                :rules="[{ required: true, message: '请填写验证码' }]"
              />
              <div style="margin: 1rem 1rem auto;">
                我已看过并接受
                <span style="color: blue">《用户协议》</span>
              </div>
              <div style="margin: 16px">
                <van-button round block type="info" native-type="submit"
                  >注册</van-button
                >
              </div>
            </van-form></van-tab
          >
        </van-tabs>
      </div>
    <comment-foot></comment-foot>
    <navb></navb>
    </div>
  </div>
</template>

<script>
import CommentFoot from '../components/CommentFoot.vue';
import Navb from '../components/navb.vue';
export default {
  components: { CommentFoot, Navb },
  data() {
    return {
      username: "",
      username1: "",
      psd: "",
      psdone: "",
      phcode:"",
      code: "",
      active: 2,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onSubmit1(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less" scoped>
.v-rgs {
  height: 30rem;
  background: white;
}
.v-ctn {
  width: 80%;
  margin: 0 auto;
   
}
.v-header {
  height: 2.8rem;
  font-size: 1rem;
  line-height: 2.8rem;
  background: whitesmoke;
  border: #ddd solid 1px;
}
.v-icon {
  color: rgb(168, 163, 163);
  font-size: 0.4rem;
}
</style>