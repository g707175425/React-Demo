/**
 * sagas 封装了异步动作
 * Created by gongyasen on 2017/5/19.
 */
import api from 'services/api'
import {delay} from 'redux-saga'
import {takeEvery, take, fork, put, call} from 'redux-saga/effects'
import * as actions from './actions'

function* getList() {
    try{
        let result = yield call(api.get,'http://ws.jjfly.net/list')
        //保证每个Item有个Key
        result.data.list.forEach((item) => {
            item.key = item.id
        })
        //防止看不出来效果延迟一会,不延迟也没事
        yield delay(2000)
        yield put(actions.loadListSuccess(result.data.list))//設置key值
    }catch (e){
        yield put(actions.loadListFailure())
    }
}

export default function* () {
    //循环监听请求事件
    yield takeEvery(actions.LOAD_LIST, getList)
}