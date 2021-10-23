<template>
  <div>
    <header>
      <van-row>
        <van-col span="4">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="16"> 账号信息 </van-col>
        <van-col span="4">
          <van-icon name="ellipsis" />
        </van-col>
      </van-row>
    </header>
    <div class="content">
      <van-form @submit="onSubmit" class="u-form">
        <van-field class="u-field"
          v-model="username"
          name="用户名称"
          label="用户名称"
          placeholder=""
          :rules="[{ required: true, message: '请填写用户名称' }]"
        />
        <van-field class="u-field"
          v-model="birth"
          name="出生日期"
          label="出生日期"
          placeholder=""
          :rules="[{ required: true, message: '请填写出生日期' }]"
        />
         <van-field class="u-field"
          v-model="sex"
          name="性别"
          label="性别"
          placeholder=""
          :rules="[{ required: true, message: '请填写出生日期' }]"
        />
         <van-field class="u-field"
          v-model="email"
          name="邮箱"
          label="邮箱"
          placeholder=""
          :rules="[{ required: true, message: '请填写出生日期' }]"
        />
        <div class="u-button">
          <van-button type="info" class="u-button">确定修改</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { DatetimePicker } from "vant";
import { RadioGroup, Radio } from "vant";
export default {
  data() {
    return {
      radio: '1',
    };
  },
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
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