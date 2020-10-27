import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
    
const Index = () => {
    const [cover, setcover] = useState(true)
    const [coverdelay, setcoverdelay] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setcover(false)
            setTimeout(() => {
                setcoverdelay(false)
            }, 2000);
        }, 1000);
    }, [])

    return (
        <Wrapper cover={cover} coverdelay={coverdelay}>

            <div className="coveronload" id="cover"></div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({cover, coverdelay}) => `
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-image: url('/img/mission/bg-index.svg');

    .coveronload{
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        background-image: url('img/cover/mission.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: opacity(${cover ? '1' : '0'});
        transition: filter 2s;
        ${coverdelay ? '' : 'display: none;'}
      }
    
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
`)
    
export default Index