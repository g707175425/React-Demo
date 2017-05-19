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
            return {
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

        default:
            return state
    }
}