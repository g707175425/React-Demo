/**
 * 网络请求示例
 * Created by gongyasen on 2017/5/19.
 */

import {connect} from 'react-redux'
import * as selectors from 'store/selectors'
import * as actions from 'store/actions'
import * as React from "react";
import {OrganismsTable} from 'components'
import PropTypes from 'prop-types'
import {Spin} from 'antd'
import {Button} from "antd";
import styled from 'styled-components'

const StyledButton = styled(Button)`
    marginTop: 10px
    marginBottom: 10px
`

class LoadTable extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired,
        fetching: PropTypes.bool
    }

    static defaultProps = {
        fetching: false
    }

    componentDidMount() {
        this.props.dispatch(actions.loadList())
    }

    render = () => {
        const {list, fetching, dispatch} = this.props
        return <div>
            <StyledButton
                onClick={()=>{
                    dispatch(actions.loadList())
                }}>加载</StyledButton>
            <Spin tip="Loading..." spinning={fetching} size="large">
                <OrganismsTable key="table" showInput={false} list={list}/>
            </Spin>
        </div>
    }
}

export default connect((state) => ({
    list: selectors.list.getList(state), //此处对应文件夹处的selectors需要加上文件夹名
    fetching: selectors.list.getFetching(state) //加载状态(是否完毕)
}))(LoadTable)


