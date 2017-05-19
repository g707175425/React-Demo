// https://github.com/diegohaz/arc/wiki/Redux-modules
/**
 * store的配置文件
 */

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { isDev, isBrowser } from 'config'
import middlewares from './middlewares'
import reducer from './reducer'
import sagas from './sagas'

//Redux的Chrome插件配置,可以在chrome中查看action的分发处理
const devtools = isDev && isBrowser && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn

const configureStore = (initialState, services = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  //配置store的中间件
  const enhancers = [
    applyMiddleware(
      ...middlewares,
      sagaMiddleware
    ),
    devtools(),
  ]

  const store = createStore(reducer, initialState, compose(...enhancers))

  //开启Redux-saga
  let sagaTask = sagaMiddleware.run(sagas, services)

  //如果项目很大,通过HMR，就可以只替换必要的模块,这里是手动指定热加载的模块
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      //手动重新加载模块
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas, services)
      })
    })
  }

  return store
}

export default configureStore
