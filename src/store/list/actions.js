/**
 * 处理action类型
 * Created by gongyasen on 2017/5/19.
 */

//添加Item
export const ADD_ITEM = "ADD_ITEM"
//本地获取List
export const GET_LIST = "GET_LIST"
export const LOAD_LIST = "LOAD_LIST"
export const LOAD_LIST_SUCCESS = "LOAD_LIST_SUCCESS"
export const LOAD_LIST_FAILURE = "LOAD_LIST_FAILURE"

/**
 * 增加条目动作
 * @param item
 */
export const addItem = (item)=>({
    type:ADD_ITEM,
    item:item
})

/**
 * 获取当前state树中的list
 */
export const getList = ()=>({
    type:GET_LIST
})

/**
 * 网络请求获取列表
 */
export const loadList = ()=>({
    type:LOAD_LIST
})

/**
 * 加载列表成功
 */
export const loadListSuccess = (list)=>({
    type:LOAD_LIST_SUCCESS,
    list:list
})

/**
 * 加载列表失败
 */
export const loadListFailure = ()=>({
    type:LOAD_LIST_FAILURE
})

