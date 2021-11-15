import request from './ajax'
import mockAjax from '@/api/mockAjax'

export const reqCategoryList = ()=>{
    return request({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

export const reqBannerList = ()=>{
    return mockAjax({
        url: '/banner',
        method: 'get'
    })
}

export const reqFloorList = ()=>{
    return mockAjax({
        url:"/floor",
        method:"get"
    })
}