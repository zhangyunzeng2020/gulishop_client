import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router   //注册路由到Vue对象上
}).$mount('#app')
