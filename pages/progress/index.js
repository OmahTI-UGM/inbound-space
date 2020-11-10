import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'

import { db } from '../../lib/db'
    
const Index = () => {
    const [checkedInList, setcheckedInList] = useState([])
    const [teamdata, setteamdata] = useState([])
    const [prog, setprog] = useState([])

    const warnaplanet = ["#44A6E7", "#EDBA3A", "#F0A036", "#0BD6D6", "#F2A15D", "#2DC6E0", "#02A6DE", "#F562DC"]

    useEffect(() => {
        db.collection('teamdata').orderBy('num', 'asc').get().then(function(querySnapshot) {
            let available = []
            let data = []
            querySnapshot.forEach(function(doc) {     
                available.push(doc.id)     
                data.push(doc.data())       
            })
            setcheckedInList(available)
            setteamdata(data)
        });
        
        db.collection('prog').orderBy('num', 'asc').get().then(function(querySnapshot) {
            let progdata = []
            querySnapshot.forEach(function(doc) {
                progdata.push(doc.data().progress)
            })
            setprog(progdata)
        });
    }, [])
    
    return (
        <Wrapper>
            <div className="container-all">
                <h1>PROGRESS OVERVIEW</h1>
                <div className="rocket8">
                    <div className="group4">
                        <div className="each-con">
                            <div className={`each-rocket r1 ${checkedInList.includes('merkurius') ? "" : "samar"}`}></div>
                            <p className="p-prog">{prog[0]}%</p>
                            <p className="p-chkin">{checkedInList.includes('merkurius') ? "CHECKED-IN" : "PREPARING"}</p>
                        </div>
                        <div className="each-con">
                            <div className={`each-rocket r2 ${checkedInList.includes('venus') ? "" : "samar"}`}></div>
                            <p className="p-prog">{prog[1]}%</p>
                            <p className="p-chkin">{checkedInList.includes('venus') ? "CHECKED-IN" : "PREPARING"}</p>
                        </div>
                        <div className="each-con">
                            <div className={`each-rocket r3 ${checkedInList.includes('mars') ? "" : "samar"}`}></div>
                            <p className="p-prog">{prog[2]}%</p>
                            <p className="p-chkin">{checkedInList.includes('mars') ? "CHECKED-IN" : "PREPARING"}</p>
                        </div>
                        <div className="each-con">
                            <div className={`each-rocket r4 ${checkedInList.includes('jupiter') ? "" : "samar"}`}></div>
                            <p className="p-prog">{prog[3]}%</p>
                            <p className="p-chkin">{checkedInList.includes('jupiter') ? "CHECKED-IN" : "PREPARING"}</p>
                        </div>
                    </div>
                    <div className="group4">
                        <div className="each-con">
                            <div className={`each-rocket r5 ${checkedInList.includes('saturnus') ? "" : "samar"}`}></div>
                            <p className="p-prog">{prog[4]}%</p>
                            <p className="p-chkin">{checkedInList.includes('saturnus') ? "CHECKED-IN" : "PREPARING"}</p>
                        </div>
                        <div className="each-con">
                            <div className={`each-rocket r6 ${checkedInList.includes('uranus') ? "" : "samar"}`}></div>
                            <p className="p-prog">{prog[5]}%</p>
                            <p className="p-chkin">{checkedInList.includes('uranus') ? "CHECKED-IN" : "PREPARING"}</p>
                        </div>
                        <div className="each-con">
                            <div className={`each-rocket r7 ${checkedInList.includes('neptunus') ? "" : "samar"}`}></div>
                            <p className="p-prog">{prog[6]}%</p>
                            <p className="p-chkin">{checkedInList.includes('neptunus') ? "CHECKED-IN" : "PREPARING"}</p>
                        </div>
                        <div className="each-con">
                            <div className={`each-rocket r8 ${checkedInList.includes('pluto') ? "" : "samar"}`}></div>
                            <p className="p-prog">{prog[7]}%</p>
                            <p className="p-chkin">{checkedInList.includes('pluto') ? "CHECKED-IN" : "PREPARING"}</p>
                        </div>
                    </div>
                </div>
                <p className="reportedby"><img src="https://img.icons8.com/pastel-glyph/64/ffffff/info--v1.png"/>presentase progress dilaporkan oleh mantan astro</p>

                <div className="prog-detail">
                    <h2>DETAILS</h2>
                    <div className="detail-con">
                        {teamdata.map((td, i)=>(
                            <div className="each-detail" key={i}>
                                <div className="planetimg" style={{backgroundImage: `url('/img/8planet/${td.num}.svg')`}}></div>
                                <div className="content">
                                    <h3 style={{color: warnaplanet[i]}}>{td.planet}</h3>
                                    <p className="team">TIM {td.singkatanPlanet}</p>
                                    <p className="regular">{td.roket}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    color: white;
    overflow-y: scroll;
    background-image: url('/img/mission/bg-tasks.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .team{
        text-transform: none !important;
        font-family: Exo2-lit;
    }

    .reportedby{
        font-family: Exo2-lit;
        text-align: left;
        margin-top: 0;
        margin-bottom: 54px;
        color: rgba(255,255,255,0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        
        img{
            height: 20px;
            margin-top: 6px;
            margin-right: 12px;
            
        }

    }
    .regular{
        border: none;
        background: rgba(255,255,255,0.2);
        padding: 8px 12px;
        border-radius: 6px;

        font-family: 'Exo2-med';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        display: inline-block;

        text-transform: uppercase;
        
        color: white;
        margin-top: 12px !important;
    }

    h1, h2, h3{
        width: 100%;
        text-align: center;
        font-family: 'Exo2-med';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        
        color: #FFFFFF;
        text-transform: uppercase;
    }
    h2{
        font-size: 28px;
        margin-top: 32px;
    }
    h3{
        font-size: 28px;
        text-align: left;
        margin: 0;
        margin-bottom: 12px;
    }
    
    .each-detail{
        width: 100%;
        border: 2px solid white;
        border-radius: 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 24px 0;
        padding: 6px 0;
        padding-right: 12px;

        .planetimg{
            margin: 24px;
            height: 150px;
            width: 150px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
        .content{
            min-width: 216px;
        }
        p{
            margin: 0;
            text-transform: uppercase;
        }
    }

    .container-all{
        width: 85%;
        max-width: 800px;
        min-width: 320px;
        padding-top: 32px;
    }
    .samar{
        filter: opacity(0.2) saturate(0);
    }
    .rocket8{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 56px 0 24px 0;
        
        .group4{
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .each-con{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                
                p{
                    margin: 4px;
                }
                .p-chkin{
                    font-family: 'Exo2-lit';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 10px;
                    line-height: 22px;
                    margin: 0;
                    color: #FFFFFF;
                }
                .p-prog{
                    font-family: 'Exo2-eb';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 22px;
                    margin-top: 0;
                    
                    color: #FFFFFF;
                }
                
                .each-rocket{
                    width: 72px;
                    height: 72px;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin: 12px;
                }
                .r1{
                    background-image: url('/img/progress/roket/r1.svg');
                }
                .r2{
                    background-image: url('/img/progress/roket/r2.svg');
                }
                .r3{
                    background-image: url('/img/progress/roket/r3.svg');
                }
                .r4{
                    background-image: url('/img/progress/roket/r4.svg');
                }
                .r5{
                    background-image: url('/img/progress/roket/r5.svg');
                }
                .r6{
                    background-image: url('/img/progress/roket/r6.svg');
                }
                .r7{
                    background-image: url('/img/progress/roket/r7.svg');
                }
                .r8{
                    background-image: url('/img/progress/roket/r8.svg');
                }
            }
        }
    }
        
`
    
export default Index