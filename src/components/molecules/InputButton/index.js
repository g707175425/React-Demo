/**
 * 分子示例,输入框+发送按钮
 * Created by gongyasen on 2017/5/18.
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'antd'
import {AntButton} from 'components'

//由于ant的less文件会在styled-components之后加载,会替换掉设置的主题,
// 所以使用react原有的style定义方式
const styles = {
    input:{
        width: '20%',
        margin: 10
    }
}

//React创建组件方式
class InputButton extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        onClick:null
    }

    static propTypes = {
        onClick:PropTypes.func
    }

    state = {
        inputValue:''
    }

    value = ()=> this.state.inputValue

    render = () => {
        const {onClick} = this.props
        return <div>
            <Input
                style={styles.input}
                placeholder="请输入值"
                size="large"
                onChange={(event)=>{
                    this.setState({
                        inputValue:event.target.value
                    })
                }}
                value={this.state.inputValue}/>
            <AntButton type="primary" onClick={()=>onClick(this.value())}>
                添加
            </AntButton>
        </div>
    }

}


export default InputButton

