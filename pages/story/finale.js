import React from 'react'
import Styled from '@emotion/styled'
import { useEffect, useState } from 'react'
    
const Finale = () => {
    const [moveOn, setmoveOn] = useState(false)
    
    useEffect(() => {
            setmoveOn(true)
    })

    return (
        <Wrapper moveOn={moveOn}>
            <div className="textbox">
                <p>ENTER THE MISSION</p>
                <div className="hider"></div>
            </div>
            <div className="non-over">
                <p className="opac0">ENTER THE MISSION</p>
                <img className="imgastro" src="/img/finale/astroeject.svg" alt=""/>
            </div>
            <div className="bg1"></div>
            <div className="bg2"></div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({moveOn})=>`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #050216;

    .bg1{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: ${moveOn ? '-10%' : '0'};
        background-image: url('/img/finale/starsbg1.svg');
        z-index: -1;
        transform: ${moveOn ? 'scale(1.2)' : ''};
        transition: left 10s, transform 2s;
        transition-delay: 1s;
    }
    .bg2{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: ${moveOn ? '-20%' : '0'};
        transform: ${moveOn ? 'scale(1.2)' : ''};
        transition: left 10s, transform 2s;
        background-image: url('/img/finale/starsbg2.svg');
        z-index: -1;
        transition-delay: 1s;
    }

    .non-over{
        position: absolute;
        p{
            font-family: 'Exo2-med';
            font-style: normal;
            font-weight: 600;
            font-size: 47px;
            line-height: 56px;
            letter-spacing: 4px;
            color: #FFFFFF;
            margin: 0;
        }
    }
    .imgastro{
        position: absolute;
        top: -60%;
        left: ${moveOn ? '170%' : '-10%'};
        transition: 12s;
    }
    .opac0{
        filter: opacity(0);
    }

    .textbox{
        position: absolute;
        overflow: hidden;
        p{
            font-family: 'Exo2-med';
            font-style: normal;
            font-weight: 600;
            font-size: 47px;
            line-height: 56px;
            letter-spacing: 4px;
            color: #FFFFFF;
            margin: 0;
            position: relative;
            top: 0;
            left: ${moveOn ? "0" : "80%" };
            transition: 4s;
            transition-delay: 1s;
        }
        .hider{
            background-color: #050216;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: ${moveOn ? "180%" : 0 };
            transition: 12s;
            transition-delay:0.25s;
        }
    }


    @-webkit-keyframes rotating /* Safari and Chrome */ {
        from {
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes rotating {
        from {
          -ms-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -ms-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      .imgastro {
        -webkit-animation: rotating 3s linear infinite;
        -moz-animation: rotating 3s linear infinite;
        -ms-animation: rotating 3s linear infinite;
        -o-animation: rotating 3s linear infinite;
        animation: rotating 3s linear infinite;
      }
`)
    
export default Finale