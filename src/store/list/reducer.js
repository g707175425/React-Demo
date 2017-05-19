/**
 * Reducer 负责通过旧状态生成新状态
 * Reducer 在Store/reducer.js中自动合并
 * Created by gongyasen on 2017/5/19.
 */
import {defaultState} from './selectors'
import * as actions from './actions'

export default (state = defaultState,action)=>{
    switch (action.type){
        case actions.ADD_ITEM:
            return {//ES7合并对象语法
                ...state,
                ...{
                    list:[...state.list,...[action.item]]
                }
            }
        case actions.GET_LIST:
            return {
                ...state,
                ...{
                    list:[...state.list]
                }
            }
        case actions.LOAD_LIST:
            return {
                ...state,
                ...{
                    fetching:true,
                    list:[]
                }
            }
        case actions.LOAD_LIST_FAILURE:
            return {
                ...state,
                ...{
                    fetching:false
                }
            }
        case actions.LOAD_LIST_SUCCESS:
            return {
                ...state,
                ...{
                    fetching:false,
                    list:action.list
                }
            }

        default:
            return state
    }
}