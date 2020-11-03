import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import dataCrewlist from '../../sample-api/crewlist.json'
import Mobile from '../../components/mobile/mission/Crewmates'
    
const Crewmate = () => {
    const [screen, setScreen] = useState(undefined)
    const [planetID, setplanetID] = useState(0);

    useEffect(() => {
        setScreen(window.innerWidth);
        window.addEventListener('resize', handleWindowSizeChange);
    }, []);
    
    const handleWindowSizeChange = () => {
        setScreen(window.innerWidth);
    };

    const namaplanet = ["MERKURIUS", "VENUS", "MARS", "JUPITER", "SATURNUS", "URANUS", "NEPTUNUS", "PLUTO"]
    const warnaplanet = ["#44A6E7", "#EDBA3A", "#F0A036", "#0BD6D6", "#F2A15D", "#2DC6E0", "#02A6DE", "#F562DC"]
    const crews = dataCrewlist.crewlist;

    const planetArray = namaplanet.map( (namaplanet, i = 1) => (
        <div className="eachplanet">
            <div className={`${ planetID == i ? "zoomed" : "" } ${ planetID > i ? "gone" : "" }`}>
                <img src={`/img/8planet/${++i}.svg`} alt=""/>
                <p>{namaplanet}</p>
            </div>
        </div>
    ));

    if(screen > 900){
        return (
            <Wrapper planetID={planetID}>
                <div className="maincontent">
                    <h1>TEAM <br/><span style={{color: warnaplanet[planetID]}}>{namaplanet[planetID]}</span></h1>
                    <div className="list-group">
                        <p className="badge">CREWMATES</p>
                        <div className="names">
                            <p>{crews[planetID].names[0]}&ensp;<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#FFF500"/><path d="M9.07413 4.172C9.55947 4.172 9.97013 4.186 10.3061 4.214C10.6515 4.23267 10.9641 4.27 11.2441 4.326C11.5241 4.37267 11.8181 4.438 12.1261 4.522L11.9301 6.454C11.6128 6.44467 11.3188 6.43533 11.0481 6.426C10.7775 6.41667 10.4881 6.412 10.1801 6.412C9.87213 6.40267 9.50347 6.398 9.07413 6.398C8.68213 6.398 8.3788 6.47733 8.16413 6.636C7.94947 6.79467 7.80013 7.07467 7.71613 7.476C7.63213 7.87733 7.59013 8.442 7.59013 9.17C7.59013 9.898 7.63213 10.4627 7.71613 10.864C7.80013 11.2653 7.94947 11.5453 8.16413 11.704C8.3788 11.8627 8.68213 11.942 9.07413 11.942C9.75547 11.942 10.3201 11.9373 10.7681 11.928C11.2255 11.9093 11.6828 11.872 12.1401 11.816L12.3361 13.734C11.8695 13.8927 11.3888 14.0047 10.8941 14.07C10.4088 14.1353 9.80213 14.168 9.07413 14.168C8.03813 14.168 7.20747 14.0093 6.58213 13.692C5.96613 13.3653 5.51813 12.838 5.23813 12.11C4.96747 11.382 4.83213 10.402 4.83213 9.17C4.83213 7.938 4.96747 6.958 5.23813 6.23C5.51813 5.502 5.96613 4.97933 6.58213 4.662C7.20747 4.33533 8.03813 4.172 9.07413 4.172Z" fill="black"/></svg></p>
                            <p>{crews[planetID].names[1]}</p>
                            <p>{crews[planetID].names[2]}</p>
                            <p>{crews[planetID].names[3]}</p>
                            <p className={crews[planetID].names[4] == "blank" ? "blank" : ""}>{crews[planetID].names[4]}</p>
                        </div>
                    </div>
                    <div className="pagebtn">
                        <button onClick={()=> planetID > 0 ? setplanetID(planetID - 1) : "" } className={`${planetID > 0 ? "" : "samar"} prev`}><svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75001 16.1651C1.08333 15.2028 1.08334 12.7972 2.75 11.8349L19.25 2.30866C20.9167 1.34641 23 2.54922 23 4.47372L23 23.5263C23 25.4508 20.9167 26.6536 19.25 25.6913L2.75001 16.1651Z" stroke="white" stroke-width="3"/></svg></button>
                        <button onClick={()=> planetID < 7 ? setplanetID(planetID + 1) : location.href='/mission/tasks' } className="next"><p>NEXT</p><svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button>
                    </div>
                </div>

                <div className="planetsmove">
                    {planetArray}
                </div>
            </Wrapper>
        );
    }else{
        return <Mobile planetID={planetID} setplanetID={setplanetID} warnaplanet={warnaplanet} namaplanet={namaplanet} crews={crews} />
    }
}
    
const Wrapper = Styled.div(({planetID}) =>`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    background-image: url('/img/mission/bg-crewmate.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 88px;

    .blank{
        opacity: 0;
    }
    .samar{
        filter: opacity(0.2);
    }
    .zoomed{
        transform: scale(1.4);
        margin-right: 44px;
        
    }
    .gone{
        filter: opacity(0);
    }
    
    .planetsmove{
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(-${240*(planetID)}px);
        
        transition: 1s;

        .eachplanet{
            width: 240px;
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                transition: 1s;
            }
            p{                
                font-family: Exo2-lit;
                font-style: normal;
                font-weight: 600;
                font-size: 25px;
                line-height: 30px;
                text-align: center;

                color: #FFFFFF;
            }
        }
    }

    .maincontent{
        margin-right: 154px;
        min-width: 250px;

        h1{
            font-family: 'Exo2-med';
            font-style: normal;
            font-weight: bold;
            font-size: 43px;
            line-height: 99.6%;
            margin-bottom: 64px;
            
            color: #FFFFFF;
            
            span{
                color: #AB00FF;
            }
        }
        p.badge{
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 6px;

            display: inline-block;
            padding: 0 4px 2px 4px;

            margin: 0;

            font-family: "Exo2-med";
            font-style: normal;
            font-weight: bold;
            font-size: 17px;
            line-height: 20px;
            /* identical to box height */


            color: #FFFFFF;
        }
    }

    .names{
        margin-top: 20px;

        p{
            font-family: Exo2-med;
            font-style: normal;
            font-weight: 600;
            font-size: 23px;
            line-height: 28px;
            margin: 0;
            margin-bottom: 14px;

            color: #FFFFFF;
        }
    }

    .pagebtn{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 64px;
        margin-bottom: 64px;

        button.prev{
            width: 69px;
            height: 52px;
            
            background: none;
            border: 2.5px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 8px;
            margin-right: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 1s;
            
            &:focus{
                outline: none;
            }
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
            transition: 1s;
            
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
`)
    
    export default Crewmate