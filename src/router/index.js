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
    component: () => import('../views/Category.vue')
  },
  {
    path: '/categoryList',
    name: 'CategoryList',
    component: () => import('../views/Category.vue')
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
