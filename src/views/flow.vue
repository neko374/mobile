<template>
  <div>
    <van-row>
      <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-row>
    <!-- 车 -->
    <van-row>
      <van-panel title="盛千辉便利店">
        <van-row class="box">
          <van-col span="18">
            <!-- 复选框 -->
            <van-checkbox v-model="checked">
              <van-card
                num="2"
                price="18.00"
                desc="一箱"
                title="港式菠萝包冰火菠萝油面包早餐糕点汉堡胚供奶茶店茶餐厅100克/个"
                thumb="http://localhost:8080/images/pic03.jpg"
              />
            </van-checkbox>
          </van-col>
          <!-- 步进器 -->
          <van-col span="6">
            <van-stepper
              v-model="value"
              theme="round"
              button-size="22"
              disable-input
              class="di"
            />
          </van-col>
        </van-row>

        <van-row class="box">
          <van-col span="18">
            <!-- 复选框 -->
            <van-checkbox v-model="checked">
              <van-card
                num="2"
                price="18.00"
                desc="一箱"
                title="港式菠萝包冰火菠萝油面包早餐糕点汉堡胚供奶茶店茶餐厅100克/个"
                thumb="http://localhost:8080/images/pic03.jpg"
              />
            </van-checkbox>
          </van-col>
          <!-- 步进器 -->
          <van-col span="6">
            <van-stepper
              v-model="value"
              theme="round"
              button-size="22"
              disable-input
              class="di"
            />
          </van-col>
        </van-row>
      </van-panel>
      <!-- 提交订单 -->
      <van-submit-bar :price="3050" button-text="去结算" class="foor" @click="gocar">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
      <navb></navb>
    </van-row>
  </div>
</template>

<script>
import Navb from "../components/navb.vue";
export default {
  components: { Navb },
  data() {
    return {
      checked: true,
      value: 1, //步进器
    };
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    //结算
     gocar(){
      this.$router.push({name:'Confirm'})
    },
  },
};
</script>

<style lang="less" scoped>
.foor{
  margin-bottom: 3rem;
}
.di {
  margin-top: 2rem;
}
.box {
  border-bottom: 1px dashed gray;
}
.van-card__price {
  display: inline-block;
  color: red;
  font-weight: 500;
  font-size: 12px;
}
.van-card {
  position: relative;
  box-sizing: border-box;
  padding: 8px 16px;
  color: #323233;
  font-size: 12px;
  background-color: white;
}
</style>
