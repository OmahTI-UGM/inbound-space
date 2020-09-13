import React from 'react'
import Styled from '@emotion/styled'
import Navbar from '../Navbar'
    
const LayoutNav = ({children, position}) => {
    return (
        <Wrapper>
            <div className={position}>
                <Navbar />
            </div>
            {children}
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(() =>`
    .bottom{
        height: 66px;
        position: fixed;
        bottom: 0;
    }
    .top{
        height: 66px;
        position: fixed;
        top: 0;
    }
`)
    
export default LayoutNav