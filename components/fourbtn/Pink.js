import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const Pink = () => {
    return (
        <Wrapper>
            <div className="hoverer hvr-pink"><a href="/mission"><button style={{backgroundImage: "url('/img/fourbtn/mission.svg')"}}>MISSION</button></a></div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
margin-bottom: 44px;
display: flex;
justify-content: flex-start;
align-items: center;

.hoverer{
    margin: 28px 0 0 0;
    width: 228px;
    height: 78px;
    border-radius: 12px;
    background-color: #00042A;
    transition: 0.25s;
  }
  
.hvr-pink:hover{
    background-color: #CC11A8;
    
}
button{
    width: 228px;
    height: 78px;

    box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px #000000;
    border-radius: 12px;
    border: none;
    background: none;
    font-family: 'Exo2-reg';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;

    text-align: left;
    letter-spacing: 0.08em;
    padding-left: 18px;
    padding-bottom: 2px;

    color: #FFFFFF;

    &:focus{
      outline:none;
      filter: brightness(2);
    }
    &:hover{
      
    }
}
`
    
export default Pink