import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
import store from '@/store/index'
import '@/mock/mockServer'  //引入mockServer，让模拟的接口生效
import TypeNav from '@/components/TypeNav/index'
import SlideLoop from '@/components/SlideLoop/index'

import 'swiper/css/swiper.css'  //引入swiper的css
//全局注册的组件，如果一个非路由组件被多个组件使用，那么定义在componets,注册在全局
Vue.component(TypeNav.name,TypeNav)
Vue.component(SlideLoop.name,SlideLoop)

// import {reqCategoryList} from './api/index'
//
// reqCategoryList()

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,   //注册路由到Vue对象上
  store
}).$mount('#app')
