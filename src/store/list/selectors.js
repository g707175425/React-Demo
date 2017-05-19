/**
 * selector 存放各种状态选择函数
 * 主要是给redux connect函数使用
 * Created by gongyasen on 2017/5/19.
 */

export const defaultState = {
    list:[],
}

export const getList = (state)=>(state.list)