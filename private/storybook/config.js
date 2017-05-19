/**
 * storybook 配置文件
 * https://github.com/diegohaz/arc/wiki/Storybook
 */
import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import configureStore from 'store/configure'
import api from 'services/api'
import theme from 'components/themes/default'

const store = configureStore({}, { api: api.create() })
const req = require.context('components', true, /.stories.js$/)

//手动引入components所有组件
require('components')

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </BrowserRouter>
  </Provider>
))

configure(loadStories, module)
