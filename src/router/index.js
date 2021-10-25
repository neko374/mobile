import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/aboutlist',
    name: 'Aboutlist',
    component: () => import('../views/Aboutlist.vue')
  },
  {
    path: '/newsXq',
    name: 'NewsXq',
    component: () => import('../views/NewsXq.vue')
  },
  {
    path: '/newsList',
    name: 'NewsList',
    component: () => import('../views/NewsList.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue'),
    redirect: "/category/zh",
    children: [
      {
        path: 'zh',
        component: () => import('../views/category/category1.vue'),
      },
      {
        path: 'xl',
        component: () => import('../views/category/category2.vue'),
      },
      {
        path: 'jg',
        component: () => import('../views/category/category3.vue'),
      },
      {
        path: 'list',
        component: () => import('../views/CategoryList.vue')
      },
    ]
  },
  {
    path: '/catelog',
    name: 'Catelog',
    component: () => import('../views/Catelog.vue')
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import('../views/Confirm.vue')
  },
  {
    path: '/flow',
    name: 'flow',
    component: () => import('../views/flow.vue')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('../views/Goods.vue')
  },
  {
    path: '/pocking',
    name: 'pocking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pocking.vue')
  },
  {
    path: '/dizhi',
    name: 'dizhi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Flow_dizhi.vue')
  },
  {
    path: '/userbackorder',
    name: 'UserBackOrder',
    component: () => import('../views/UserBackOrder.vue')
  },
  {
    path: '/userbackorderck',
    name: 'UserBackOrderCk',
    component: () => import('../views/UserBackOrderCk.vue')
  },
  {
    path: '/commentPinj',
    name: 'CommentPinj',
    component: () => import('../views/CommentPinj.vue')
  },
  {
    path: '/commentShaid',
    name: 'CommentShaid',
    component: () => import('../views/CommentShaid.vue')
  },
  {
    path: '/usercomment',
    name: 'UserComment',
    component: () => import('../views/UserComment.vue')
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDetail.vue')
  },
  {
    path: '/orderkuaidi',
    name: 'OrderKuaidi',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderKuaidi.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/useraddr',
    name: 'UserAddr',
    component: () => import('../views/UserAddr.vue')
  },
  {
    path: '/useraddrdizhi',
    name: 'UserAddrDizhi',
    component: () => import('../views/UserAddrDizhi.vue')
  },

  {
    path: '/useraddrnew',
    name: 'UserAddrNew',
    component: () => import('../views/UserAddrNew.vue')
  },
  {
    path: '/usershouc',
    name: 'UserShouC',
    component: () => import('../views/UserShouC.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forget.vue')
  },
  {
    path: '/userbackordertk',
    name: 'UserBackOrderTk',
    component: () => import('../views/UserBackOrderTk.vue')
  },
  {
    path: '/usermsg',
    name: 'UserMsg',
    component: () => import('../views/UserMsg.vue')
  }
  ,
  {
    path: '/exchange',
    name: 'Exchange',
    component: () => import('../views/Exchange.vue')
  }
  ,
  {
    path: '/exchangelist',
    name: 'Exchangelist',
    component: () => import('../views/Exchangelist.vue')
  },
  ,
  {
    path: '/foodssku',
    name: 'FoodsSku',
    component: () => import('../components/FoodsSku.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
