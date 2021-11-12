import {reqCategoryList} from '@/api/index'
//这个是home模块的vuex模块
//vuex当中的4个核心概念
const state = {
   categoryList:[]
}

const mutations = {
    RECEIVE_CATEGORYLIST(stata,categoryList){
        stata.categoryList = categoryList
    }
}
const actions={
    //与组件当中用户对接
    //一般是异步发请求
    //提交mutations
    async getCategoryList({commit}){
        //发请求拿数据，提交给mutations，存储到state
        //await和async作用
        //可以通过同步代码实现异步效果，可读性强
        //.then.catch不是说不能用，而是可读性不强，里面还是有异步代码（异步回调函数）
        const result = await reqCategoryList()
        if (result.code === 200){
            commit("RECEIVE_CATEGORYLIST",result.data)
        }
    }
}
const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}