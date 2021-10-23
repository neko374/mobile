<template>
  <div class="headerabout">
    <van-nav-bar title="关于我们" left-arrow />
    <van-cell-group class="gscx">
      <van-cell title="公司简介" is-link url="/vant/mobile.html" />
      <van-cell title="门店查询" is-link url="/vant/mobile.html" />
      <van-cell title="联系我们" class="bab" is-link url="/vant/mobile.html" />
    </van-cell-group>
  
    <foot></foot>
  </div>
</template>

<script>
import Foot from "../components/Foot.vue"
export default { components:{
Foot
}};
</script>

<style lang="less" scoped>
.headerabout{
  background: white;
}
.bab {
  min-height: 10rem;
}
.txt > p {
  text-align: center;
  line-height: 1.3rem;
  color: darkgrey;
}
</style>>
