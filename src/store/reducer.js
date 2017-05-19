// https://github.com/diegohaz/arc/wiki/Reducers
import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as thunk } from 'redux-saga-thunk'

const reducers = {
  form,
  thunk,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
    //按目录命名reducer,将state分组,并自动导出 ($1(取匹配到的第一个字符串))
    const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
    reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
