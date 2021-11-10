//1、npm install vue-router -s 安装路由组件
//2、引入并声明使用插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/index'
import Register from '@/pages/Register/index'
import Login from '@/pages/Login/index'
import Search from '@/pages/Search/index'


Vue.use(VueRouter)
//需要向外暴露一个路由器的对象
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/search',
            component:Search
        }
    ]   //路由配置
})