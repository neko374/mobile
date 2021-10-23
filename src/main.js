import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/catalog.css'
import './assets/css/index.css'
import './assets/css/news_login_apply.css'
import './assets/css/public_lib.css'
import './assets/css/swiper.min.css'
import './assets/css/vant.css'
import './assets/css/zy_main.css'
import './assets/css/zy_public.css'
import './assets/css/zy_vip.css'
import axios from "axios"
import './comm'
import './mock'
import { Tabbar, TabbarItem, NavBar, Swipe, SwipeItem, List, Pagination, Search, Sidebar, SidebarItem, Grid, GridItem } from 'vant'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(List)
Vue.use(Pagination)
Vue.use(Search)
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Grid);
Vue.use(GridItem);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
