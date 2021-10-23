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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Confirm.vue')
  },
  {
    path: '/flow',
    name: 'flow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/flow.vue')
  },
  {
    path: '/goods',
    name: 'Goods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
