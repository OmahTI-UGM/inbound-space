import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const Index = () => {
    const [screen, setScreen] = useState(undefined)
    const [cover, setcover] = useState(true)
    const [coverdelay, setcoverdelay] = useState(true)
    const [teamup, setteamup] = useState(false)
    const [linegrow, setlinegrow] = useState("0%");
    const handleWindowSizeChange = () => setScreen(window.innerWidth)

    useEffect(() => {
        setScreen(window.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange)
        
        setTimeout(() => {
            setlinegrow("100%")
        }, 1000);

        setTimeout(() => {
            setteamup(true)
        }, 8000);

        setTimeout(() => {
            setcover(false)
            setTimeout(() => {
                setcoverdelay(false)
            }, 2000)
        }, 1000)
    }, []);

    return (
        <Wrapper cover={cover} coverdelay={coverdelay} screen={screen} teamup={teamup} linegrow={linegrow}>

            <div className="layerbg">
                <div className="container2">
                    <div className="content">
                        <p className="telahdi">Telah dibentuk 8 tim yang masing-masingnya terdiri dari 5 orang dengan seorang commander di dalamnya</p>
                        <Link href="/mission/crewmates"><button className="next"><p>TEAM LIST</p><svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button></Link>
                    </div>
                    <div className="image">
                        <div className="c"></div>
                        <div className="b"></div>
                        <div className="a"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>KALIAN ADALAH YANG TERPILIH</h2>
                        <div className="penggaris"></div>
                    </div>
                    <p>Melalui oprec yang telah kalian lalui, kalian adalah kandidat terbaik untuk menjalankan misi berbahaya ini</p>
                </div>
            </div>


            <div className="coveronload" id="cover"></div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({cover, coverdelay, screen, teamup, linegrow}) => `
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: ${screen > 972 ? "center" : "flex-start"};
    color: white;
    background-image: url('/img/mission/bg-index${screen < 972 ? "-m": ""}.svg');
    background-size: cover;
    background-position: ${screen > 972 ? "center" : "top"};
    background-repeat: no-repeat;

    .coveronload{
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        background: #050216 url('/img/cover/mission${screen < 792 ? "-m" : ""}.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: opacity(${cover ? '1' : '0'});
        transition: filter 2s;
        ${coverdelay ? '' : 'display: none;'}
        z-index: 10;
    }
    
    .layerbg{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        opacity: ${teamup ? 1 : 0};
        transition: 1s;
        transition-delay: 1.5s;
        
        display: flex;
        justify-content: ${ screen < 894 ? "center" : "flex-end"};
        align-items: center;
        background-image: url('/img/mission/bg-teamup.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 1;
        
        
        .container2{
            min-width: 246px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${ screen < 894 ? "flex-direction: column-reverse;" : ""}
            position: fixed;
            top: 0;
            height: 100%;
            width: ${ screen < 894 ? "70%" : "85%"};
            padding-bottom: 60px;
            ${ screen > 894 ? "padding-right: 82px;" : ""}
            
            .image{
                position: relative;
                width: ${screen < 894 ? "120%" : "544px"};
                height: 384px;
                margin-left: 24px;
                
                div{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    transition: 0.5s;            
                    opacity: ${teamup ? 1 : 0};
                }
                .a{
                    background-image: url('/img/mission/barisanastro/a.svg');
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    z-index: 10;
                    transition-delay: 2.5s;
                }
                .b{
                    background-image: url('/img/mission/barisanastro/b.svg');
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    z-index: 9;
                    transition-delay: 3s;
                }
                .c{
                    background-image: url('/img/mission/barisanastro/c.svg');
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    z-index: 8;
                    transition-delay: 3.5s;
                }
            }
            
            .content{
                ${screen < 894 ? "display: flex; justify-content: center; align-items: center; flex-direction: column;" : ""}
                p.telahdi{
                    max-width: 450px;
                    font-family: "Exo2-lit";
                    font-style: normal;
                    font-weight: 600;
                    font-size: ${screen < 894 ? "24px" : "33px"};
                    line-height: ${screen < 894 ? "32px" : "40px"};
                    ${screen < 894 ? "text-align: center; margin-bottom: 40px;" : ""}
                    color: #FFFFFF;
                                
                    opacity: ${teamup ? 1 : 0};
                    transition: 1s;
                    transition-delay: 2s;
                }
                button.next{
                    height: 52px;
                    
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #FFF;
                    padding-left: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 16px;
                    p{
                        width: unset;
                        margin: 0 12px 2px 0;
                        font-family: 'Exo2-med';
                        font-style: normal;
                        font-weight: bold;
                        font-size: 28px;
                        line-height: 34px;
                        color: #180F4A;
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                        display: inline;
                    }
                }   
            }
        }
    }

    .container{
        position: fixed;
        top: 0;
        height: 100%;
        width: 70%;
        display: flex;
        justify-content: ${screen < 972 ? "center" : "flex-start"};
        align-items: ${screen > 972 ? "center" : "flex-start"};
        ${screen < 655 ? "" : screen < 972 ? "padding-top: 60px;" : "" }
        opacity: ${teamup ? 0 : 1};
        transition: 1s;

        .content{
            ${screen < 655 ? "display: flex;justify-content: center;align-items: center;flex-direction: column;" : ""}
            max-width: 614px;
            margin-bottom: 60px;
            ${screen < 655 ? "text-align: center;" : "" }


            .title{
                display: inline-block;
                
                .penggaris{
                    height: 4px;
                    width: ${linegrow};
                    background: #A143FF;
                    margin-top: 16px;
                    transition: 7s ease-in;
                }
                h2{
                    ${screen < 655 ? "width: 270px; margin-top:60px;" : "" }
                    font-family: 'Exo2-reg';
                    font-style: normal;
                    font-weight: 600;
                    font-size: ${screen < 655 ? "32px" : "41px"};
                    ${screen > 655 ? "line-height: 49px" : ""};
                    margin-bottom: 0;
                    color: #A143FF;
                    display: inline-block;
                }
            }
            p{
                ${screen < 655 ? "width: 319px;": ""}
                font-family: 'Exo2-el';
                font-style: normal;
                font-weight: 600;
                font-size: ${screen < 655 ? "23px" : "33px"};
                line-height: ${screen < 655 ? "36px": "40px"};
                ${screen < 655 ? "margin-top:12px;" : ""}
                
                color: #FFFFFF;
            }
            button.next{
                width: 152px;
                height: 52px;
                
                background: #FFFFFF;
                border-radius: 8px;
                border: 1px solid #FFF;
                padding-left: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
            
                p{
                    margin: 0 12px 2px 0;
                    font-family: 'Exo2-med';
                    font-style: normal;
                    font-weight: bold;
                    font-size: 28px;
                    line-height: 34px;
                    color: #180F4A;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    display: inline;
                }
            }   
        }
    }
`)
    
export default Index