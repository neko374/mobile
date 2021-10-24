<template>
  <div>
    <van-row class="g-header">
      <van-col span="3" offset="1" class="u-icon">
        <van-icon name="arrow-left" />
      </van-col>
      <van-col span="16">
        <div>我的留言</div>
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
    <div class="b-box">
        <van-row class="m-detail">
            <van-col>
                <div class="m-top">
                    <span>留言:饼干很好吃</span>
                    <span class="time">time</span>
                </div>
            </van-col>
        </van-row>
        <van-row class="m-liu">
            <van-col>
                <div>很多内容</div>
            </van-col>
        </van-row>
    </div>
    <div class="b-box">
        <van-row class="m-detail">
            <van-col>
                <div class="m-top">
                    <span>留言:饼干很好吃</span>
                    <span class="time">time</span>
                </div>
            </van-col>
        </van-row>
        <van-row class="m-liu">
            <van-col>
                <div>很多内容</div>
            </van-col>
        </van-row>
    </div>
    <div>
        <van-pagination 
        :items-per-page="3"
        v-model="currentPage" 
        :page-count="12" 
        mode="simple" 
        />
    </div>
    <van-row>
      <van-col class="m-bor">
        <div class="m-title">留言类型</div>
      </van-col>
    </van-row>
    <van-row class="dan">
        <van-col>
        <div>
            <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1">留言</van-radio>
                <van-radio name="2">投诉</van-radio>
                <van-radio name="3">询问</van-radio>
                <van-radio name="4">售后</van-radio>
                <van-radio name="5">求购</van-radio>
            </van-radio-group>
        </div>
        </van-col>
    </van-row>
    <van-row>
      <van-col class="m-bor">
        <div class="m-title">留言主题</div>
      </van-col>
    </van-row>
    <van-row>
      <van-col class="m-bor">
        <input type="text" class="m-inp">
      </van-col>
    </van-row>
    <van-row>
      <van-col class="m-bor">
        <div class="m-title">留言内容</div>
      </van-col>
    </van-row>
    <van-row>
      <van-col class="m-bor">
        <input type="text" class="m-inp2">
        <van-button type="info"  class="m-btn">提交留言</van-button>
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
    data(){
        return{
            radio: '1',
            currentPage: 1,
            showPopover: false,
            actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
        }
    },
    methods:{
        liuyan(){
            
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
.m-detail{
    background:gainsboro;
    padding:.3rem .5rem;
    div{
        font-size:.7rem;
        color: #666;
    }
    .m-top{
        width:17rem;
    }
}
.m-liu{
    padding:.3rem .5rem;
    font-size:.7rem;
    color: #666;
    div{
        width:100%;
    }
}
.b-box{
    margin-top:.5rem;
}
.m-bor{
  padding:.3rem .5rem;
.m-inp{
    width:18rem;
    margin-top:.3rem;
    border:1px solid skyblue;
    border-radius:.3rem;
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
.m-title{
  color:skyblue;
  border-bottom:1px solid skyblue;
  font-size:.8rem;
}
.dan{
  padding:.3rem .5rem;
    font-size:.6rem;
}
</style>