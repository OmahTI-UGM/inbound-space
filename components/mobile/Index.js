import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const Index = ({titleFade}) => {
    return (
        <Wrapper titleFade={titleFade}>
            <BackLayer>
                <div className="pre-content">
                    <div className="content">
                        <div className="upper">
                            <h2>2020 inbound</h2>
                            <h1>SPACE <br/> <span className="delay">PROGRAM</span></h1>
                        </div>
                        <div className="lower">
                            <div className="blackbox">
                                <div className="specialbtn hoverer hvr-gold"><Link href="/story"><button style={{backgroundImage: "url('/img/fourbtn/m-story.svg')"}}>STORY</button></Link ></div>
                            </div>
                            <div className="hoverer hvr-pink"><Link href="/mission"><button style={{backgroundImage: "url('/img/fourbtn/mission.svg')"}}>MISSION</button></Link ></div>
                            <div className="hoverer hvr-blue"><Link href="/check-in"><button style={{backgroundImage: "url('/img/fourbtn/checkin.svg')"}}>CHECK-IN</button></Link ></div>
                            <div className="hoverer hvr-green"><Link href="/progress"><button style={{backgroundImage: "url('/img/fourbtn/progress.svg')"}}>PROGRESS</button></Link ></div>
                            
                        </div>
                    </div>
                </div>
            </BackLayer>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({titleFade})=>`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-image: url('/img/m-index-1.svg');
    
    background-attachment: fixed;
    background-position-x: right;
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: cover;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
    .pre-content{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;
        min-width: 336px;
    }
    .content{
        max-width: 336px;
    }
    &::before{
        position: fixed;
        top: 0;
        left: 0;
        
        width: 100%;
        height: 100%;
        content: '';
        background-image: url('/img/m-index-2.svg');
        background-attachment: fixed;
        background-position-x: left;
        background-position-y: top;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -20;
    }
    h1{
        font-family: 'Exo2-eb';
        font-style: normal;
        font-weight: 800;
        font-size: 58px;
        line-height: 102.8%;
        margin: 8px 0 0 0;
    
        transition:4s;
        transition-delay:0;
        display: inline-block;
        filter: opacity(${titleFade});
        color: #FFFFFF;
        
        .delay{
          filter: opacity(${titleFade});
          transition-delay:1s !important;
          transition:1s !important;
        }
    }
    h2{
        font-family: Poppkorn;
        font-style: normal;
        font-weight: normal;
        font-size: 44px;
        line-height: 44px;
    
        margin: 32px 0 0 0;
    
        background: -webkit-linear-gradient(0deg, #F29C1F 60%, #EA1984);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
    }
    .blackbox{
        width: 335px;
        height: 143px;

        background: rgba(0, 0, 0, 0.62);
        border-radius: 14px;
    }
    .specialbtn{
        height: 136px;
        width: 136px;
        border-radius: 12px;
        box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px #000000;
        background-color: #120B35 ;    
        display: flex;
        justify-content: center;
        align-items: center;
        
        button{
            border-radius: 12px;
            height: 136px;
            width: 136px;
            border: none;
            background: none;
            &:focus{
                outline: none;
            }
        }
    }
`)

const BackLayer = Styled.div`
position: fixed;
top: 0;
left: 0;

width: 100%;
height: 100%;
background: linear-gradient(160deg, rgba(0,0,0,0.8) 0%, rgba(0, 0, 0, 0) 50%);

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
`

    
export default Index