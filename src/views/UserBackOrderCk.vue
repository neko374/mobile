<template>
  <div>
    <van-row class="g-header">
      <van-col span="3" offset="1" class="u-icon">
        <van-icon name="arrow-left" @click="goOff" />
      </van-col>
      <van-col span="16">
        <div>退款/换货/维修详情</div>
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
        <div>原订单号:</div>
        <div>商品名称:</div>
        <div>售后类型:</div>
      </van-col>
    </van-row>
    <van-row  class="m-set">
      <van-col class="m-box">
        <div>返回商品:</div>
        <div>数量:</div>
        <div>类型:</div>
        <div>处理状态:</div>
      </van-col>
    </van-row>
    <van-row>
      <van-col class="m-bor">
        <div class="m-title">快递信息（请填写您寄回商品的快递信息）</div>
      </van-col>
    </van-row>
    <van-row class="m-xlk">
      <van-col>
        <div class="m-gongsi">快递公司：</div>
        <div>
          <van-dropdown-menu active-color="#1989fa">
            <van-dropdown-item  v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="m-gongsi">快递运单号:</div>
        <div>
          <input class="m-inp" type="text">
        </div>
        <div>
          <van-button type="info" class="m-btn">确定</van-button>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col class="m-bor">
        <div class="m-title">留言/回复</div>
      </van-col>
    </van-row>
    <van-row class="m-liu">
      <van-col>
        <div v-for="item,index in tableData" :key="index">我说:{{item.title}}</div>
      </van-col>
    </van-row>
    <van-row class="m-liu">
      <van-col>
        <div>留言/回复内容：</div>
        <input type="text" v-model="message" class="m-inp2">
        <div>
          <van-button type="info" @click="submitForm" class="m-btn">回复</van-button>
        </div>
      </van-col>
    </van-row>
    <comment-foot></comment-foot>
    <navb></navb>
  </div>
</template>

<script>
import axios from "axios"
import Navb from '../components/navb.vue';
import CommentFoot from '../components/CommentFoot.vue';
export default {
  components: { Navb,CommentFoot },
  methods:{
    goOff(){
      this.$router.replace('/userbackorder');
    },
    liuyan(){
      this.list.push({
        id:this.list.lenght+1,
        title:this.message
      })
      this.message=""
    }
  },
  data() {
    return {
      tableData:[],
      message:"",
      list:[
        {id:1,title:"请尽快处理!"},
      ],
      value1: 0,
      option1: [
        { text: '--请选择快递公司--', value: 0 },
        { text: '门店自提', value: 1 },
        { text: '活动顺丰', value: 2 },
        { text: 'EMS国内邮政快递', value: 3 },
      ],
      showPopover: false,
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
    }
  },
  created(){
    this.getData();
  },
  methods:{
    goOff(){
      this.$router.replace('/userbackorder')
    },
    async getData(){
            const result = await axios.get("/news/list")
            this.tableData = result.data
            console.log(this.tableData);
        },
    async submitForm() {
                  const result = await axios.post("/news/add")
                  if(result.data.state==200){
                      this.$message.success(result.data.msg);
                      this.$emit("all");
                      this.win.show=false;
                  }
                  console.log(result);
      },
  }
}
</script>

<style scoped lang="less">
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
.m-xlk{
  padding:.3rem .5rem;
  .m-gongsi{
    font-size:.7rem;
    color:#666;
  }
  .m-inp{
    width:18rem;
    margin-top:.3rem;
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
.m-liu{
  padding:.3rem .5rem;
  div{
    font-size:.7rem;
    color:#666;
  }
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