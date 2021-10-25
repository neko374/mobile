<template>
  <div>
    <header>
      <van-row>
        <van-col span="4">
          <van-icon name="arrow-left" @click="back"/>
        </van-col>
        <van-col span="16"> 设置 </van-col>
        <van-col span="4">
          <van-icon name="ellipsis" />
        </van-col>
      </van-row>
    </header>
    <div class="content">
        <router-link :to="{path:'userinfoperson'}">
        <div class="userinfoperson">
          <div class="icon">
            <img src="../assets/images/pic01.jpg" alt="">
          </div>
          <p class="username">剁手党的春天</p>
          <p class="grade">钻石会员</p>
          <!-- <van-icon name="arrow" class="arrow"/> -->
        </div>
        </router-link>
        <router-link :to="{path:'userinfomima'}">
        <div class="usersafe">
          <span>
            账号安全
          </span>
          </div>
        </router-link>
    </div>
    <div class="foot">
        <van-button type="info" class="e-button">退出当前账号</van-button>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  data(){
    return{
        

    }
  },
  components: {
    [Icon.name]: Icon,
  },
  methods:{
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
.userinfoperson{
  width: 100%;
  height: 4rem;
  background-color: white;
}
.icon img{
  width: 3rem;
  height: 3rem;
  margin-top: .5rem;
  border-radius: 50%;
  margin-left: 1rem;
}
.username{
  font-size:.8rem ;
  margin-left: 5rem;
  margin-top: -2.5rem;
  color: skyblue;
}
.grade{
  font-size:.7rem ;
  margin-left: 5rem;
  margin-top: 1rem;
  color: gray;
}

.usersafe{
  width: 100%;
  height: 3rem;
  margin-top: .27rem;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  font-size: 1rem;
  line-height: 3rem;
  background-color: white;
}
.usersafe span{ 
 color: gray;
  margin-left:1rem;
}
.e-button{
    height: 2.5rem;
    width: 100%;
    position: fixed;
    bottom: 0rem;
    width: 100%;
}
</style>