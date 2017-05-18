/**
 * 封装一个Ant中的输入框
 * Created by gongyasen on 2017/5/18.
 */

import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from 'antd'
import React, {Component} from 'react'

const StyledButton = styled(Button)`
    height: 40px
`

//React创建组件方式
class AntButton extends Component {
    static propTypes = {
        type:PropTypes.string
    } //这里定义props类型

    static defaultProps = {
        type:"primary"
    } //这里定义默认props值

    constructor(props) {
        super(props)
    }

    //渲染DOM
    render = () => {
        //此处演示了从props中取值:this.props.type,得到当前组件的子组件:this.props.children
        return <StyledButton type={this.props.type}>{this.props.children}</StyledButton>
    }

}

export default AntButton
