// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import {HtmlDiv, AntButton, InputButton, OrganismsTable} from 'components'
import styled from 'styled-components'
import { Collapse } from 'antd';
import {IncreasableTable, LoadTable} from 'containers'
const Panel = Collapse.Panel;
/**
 * styled-components定义非基本类型Html标签css
 */
const AtomHtmlDiv = styled(HtmlDiv)`
    width: 400px
`
const RootDiv = styled.div`
    padding: 2%
`

const HomePage = () => {
    return (
        <RootDiv>
            <Collapse >
                <Panel header="原子类型基本html标签(styled-components实现)" key="1">
                    <AtomHtmlDiv background="white">
                        div基本标签
                    </AtomHtmlDiv>
                </Panel>
                <Panel header="Ant原子按钮" key="2">
                    <AntButton>Ant原子按钮</AntButton>
                </Panel>
                <Panel header="分子类型" key="3">
                    <InputButton/>
                </Panel>
                <Panel header="有机体" key="4">
                    <OrganismsTable list={[
                        {id:1,name:'测试数据1',address:'阿桑达萨达萨1',age:18},
                        {id:2,name:'测试数据2',address:'阿桑达萨达萨2',age:28},
                        {id:3,name:'测试数据3',address:'阿桑达萨达萨3',age:38},
                        {id:4,name:'测试数据4',address:'阿桑达萨达萨4',age:48},
                    ]} />
                </Panel>
                <Panel header="Container,承载状态变化(点击增加一行)" key="5">
                    <IncreasableTable />
                </Panel>
                <Panel header="redux-saga网络请求" key="6">
                    <LoadTable />
                </Panel>

            </Collapse>

        </RootDiv>
    )
}

export default HomePage
