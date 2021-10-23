<template>
  <div>
    <!-- 头部 -->
    <van-row class="v-header">
      <van-col span="8" offset="1"
        ><van-icon class="v-icon" name="arrow-left"
      /></van-col>
      <van-col span="8">找回密码</van-col>
      <van-col span="4" offset="2" class="v-icon">
        <router-link to="/login" class="v-icon"> 账户登录</router-link>
      </van-col>
    </van-row>
    <div class="v-ctn">
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
            v-model="code"
            type="code"
            name="验证码"
            label="验证码"
            placeholder="验证码"
            class="c-input"
            :rules="[{ required: true, message: '请填写验证码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >下一步</van-button
            >
          </div>
        </div>
      </van-form>
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
      code: "",
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
.v-inp {
  width: 75%;
  margin: 0 auto;
  .c-input {
    border-bottom: 1px solid rgb(148, 181, 230);
  }
}
</style>