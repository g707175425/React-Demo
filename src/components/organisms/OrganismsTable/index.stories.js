/**
 * Storybook 类,可以用来单个测试组件,运行npm run storybook 查看效果
 * Created by gongyasen on 2017/5/18.
 */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import OrganismsTable from '.'

storiesOf('OrganismsTable',module)
    .add('默认样式',()=>(
        <OrganismsTable list={[
            {id: 1, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 2, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 3, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 4, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 5, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 6, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 7, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 8, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 9, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 10, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 11, name: '家是', age: 23, address: '阿斯达大厦大所多'},
            {id: 12, name: '家是', age: 23, address: '阿斯达大厦大所多'},
        ]} />
    ))
    .add('啥也没有',()=>(
        <OrganismsTable/>
    ))