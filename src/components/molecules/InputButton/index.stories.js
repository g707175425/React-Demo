/**
 * Storybook 类,可以用来单个测试组件,运行npm run storybook 查看效果
 * Created by gongyasen on 2017/5/18.
 */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import InputButton from '.'

storiesOf('InputButton',module)
    .add('默认样式',()=>(
        <InputButton >自定义单元格</InputButton>
    ))