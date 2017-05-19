/**
 * 处理action类型
 * Created by gongyasen on 2017/5/19.
 */

//添加Item
export const ADD_ITEM = "ADD_ITEM"
//本地获取List
export const GET_LIST = "GET_LIST"

/**
 * 增加条目动作
 * @param item
 */
export const addItem = (item)=>({
    type:ADD_ITEM,
    item:item
})

export const getList = ()=>({
    type:GET_LIST
})