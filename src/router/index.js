//1、npm install vue-router -s 安装路由组件
//2、引入并声明使用插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/index'
import Register from '@/pages/Register/index'
import Login from '@/pages/Login/index'
import Search from '@/pages/Search/index'


Vue.use(VueRouter)



//将原有的push方法地址，保存起来，后期还能拿到原来的
const originPush = VueRouter.prototype.push
const orginReplace = VueRouter.prototype.replace

//可以大胆的去修改原型的push，让原型的push指向另外一个函数
VueRouter.prototype.push = function (location,onResolved,onRejected) {
    if (onResolved === undefined && onRejected==undefined)
    {
        //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
        originPush.call(this,location).catch(()=>{})
    }
    else {
        //证明调用的时候传递了成功或者失败的回调，或者都有
        originPush.call(this,location,onResolved,onRejected)
    }

}

VueRouter.prototype.replace = function (location,onResolved,onRejected) {
    if (onResolved === undefined && onRejected==undefined)
    {
        //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
        orginReplace.call(this,location).catch(()=>{})
    }
    else {
        //证明调用的时候传递了成功或者失败的回调，或者都有
        orginReplace.call(this,location,onResolved,onRejected)
    }
}

//需要向外暴露一个路由器的对象
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/register',
            component:Register,
            //路由当中的原配置项，可以配置任何数据
            meta:{
                isHidden:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:'search'
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]   //路由配置
})