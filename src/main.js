import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/global.scss'
import '@/assets/styles/icon.css'

import {
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload,
  List
} from 'vant'
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
