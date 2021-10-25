<template>
  <div>
    <!-- 头部 -->
    <van-row class="v-header">
      <van-col span="8" offset="1"
        ><van-icon class="v-icon" name="arrow-left"
      /></van-col>
      <van-col span="8">会员登录</van-col>
      <van-col span="4" offset="2">
        <router-link to="/register" class="v-icon">免费注册</router-link>
      </van-col>
    </van-row>
    <!--  -->
    <div class="v-ctn">
      <van-image class="v-pic" src="http://localhost:8080/images/logo.png" />
      <van-form @submit="onSubmit">
        <div class="v-inp">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="手机号/用户名/邮箱"
            class="c-input"
            :rules="[{ required: true, message: '请填写手机号/用户名/邮箱' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            class="c-input"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >登录</van-button
            >
          </div>
        </div>
      </van-form>
      <van-col span="10" style="color: #999">自动登录</van-col>
      <van-col span="12" offset="1" style="color: #999">
        <router-link to="/forget" class="v-icon">
          忘记密码?点击找回</router-link
        >
      </van-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less" scoped>
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
.v-ctn {
  height: 35rem;
  background: white;
  text-align: center;
}
.v-pic {
  width: 13rem;
  height: 2.5rem;
  margin-top: 2rem;
}
.v-inp {
  width: 75%;
  margin: 2.2rem auto;
  .c-input {
    border-bottom: 1px solid rgb(148, 181, 230);
  }
}
.v-btn {
  width: 15rem;
  height: 2rem;
  border-radius: 0.4rem;
  margin-bottom: 0.5rem;
}
</style>