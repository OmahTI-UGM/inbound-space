import React, {useState} from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const Index = ({titleFade}) => {
    const [isOpen, setisOpen] = useState(false);

    return (
        <Wrapper titleFade={titleFade} isOpen={isOpen}>
            <BackLayer>
                <div className="pre-content">
                    <div className="content">
                        <div className="upper">
                            <h2>2020 inbound</h2>
                            <h1>SPACE <br/> <span className="delay">PROGRAM</span></h1>
                        </div>
                        <div className="lower">
                            <div className="blackbox">
                                <div className="specialbtn hvr-gold"><Link href="/story"><button style={{backgroundImage: "url('/img/fourbtn/m-story.svg')"}}><p>STORY</p></button></Link ></div>
                                <div className="notifier">
                                    <p>Siap untuk jalankan<br/>misinya? simak<br/>kisahnya dahulu</p>
                                    <svg className="notif-svg" width="17" height="34" viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.01781 33.0365C9.0182 33.0361 9.01865 33.0358 9.01905 33.0353L15.8074 26.2141C16.3159 25.7031 16.314 24.8766 15.8029 24.3679C15.2919 23.8593 14.4654 23.8612 13.9568 24.3723L9.39919 28.952L9.39919 1.30544C9.39919 0.584447 8.81475 -3.22273e-07 8.09375 -3.53789e-07C7.37275 -3.85305e-07 6.78831 0.584447 6.78831 1.30544L6.7883 28.952L2.23074 24.3723C1.72214 23.8613 0.895594 23.8593 0.384578 24.3679C-0.126569 24.8766 -0.128331 25.7032 0.380139 26.2142L7.16845 33.0354C7.16884 33.0358 7.1693 33.0361 7.16969 33.0366C7.67999 33.5478 8.50921 33.5462 9.01781 33.0365Z" fill="#fff"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="otherbtn">
                                <div className="hoverer hvr-pink">
                                    <Link href="/mission">
                                        <button><p>MISSION</p><img src="/img/fourbtn/m-mission.svg" alt=""/></button>
                                    </Link >
                                    <p className="label">MISSION</p>
                                </div>
                                <div className="hoverer hvr-blue">
                                    <Link href="/check-in">
                                        <button><p>CHECK-IN</p><img src="/img/fourbtn/m-checkin.svg" alt=""/></button>
                                    </Link >
                                    <p className="label">CHECK-IN</p>
                                </div>
                                <div className="hoverer hvr-green">
                                    <Link href="/progress">
                                        <button><p>PROGRESS</p><img src="/img/fourbtn/m-progress.svg" alt=""/></button>
                                    </Link >
                                    <p className="label">PROGRESS</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="menubar">
                    <div className="popcontainer">
                        <div className="edger e-l"></div>
                        <div className="menupop" onClick={()=> setisOpen(true)}>
                            <p>MENU</p>
                        </div>
                        <div className="edger e-r"></div>
                    </div>
                    <div className="menulist">
                        <div className="close" onClick={()=> setisOpen(false)}>

                        </div>
                        <div className="inner">
                            <Link href="/timeline"><a>TIMELINE</a></Link>
                            <div className="garis"></div>
                            <Link href="/awards"><a>AWARDS</a></Link>
                            <div className="garis"></div>
                            <Link href="/about"><a>ABOUT</a></Link>
                            <div className="garis"></div>
                            <Link href="/help"><a>HELP</a></Link>
                        </div>                        
                    </div>
                </div>
            </BackLayer>
        </Wrapper>
    );
}


    
const Wrapper = Styled.div(({titleFade, isOpen})=>`
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

    .menubar{
        position: fixed;
        bottom: ${isOpen ? "0" : "calc(-100% + 1px)"};
        width: 100%;
        height: calc(100% + 54px);
        transition: 1s;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        .popcontainer{
            position: relative;
            width: calc(78% + 28px);
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 336px;

            .edger{
                width: 15.27px;
                height: 100%;
                background-image: url('/img/edger.svg');
            }
            .e-r{
                background-repeat: no-repeat;
                background-size: contain;
                background-position: bottom left;
            }
            .e-l{
                transform: scaleX(-1);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: bottom right;
            }
            .menupop{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, #000000 100%);
                border-radius: 16px 16px 0 0;
                
                p{
                    transition: 1s;
                }
            }
        }
        .menulist{
            position: relative;
            padding-top: 32px;
            background: black;
            height: calc(100% + 54px);
            width: 100%;
            color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            
            font-family: 'Exo2-lit';
            font-style: normal;
            // font-weight: 600;
            font-size: 25px;
            line-height: 22px;
            text-align: center;

            .close{
                position: absolute;
                height: 26px;
                width: 26px;
                top: 20px;
                right: 20px;

                background-image: url('/img/close.svg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                filter: opacity(${ isOpen ? "1" : "0"});
                transition: 1s;
            }
            
            .inner{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;
                height: 390px;

                a{
                    width: 100%;
                    height: 88px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.25s;

                    &:hover, &:focus{
                        color : #F29C1F;
                        font-weight: bold;
                        transform: scale(1.1);
                    }
                }
            }

            .garis{
                width: 300px;
                height: 1px;
                background: #222;
            }
        }
        p{
            font-family: Exo 2;
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 26px;
            text-align: center;
            letter-spacing: 0.08em;
            margin: 0;

            color: #FFFFFF;
        }
    }
    
    .otherbtn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 6px;
        margin: 0 -6px;
    }
    .hoverer{
        width: 100%;
        margin: 18px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        .label{
            font-family: 'Exo2-med';
            font-style: normal;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            letter-spacing: 0.08em;

            color: #FFFFFF;
        }
        button{
            height: 88px;
            width: 100%;
            border: none;
            box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px #000000;
            border-radius: 12px;

            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 0;
            overflow: hidden;

            p{
                writing-mode: vertical-rl;
                text-orientation: mixed;
                -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);

                margin-bottom: 10px;
                font-family: 'Exo2-med';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                letter-spacing: 0.08em;
            }
        }
    }
    .hvr-pink button{
        background: linear-gradient(90deg, #00042A 26.04%, #240838 68.75%, #5B0D4C 100%) !important;
        color: #9B1788;
    }
    .hvr-blue button{
        background: linear-gradient(90deg, #00042A 45.31%, #000853 73.44%, #000B78 100%) !important;
        color: #323DA0;
    }
    .hvr-green button{
        background: linear-gradient(90deg, #00042A 40.87%, #00192F 65%, #007344 100%) !important;
        color: #29A679;
    }
    .lower{
        width: 100%;
    }
    .pre-content{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;
        min-width: 336px;
    }
    .content{
        min-width: 336px;
        width: 100%;
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
    .notifier{

        margin-left: 32px;
        p{
            font-family: 'Exo2-lit';
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;

            color: #FFFFFF;
        }
        svg{
            transform: rotate(90deg);
            margin-left: 8px;
        }
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
        font-family: 'Poppkorn';
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
        width: 100%;
        height: 148px;
        
        margin-top: 36px;
        background: rgba(0, 0, 0, 0.62);
        border-radius: 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 6px;
        padding-bottom: 1px;
    }
    .specialbtn{
        height: 136px;
        width: 136px;
        border-radius: 12px;
        box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px #000000;
        background-color: #120B35 ;    
        
        button{
            border-radius: 12px;
            height: 136px;
            width: 136px;
            border: none;
            padding: 16px;
            padding-left: 12px;
            background: none;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            &:focus{
                outline: none;
            }
            p{
                margin: 0;
                writing-mode: vertical-rl;
                text-orientation: mixed;
                transform: rotate(180deg);
                
                font-family: 'Exo2-med';
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 29px;
                letter-spacing: 0.08em;

                color: #FFFFFF;
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
