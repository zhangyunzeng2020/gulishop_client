import request from './ajax'

export const reqCategoryList = ()=>{
    return request({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}