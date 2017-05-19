/**
 * 和redux状态相关的容器
 * Created by gongyasen on 2017/5/19.
 */

import {connect} from 'react-redux'
import * as selectors from 'store/selectors'
import * as actions from 'store/actions'
import * as React from "react";
import {OrganismsTable} from 'components'

const IncreasableTable = ({dispatch, list})=>(
    <OrganismsTable list={list} onClick={(value)=>{
        let id = list.length;
        dispatch(actions.addItem({id: id, name:value, age:18+id, address:'测试地址'+id}))
    }}/>
)

export default connect((state)=>({
    list:selectors.list.getList(state) //此处对应文件夹处的selectors需要加上文件夹名
}))(IncreasableTable)


