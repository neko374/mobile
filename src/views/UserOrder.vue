<template>
  <div>
    <header>
      <van-row>
        <van-col span="4">
          <van-icon name="arrow-left" @click="back"/>
        </van-col>
        <van-col span="16"> 我的订单 </van-col>
        <van-col span="4">
          <van-icon name="ellipsis" />
        </van-col>
      </van-row>
    </header>
    <div class="content" >
      <divxaf>
        <div>
        <van-card 
          num="2"
          price="645.00"
          desc="原味"
          title="千业吐司面包1Kg半切片三明治早餐蛋糕炼奶乳糕炼奶乳"
          class="goods-card"
          thumb="../assets/images/pic03.jpg"
        >
        </van-card>
        </div>
        <div class="total">
          共<span >1</span>件商品实付:<span class="totalprice">645.00</span>元
        </div>
        <div class="btnGroup">
          <van-button round type="info" size="small">退款</van-button>
          <van-button round type="info" size="small"  color="gray">已确认</van-button>
        </div>
      </div>
        <!--  -->
      <div >
        <van-card 
          num="1"
          price="645.00"
          desc="原味"
          title="千业吐司面包1Kg半切片三明治早餐蛋糕炼奶乳糕炼奶乳"
          class="goods-card"
          thumb="../assets/images/pic03.jpg"
        >
        </van-card>
        <div class="total">
          共<span >1</span>件商品实付:<span class="totalprice">645.00</span>元
        </div>
        <div class="btnGroup">
           <van-button round type="info" size="small">评价</van-button>
          <van-button round type="info" size="small">晒单</van-button>
          <van-button round type="info" size="small"  color="gray">已完成</van-button>
        </div>
      </div>
        <!--  -->
      <div>
        <van-card
          num="1"
          price="645.00"
          desc="原味"
          title="千业吐司面包1Kg半切片三明治早餐蛋糕炼奶乳糕炼奶乳"
          class="goods-card"
          thumb="../assets/images/pic03.jpg"
        >
        </van-card>
        <div class="total">
          共<span >1</span>件商品实付:<span class="totalprice">645.00</span>元
        </div>
        <div class="btnGroup">
          <van-button round type="info" size="small" @click="getData">取消订单</van-button>
         
        </div>
        <div class="pagination">
        <van-pagination v-model="currentPage" :page-count="2" mode="simple" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { SwipeCell, Card,Pagination  } from "vant";
export default {
  data(){
    return{
       currentPage: 1,
       goodsData:[],
    }
  },
  components: {
    [SwipeCell.name]: SwipeCell,
    [Card.name]: Card,
    [Pagination.name]: Pagination,
  },
  created() {
    this.getData();
  },
  methods:{
    async getData() {
      const result = await axios.get("/userOrder/list");
      console.log(result);
      this.goodsdata = result.data;
      console.log("goodsData:",this.goodsdata);
  },
  back(){
      history.back()
  }
  }
  
  
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
.goods-card {
  margin: 0;
  background-color: white;
}
.delete-button {
  height: 100%;
}
.total{
  border-top:1px dashed gray ;
  width: 100%;
  height: 2rem;
  background-color: white;
  line-height: 2rem;
  text-align: right;
}
.totalprice{
  color: red;
}
.btnGroup{
  width:100%;
  height: 3rem;
  border-top:1px dashed gray ;
  background-color: white;
  text-align: right;
  line-height: 3rem;
  margin-right: .27rem;
}
.goods-card{
  margin-top:.5rem
}
.pagination{
  width: 100%;
  height: 2.5rem;
  background-color: whitesmoke;
  margin-top:.3rem;
}

</style>