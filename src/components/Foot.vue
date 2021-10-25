<template>
  <div>
      <van-grid direction="horizontal" :column-num="3" class="mdcx">
      <van-grid-item text="登录" />
      <van-grid-item text="注册" />
      <van-grid-item text="门店查询" />
    </van-grid>

    <van-grid direction="horizontal" :column-num="4" class="aboutus">
      <van-grid-item text="">
        <span>关于我们<van-icon name="arrow" color="yellow" /></span>
      </van-grid-item>
      <van-grid-item text="">
        <span>购物指南<van-icon name="arrow" color="yellow" /></span>
      </van-grid-item>
      <van-grid-item text="">
        <span>支付方式<van-icon name="arrow" color="yellow" /></span>
      </van-grid-item>
      <van-grid-item text="">
        <span>生活服务<van-icon name="arrow" color="yellow" /></span>
      </van-grid-item>
    </van-grid>
    <div class="txt">
      <p>&copy; 2019 XX公司&nbsp;&nbsp;ICP备XXXXXXXX号</p>
      <p>全国统一服务热线：400-888-8888</p>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.txt{
    background: white;
}
.txt > p {
  text-align: center;
  line-height: 1.3rem;
  color: darkgrey;
}

</style>