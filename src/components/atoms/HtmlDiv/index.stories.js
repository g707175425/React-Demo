/**
 * Storybook 类,可以用来单个测试组件,运行npm run storybook 查看效果
 * Created by gongyasen on 2017/5/18.
 */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import HtmlDiv from '.'

storiesOf('HtmlDiv',module)
    .add('默认样式',()=>(
        <HtmlDiv >自定义单元格</HtmlDiv>
    ))
    .add('绿色背景',()=>(
        <HtmlDiv background="green">自定义单元格</HtmlDiv>
    ))