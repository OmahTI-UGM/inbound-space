import React from 'react'
import Styled from '@emotion/styled'
    
const Index = () => {
    return (
        <Wrapper>
            <h1>.MISSION</h1>
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
    background-image: url('/img/mission/bg-index.svg');
    
    h1{
        font-family: 'Poppkorn';
        font-style: normal;
        font-weight: normal;
        font-size: 165px;
        margin: 0;
        margin-bottom: 32px;
        line-height: 75px;
        background: -webkit-linear-gradient(0deg, #F29C1F 40%, #EA1984 130%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
    }
`
    
export default Index