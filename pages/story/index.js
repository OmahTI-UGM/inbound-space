import React from 'react'
import Styled from '@emotion/styled'
    
const Index = () => {
    return (
        <Wrapper>
            <p>/story is under development</p>
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
    p{
        font-family: 'Exo2-med';
        font-size: 24px;
        margin: 0;
    }
`
    
export default Index