import React from 'react'
import Styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import BtnMission from '../../components/fourbtn/Pink'
    
const Finale = () => {
    const [moveOn, setmoveOn] = useState(false)
    const [isBtn, setisBtn] = useState(false);
    const [screen, setScreen] = useState(undefined);

    useEffect(() => {
        setScreen(window.innerWidth);
        window.addEventListener('resize', setScreen(window.innerWidth));

        setmoveOn(true)
            setTimeout(() => {
                setisBtn(true)
            }, 7000);
    });

    useEffect(() => {
            
    })

    return (
        <Wrapper moveOn={moveOn} isBtn={isBtn}>
            <div className={`textbox ${screen < 450 ? "smaller" : ""}`} >
                <div className="content">
                    <p>ENTER THE <span>MISSION&nbsp;</span></p>
                    <div className="mid">
                        <BtnMission />
                    </div>
                </div>
                <div className="hider"></div>
            </div>
            <div className={`non-over ${screen < 450 ? "smaller" : ""}`}>
                <p className="opac0">ENTER THE MISSION&nbsp;</p>
                <img className="imgastro" src="/img/finale/astroeject.svg" alt=""/>
            </div>
            <div className="bg bg1"></div>
            <div className="bg bg2"></div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({moveOn, isBtn})=>`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #050216;

    .smaller{
        width: 520px;
        transform: scale(0.5);
    }
    .content{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        height: 92px;

        span{
            filter: opacity(${isBtn ? 0 : 1});
            transition: 3s;
        }
        
        .mid{
            margin-top: 20px;
            position: absolute;
            right: 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            z-index: 1;
            filter: opacity(${isBtn ? 1 : 0});
            transition: 2s;
            transition-delay: 3s;
        }
    }
    .bg{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        transform: ${moveOn ? 'scale(1.2)' : ''};
        z-index: -1;
        transition: left 10s, transform 2s;
        transition-delay: 1s;   
    }
    .bg1{
        left: ${moveOn ? '-10%' : '0'};
        background-image: url('/img/finale/starsbg1.svg');
    }
    .bg2{    
        left: ${moveOn ? '-20%' : '0'};
        background-image: url('/img/finale/starsbg2.svg');
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
        left: ${moveOn ? '190%' : '-10%'};
        transition: 17s;
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
            left: ${moveOn ? "200%" : 0 };
            transition: 17s;
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