/**
 * 分子示例,输入框+发送按钮
 * Created by gongyasen on 2017/5/18.
 */

import React, {Component} from 'react'
import {Input} from 'antd'
import {AntButton} from 'components'
import styled from 'styled-components'

//React创建组件方式
class InputAndButton extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        return <div>
            <Input style={{
                width: '20%',
                margin: 10
            }} placeholder="请输入值" size="large"/>
            <AntButton type="primary">添加</AntButton>
        </div>
    }

}


export default InputAndButton

