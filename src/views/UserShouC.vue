<template>
  <div>
    <div class="head">
      <van-row gutter="20">
        <van-col span="7" offset="1" class="hz"
          ><van-icon name="arrow-left"
        /></van-col>
        <van-col span="6" offset="2" class="hc">我的收藏</van-col>
        <van-col span="3" offset="5" class="hr"
          ><van-icon name="weapp-nav"
        /></van-col>
      </van-row>
    </div>

    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      商品收藏
    </van-divider>
    <div class="con">
      <van-card
        num="1"
        price="645.00"
        desc="澳益克孕妇零食小米锅巴小米煎饼手工散装健康休闲食品农家米锅巴"
        thumb="http://localhost:8080/images/pic01.jpg"
      />
      <van-card
        num="1"
        price="288.00"
        desc="澳益克孕妇零食小米锅巴小米煎饼手工散装健康休闲食品农家米锅巴"
        thumb="http://localhost:8080/images/pic02.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {};
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
}
</style>