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
        <van-popover
          v-model="showPopover"
          theme="dark"
          trigger="click"
          :actions="actions"
          placement="bottom-end"
        >
          <template #reference>
            <van-icon name="ellipsis" />
          </template>
        </van-popover>
      </van-col>
    </van-row>
    <van-row>
      <van-col class="m-bor">
        <div class="m-title">退款/换货/维修详情</div>
      </van-col>
    </van-row>
    <van-row  class="m-set">
      <van-col class="m-box">
        <div>订单编号:</div>
        <div>商品名称:</div>
        <div>商品属性:</div>
        <div>商品价格:</div>
        <div>购买数量:</div>
        <div>小计:</div>
      </van-col>
    </van-row>
    <van-row  class="m-tui">
        <van-col>
            <div>服务类型:</div>
            <van-checkbox v-model="checked">退款不退货</van-checkbox>
        </van-col>
    </van-row>
    <van-row  class="m-tui">
        <van-col>
            <div>退款提示:</div>
            <div>申请退款，将取消整笔订单款项，并将款项退回您的原账户中，如有需要请重新下单</div>
        </van-col>
    </van-row>
    <van-row  class="m-tui">
        <van-col>
            <div>问题描述:</div>
            <textarea class="inp" placeholder="请您如实填写申请原因及商品情况，字数在500字以内"></textarea>
        </van-col>
    </van-row>
    <van-row  class="m-tui">
        <van-col>
            <div>图片信息:</div>
            <van-uploader v-model="fileList" multiple />
        </van-col>
    </van-row>
    <van-row  class="m-tui">
        <van-col>
            <div>退款方式:</div>
            <van-checkbox-group v-model="result" direction="horizontal">
                <van-checkbox name="a">退款至账户余额</van-checkbox>
                <van-checkbox name="b">原支付方式返回</van-checkbox>
            </van-checkbox-group>
            <div>如为现金支付，将退款至您的账户或银行卡</div>
        </van-col>
    </van-row>
    <van-row  class="m-liu">
        <van-col>
            <div>我要留言:</div>
            <input type="text" class="m-inp2">
            <van-button type="info"  class="m-btn">确认提交</van-button>
        </van-col>
    </van-row>
    <comment-foot></comment-foot>
    <navb></navb>
  </div>
</template>

<script>
import CommentFoot from '../components/CommentFoot.vue';
import Navb from '../components/navb.vue';
export default {
  components: { CommentFoot, Navb },
    data() {
        return {
        showPopover: false,
        actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
        checked: true,
        result: [],
        fileList: [
      ],
        }
  }
};
</script>

<style lang="less" scoped>
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
.m-bor{
  padding:.3rem .5rem;
}
.m-title{
  color:skyblue;
  border-bottom:1px solid skyblue;
  font-size:.8rem;
}
.m-set{
  padding:.3rem .5rem;
}
.m-box{
  background:gainsboro;
  width:100%;
  div{
    font-size:.7rem;
    color:#666;
    padding:.2rem 0;
  }
}
.m-tui{
  padding:.3rem .5rem;
  font-size:.7rem; 
  border-bottom:.1rem solid gainsboro;
  div{
      color:#666;
      padding:.2rem 0 ;
  }
  .inp{
    width:18rem;
    height:4rem;
    background:gainsboro;
    border:0 none;
    border-radius:.3rem;
  }
}
.m-liu{
    padding:.3rem .5rem;
  font-size:.7rem; 
  .m-inp2{
    width:18rem;
    margin-top:.3rem;
    height:3rem;
    border:1px solid skyblue;
    border-radius:.3rem;
  }
  .m-btn{
    width:18.3rem;
    border-radius:.3rem;
    height:1.7rem;
    margin-top:.4rem;
  }
}
</style>