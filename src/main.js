import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mockjs'
import './comm'
import axios from "axios"
import './assets/css/catalog.css'
import './assets/css/index.css'
import './assets/css/news_login_apply.css'
import './assets/css/public_lib.css'
import './assets/css/swiper.min.css'
import './assets/css/vant.css'
import './assets/css/zy_main.css'
import './assets/css/zy_public.css'
import './assets/css/zy_vip.css'
import { Tabbar, TabbarItem, NavBar } from 'vant'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
