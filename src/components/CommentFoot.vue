<template>
  <div class="footer_box">
    <div class="footer">
      <h2>
        <a href="javascript:;">剁手党的春天</a
        ><!-- 
			 --><a href="about_mdcx.html">门店查询</a>
      </h2>
      <h3>
        <span><a href="about.html">关于我们</a></span>
        <span><a href="about.html">购物指南</a></span>
        <span><a href="about.html">支付方式</a></span>
        <span><a href="about.html">售后服务</a></span>
      </h3>
      <div class="txt">
        <p>&copy; 2019 XX公司&nbsp;&nbsp;ICP备XXXXXXXX号</p>
        <p>全国统一服务热线：400-888-8888</p>
        <p>
          技术支持：<a
            style="color: #999"
            href="http://www.jsdaima.com/"
            title="js代码"
            target="_blank"
            >js代码（www.jsdaima.com）</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*footer_box底部*/
.footer_box {
  margin-top: 3%;
  background-color: #fff;
  padding-bottom: 18%;
}
.footer_box .footer h2 {
  border-bottom: #ddd solid 1px;
  text-align: center;
  padding: 4% 0;
}
.footer_box .footer h2 a {
  font-size: 0.86rem;
  color: #999;
  display: inline-block;
  padding: 0 2%;
  border-left: #999 solid 1px;
  line-height: 100%;
  padding: 0 4%;
}
.footer_box .footer h2 a:first-child {
  border-left: 0;
}
.footer_box .footer h3 {
  text-align: center;
  margin: 5% 0;
}
.footer_box .footer h3 span {
  display: inline-block;
  vertical-align: middle;
  margin: 2%;
}
.footer_box .footer h3 span:after {
  content: ">";
  color: #ffe037;
  margin-left: 0.3em;
  font-size: 0.84rem;
}
.footer_box .footer h3 span a {
  font-size: 0.84rem;
  color: #999;
  border-bottom: #999 solid 1px;
}
.footer_box .footer .txt {
  text-align: center;
  color: #999;
  font-size: 0.8rem;
  line-height: 180%;
}
</style>