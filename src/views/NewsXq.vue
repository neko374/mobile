<template>
  <div>
    <van-nav-bar title="大新闻" left-arrow @click-left="onClickLeft" />
    <div style="margin: 2rem 0.8rem">
      <p style="font-size: 1.1rem; line-height: 1.6rem">
        千辉假前狂欢活动，全场5折起步，老同学更优惠
      </p>
      <br />
      <span style="color: gray">时间：<em>2018-07-29</em> 作者：千辉超市</span
      ><br />
      <span style="line-height: 1.2rem; font-size: 0.8rem; font-weight: 300"
        >文案之道，博大精深，精髓在于创造。有人说，文案有七种境界，从“喊口号、唱跑调”的菜鸟级到思想升华、返璞归真的文案大师。从最开始的空无一物精进到以策略思想引导写作再登顶用最普通的语言精准表达不普通的创意，这个过程需要文案人不断的积累、求索、蜕变直至从喧哗鼎沸回归本真。</span
      >
      <img src="../assets/images/web/newspic01.jpg" style="width: 100%" />
      <span style="line-height: 1.2rem; font-size: 0.8rem; font-weight: 300"
        >或许很多人认为，一个好的广告必然是文案非凡、语言牛叉、设计炫美的，但当真正的创意广告展现到面前，你会明白，原来画面可以这么干净利索，原来文案可以这么直白无瑜。<br />其实，往往越是简约的广告越是不简单，因为它的出众必然是经过大量的资料研读，反复的策略思考，一遍遍地抠破脑壳，直至出现最佳的创意表达。文案在这个时候不再是策略表达或是辅助设计，而成为广告中的点睛之笔。普通的语言将改变广告的普通，这便是高水平文案大师的过人之处。在简约的设计元素中表达关键信息，一语中的，这真不是一件容易的事，它不是耍耍小聪明，而是需要大智慧。</span
      >
      <p style="font-size: 0.8rem; line-height: 1.4rem">
        <b>上一篇：</b>好吃等你来！
      </p>
      <p style="font-size: 0.8rem; line-height: 1.4rem">
        <b>下一篇：</b
        >董事长在员工大会上发表重要讲话，全体员工认真履行学习贯彻实施
      </p>
    </div>
    <navb></navb>
  </div>
</template>

<script>
import axios from "axios";
import navb from "../components/navb.vue";
export default {
  components: { navb },
  methods: {
    onClickLeft() {
      history.back();
    },
    async getData() {
      const result = await axios.get("/newsList");
      this.lists = result.data;
    },
    getId() {
      let id = this.$route.query.id;
      this.newsinfo = this.lists.filter((item) => item.id == id)[0];
    },
  },

  created() {
    this.getId();
  },
  data() {
    return {
      active: "",
      currentPage: 1,
      lists: [],
      ruleForm: {
        id: "",
        title: "",
        time: "",
        image: "",
      },
      newsinfo: {},
    };
  },
};
</script>

<style>
</style>