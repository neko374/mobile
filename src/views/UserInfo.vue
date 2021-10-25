<template>
  <div>
    <header>
      <van-row>
        <van-col span="4">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="16"> 设置 </van-col>
        <van-col span="4">
          <van-icon name="ellipsis" />
        </van-col>
      </van-row>
    </header>
    <div class="content">
        <van-button type="default" class="u-button" >账号安全</van-button>
    </div>
    <div class="foot">
        <van-button type="info" class="e-button">退出当前账号</van-button>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
        

    }
  },
  methods:{
    
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
.u-button{
    margin-top: .2rem;
    height: 2.5rem;
    width: 100%;
}
.e-button{
    height: 2.5rem;
    width: 100%;
    position: fixed;
    bottom: 0rem;
    width: 100%;
}
</style>