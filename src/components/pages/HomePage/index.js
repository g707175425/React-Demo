// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import {HtmlDiv, AntButton,InputAndButton } from 'components'
import styled from 'styled-components'

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
            <AtomHtmlDiv background="white">
                原子类型基本html标签(styled-components实现)
            </AtomHtmlDiv>
            <br/>
            <AntButton>Ant原子按钮</AntButton>
            <br/>分子类型:<InputAndButton/>


        </RootDiv>
    )
}

export default HomePage
