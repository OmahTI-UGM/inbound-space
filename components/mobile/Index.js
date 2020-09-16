import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const Index = () => {
    return (
        <BackLayer>
            <Wrapper>
            <div className="content">
                <div className="upper">
                    <h4>WELCOME TO</h4>
                    <h2>2020 inbound</h2>
                    <h1>SPACE <br/> <span className="delay">PROGRAM</span></h1>
                </div>
                <div className="lower">
                    <div className="fourbtn">
                    <div className="hoverer hvr-gold"><Link href="/story"><button style={{backgroundImage: "url('/img/fourbtn/story.svg')"}}>STORY</button></Link ></div>
                    <div className="hoverer hvr-pink"><Link href="/mission"><button style={{backgroundImage: "url('/img/fourbtn/mission.svg')"}}>MISSION</button></Link ></div>
                    <div className="hoverer hvr-blue"><Link href="/check-in"><button style={{backgroundImage: "url('/img/fourbtn/checkin.svg')"}}>CHECK-IN</button></Link ></div>
                    <div className="hoverer hvr-green"><Link href="/progress"><button style={{backgroundImage: "url('/img/fourbtn/progress.svg')"}}>PROGRESS</button></Link ></div>
                    </div>
                </div>
            </div>
            </Wrapper>
        </BackLayer>
    );
}
    
const Wrapper = Styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    // background-image: url('/img/indexbg-prx.svg');

    background-attachment: fixed;
    background-position-x: right;
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: cover;
`

const BackLayer = Styled.div`
position: fixed;
top: 0;
left: 0;

width: 100%;
height: 100%;
background: linear-gradient(160deg, rgba(0,0,0,0.8) 0%, rgba(0, 0, 0, 0) 50%);
`

    
export default Index