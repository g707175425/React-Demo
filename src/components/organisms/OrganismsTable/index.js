/**
 * 有机体,多种分子,原子组合,
 * Created by gongyasen on 2017/5/18.
 */

import React, {Component} from 'react'
import {InputButton} from 'components'
import {Table} from 'antd'
import PropTypes from 'prop-types'

const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
}, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
}];

class OrganismsTable extends Component {
    static propTypes = {
        list: PropTypes.array,
        columns: PropTypes.array,
        onClick: PropTypes.func,
        showInput: PropTypes.bool
    }

    static defaultProps = {
        list: [],
        columns: columns,
        onClick: null,
        showInput: true
    }

    constructor(props) {
        super(props)
    }

    render = () => {
        const {columns, list, onClick, showInput} = this.props
        return <div>
            {showInput && <InputButton onClick={onClick}/>}
            <Table columns={columns} dataSource={list} />
        </div>
    }

}


export default OrganismsTable

