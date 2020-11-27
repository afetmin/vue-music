import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('@/views/Recommend.vue')
  },
  {
    path: '/artist',
    component: () => import('@/views/Artist.vue')
  },
  {
    path: '/playlist',
    component: () => import('@/views/PlayList.vue')
  },
  {
    path: '/rank',
    component: () => import('@/views/Rank.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
