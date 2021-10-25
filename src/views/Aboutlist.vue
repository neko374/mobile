<template>
  <div>
    <van-nav-bar title="关于我们" left-arrow />

    <div class="content">
      <h2>贵州中医学院大学分店</h2>
      <p>门店地址：贵阳市观山湖区北京西路27号</p>
      <p>联系电话：0851-86577898</p>
      <h2>贵州师范学院分店</h2>
      <p>门店地址：贵州师范学院27</p>
      <p>联系电话：0851-86577898</p>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Foot from "../components/Foot.vue";
export default {
  components: {
    Foot,
  },
};
</script>

<style lang="less" scoped>
.bab {
  min-height: 10rem;
}
.txt > p {
  text-align: center;
  line-height: 1.3rem;
}
.content {
  text-align: center;
  line-height: 1.3rem;
  min-height: 13rem;
  margin-top: 2rem;
  background: white;
}
</style>>
