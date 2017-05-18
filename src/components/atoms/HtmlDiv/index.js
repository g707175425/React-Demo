/**
 * 基本html标签类型组件
 * Created by gongyasen on 2017/5/18.
 */

import styled from 'styled-components'
import PropTypes from 'prop-types'
import {palette} from 'styled-theme'
import {prop} from 'styled-tools'

/**
 * 使用styled-components 创建基本html标签类型组件
 */
const HtmlDiv = styled.div`
    background-color: ${prop('background')}
    color: ${palette('primary',0)}
    border:5px solid black
    padding: 10px
`

//设置默认属性类型,不设置也无所谓,但是推荐设置,react将自动进行类型检查
HtmlDiv.propTypes = {
    background:PropTypes.string,
}

//默认属性值
HtmlDiv.defaultProps = {
    background:'violet'
}

export default HtmlDiv

