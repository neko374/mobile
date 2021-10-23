<template>
  <div>
    <van-row class="g-header">
      <van-col span="3" offset="1" class="u-icon">
        <van-icon name="arrow-left" />
      </van-col>
      <van-col span="16">
        <div>退款/换货/维修</div>
      </van-col>
	  <van-col span="4" class="u-icon">
        <van-icon name="ellipsis" />
      </van-col>
    </van-row>
	<ul>
    <li>
      <van-row class="g-phone">
		<van-col span="24">
			<div class="g-title">退款/退货/维修申请单号：2018072388476</div>
		</van-col>
	</van-row>
  <van-row class="m-box">
    <van-col span="4">
      <van-image src="images/big_5.jpg" />
    </van-col>
    <van-col span="15">
      <div class="m-name">澳益克孕妇零食小米锅巴小米煎饼手工散装健康休闲食品农家米锅巴</div>
      <div class="m-name">白黑色 40</div>
    </van-col>
    <van-col span="5">
      <div class="m-price">￥145.00</div>
      <div class="m-num">X2</div>
    </van-col>
  </van-row>
  <van-row class="m-box">
    <van-col span="12">
      <div class="m-name">原订单号：2018022388476</div>
    </van-col>
    <van-col span="12">
      <div class="m-tui">应退金额:<span class="m-price">￥290.00元</span></div>
      <div class="m-tui">退款(无需退货) - 已退款</div>
    </van-col>
  </van-row>
  <van-row class="m-box">
    <van-col span="12"> 
      <div class="m-name">2018-07-23 10:00:44</div>
    </van-col>
    <van-col span="12">
      <van-button type="info" class="m-btn">查看</van-button>
    </van-col>
  </van-row>
  <div class="solid"></div>
    </li>
    <li>
      <van-row class="g-phone">
		<van-col span="24">
			<div class="g-title">退款/退货/维修申请单号：2018072388476</div>
		</van-col>
	</van-row>
  <van-row class="m-box">
    <van-col span="4">
      <van-image src="images/pic01.jpg" />
    </van-col>
    <van-col span="15">
      <div class="m-name">澳益克孕妇零食小米锅巴小米煎饼手工散装健康休闲食品农家米锅巴</div>
      <div class="m-name">白黑色 40</div>
    </van-col>
    <van-col span="5">
      <div class="m-price">￥145.00</div>
      <div class="m-num">X2</div>
    </van-col>
  </van-row>
  <van-row class="m-box">
    <van-col span="12">
      <div class="m-name">原订单号：2018022388476</div>
    </van-col>
    <van-col span="12">
      <div class="m-tui">应退金额:<span class="m-price">￥290.00元</span></div>
      <div class="m-tui">退款(无需退货) - 已退款</div>
    </van-col>
  </van-row>
  <van-row class="m-box">
    <van-col span="12"> 
      <div class="m-name">2018-07-23 10:00:44</div>
    </van-col>
    <van-col span="12">
      <van-button type="info" class="m-btn">查看</van-button>
    </van-col>
  </van-row>
  <div class="solid"></div>
    </li>
    <li>
      <van-row class="g-phone">
		<van-col span="24">
			<div class="g-title">退款/退货/维修申请单号：2018072388476</div>
		</van-col>
	</van-row>
  <van-row class="m-box">
    <van-col span="4">
      <van-image src="images/pic01.jpg" />
    </van-col>
    <van-col span="15">
      <div class="m-name">澳益克孕妇零食小米锅巴小米煎饼手工散装健康休闲食品农家米锅巴</div>
      <div class="m-name">白黑色 40</div>
    </van-col>
    <van-col span="5">
      <div class="m-price">￥145.00</div>
      <div class="m-num">X2</div>
    </van-col>
  </van-row>
  <van-row class="m-box">
    <van-col span="12">
      <div class="m-name">原订单号：2018022388476</div>
    </van-col>
    <van-col span="12">
      <div class="m-tui">应退金额:<span class="m-price">￥290.00元</span></div>
      <div class="m-tui">退款(无需退货) - 已退款</div>
    </van-col>
  </van-row>
  <van-row class="m-box">
    <van-col span="12"> 
      <div class="m-name">2018-07-23 10:00:44</div>
    </van-col>
    <van-col span="12">
      <van-button type="info" class="m-btn" @click="CK">查看</van-button>
    </van-col>
  </van-row>
  <div class="solid"></div>
    </li>
  </ul>
  <van-pagination 
  total-items:3
  items-per-page:2
  v-model="currentPage" :page-count="12" mode="simple" />
  <comment-foot></comment-foot>
  </div>
</template>

<script>
import CommentFoot from '../components/CommentFoot.vue';
export default {
  components: { CommentFoot },
  data(){
    return{
      currentPage:1,
    }
  },
  methods:{
    CK(){
      this.$router.replace('/userbackorderck')
    }
  }
};
</script>

<style scoped>
.g-header {
  height: 3rem;
  background: #f5f5f5;
  color: black;
  line-height: 3rem;
  text-align: center;
}
.u-icon{
    font-size:1.5rem;
  }
  .g-phone{
	  font-size:.8rem;
	  padding:.3rem .5rem;
  }
  .g-title{
	  border-bottom:.1rem solid #666;
  }
  .m-box{
    padding:.3rem .5rem;
  }
  .m-name{
    font-size:.7rem;
    color:#666;
  }
  .m-price{
    text-align: right;
    color:red;
  }
  .m-num{
    text-align: right;
  }
  .m-tui{
    text-align:right;
    font-size:.7rem;
    color:#666;
  }
  .m-btn{
    margin-left:5.3rem;
    height:1.6rem;
    border-radius:.8rem;
  }
  .solid{
    width:100%;
    background:gainsboro;
    height:.3rem;
  }
</style>