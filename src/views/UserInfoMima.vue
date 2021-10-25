<template>
  <div>
    <header>
      <van-row>
        <van-col span="4">
          <van-icon name="arrow-left" @click="back"/>
        </van-col>
        <van-col span="16"> 账号安全 </van-col>
        <van-col span="4">
          <van-icon name="ellipsis" />
        </van-col>
      </van-row>
    </header>
    <div class="content">
      <van-form @submit="onSubmit" class="u-form">
        <van-field class="u-field"
          v-model="oldpassword"
          name="原密码"
          label="原密码"
          placeholder="请输入原密码"
          :rules="[{ required: true, message: '请填写原密码' }]"
        />
        <van-field class="u-field"
          v-model="password"
          name="新密码"
          label="新密码"
          placeholder="请输入新密码"
          :rules="[{ required: true, message: '请填写新密码' }]"
        />
        <van-field class="u-field"
          v-model="repassword"
          type="repassword"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请确认密码' }]"
        />
        <div class="u-button">
          <van-button type="info" class="u-button">确定修改</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldpassword:"",
      password: "",
      repassword: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    back(){
        history.back()
    }
  },
};
</script>

<style lang="less" scoped>
header {
  height: 3rem;
  background-color: whitesmoke;
  line-height: 3rem;
  text-align: center;
  font-size: 1rem;
}
.u-field{
    border-bottom:1px solid #1989FA ;
    width: 99%;
    margin: 0 auto;
}
.u-button {
  margin-top: 1rem;
  text-align: center;
  height: 2rem;
  font-size: 1rem;
  width: 100%;
}

</style>