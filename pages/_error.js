import React from 'react'
import Styled from '@emotion/styled'
    
const error404 = () => {
    return (
        <Wrapper>
            
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    
    background-image: url('/img/404bg.svg');
  
    background-attachment: fixed;
    background-position-x: right;
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: cover;
`
    
export default error404