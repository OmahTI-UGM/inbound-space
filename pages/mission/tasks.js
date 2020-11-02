import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
    
const Tasks = () => {
    const [screen, setScreen] = useState(undefined)
    const [taskID, settaskID] = useState(1)
    const handleWindowSizeChange = () => setScreen(window.innerWidth)

    useEffect(() => {
        setScreen(window.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange)
    }, []);
    
    return (
        <Wrapper screen={screen}>
            <div className="container">
                <div className="task-container">
                    <div className="taskbox">

                    </div>
                    {taskID == 2 && <img src="/img/mission/rocketside.svg" alt=""/>}
                </div>

                <div className="scrolling">
                    <div className="taskbox2">

                    </div>

                    {taskID == 1 &&
                    <>
                        <div className="boxer">
                            <p>Setiap team telah mendapat nama planet, <br/> kemudian buatlah singkatan lucu dan menarik dari nama planet team kamu</p>
                        </div>
                        <div className="boxer pict">
                            <img src="/img/mission/tasks/namaan.svg" alt=""/>
                        </div>
                        <div className="boxer">
                            <p>Nama planet akan disubmit pada tahap CHECK IN (13 NOV)</p>
                        </div>
                    </>
                    }
                    {taskID == 2 &&
                    <>
                        <div className="boxer">
                            <p>INBOUND adalah program bagi anggota baru yang bertujuan untuk memberikan pengalaman mengerjakan projek sebagai team</p>
                        </div>
                        <div className="boxer">
                            <p>Projek yang dikerjakan adalah ide kalian sendiri dan itu bisa berupa produk game, mobile app, web dan lain sebagainya sesuai kapabilitas kalian</p>
                        </div>
                        <div className="boxer">
                            <p>Nah dalam kisah ini projek kalian adalah kendaraan kalian (roket) menuju planet masing2 yang mana menentukan keberhasilan misi kalian menyelamatkan umat manusia</p>
                        </div>
                        <div className="boxer">
                            <p>Diberikan waktu satu bulan untuk menjalankan misi penting ini. Setiap minggunya akan ada progress report untuk saling mempresentasikan perkembangan proyek</p>
                        </div>
                        <div className="boxer">
                            <p>Di akhir nanti akan ada malam penghargaan bagi yang berhasil menyelesaikan dan penentuan team terbaik serta planet yang menjadi tujuan umat manusia mengungsi</p>
                        </div>
                    </>
                    }
                    {taskID == 3 &&
                    <>
                        <div className="boxer">
                            <p>Nama produk yang kalian kerjakan akan jadi nama Roket yang kalian kendarai, jadi buatlah nama yang cukup kece untuk project mu, ya!</p>
                        </div>
                        <div className="boxer pict">
                            <img src="/img/mission/tasks/rocketnaming.svg" alt=""/>
                        </div>
                    </>
                    }
                    {taskID == 4 &&
                    <>
                        <div className="boxer">
                            <p>SETIAP TEAM TELAH MENDAPAT NAMA PLANET,  KEMUDIAN BUATLAH SINGKATAN LUCU DARI NAMA PLANET KAMU</p>
                        </div>
                        <div className="boxer pict">
                            <img src="/img/mission/tasks/namaan.svg" alt=""/>
                        </div>
                    </>
                    }
                    {taskID == 5 &&
                    <>
                        <div className="boxer">
                            <p>SETIAP TEAM TELAH MENDAPAT NAMA PLANET,  KEMUDIAN BUATLAH SINGKATAN LUCU DARI NAMA PLANET KAMU</p>
                        </div>
                        <div className="boxer pict">
                            <img src="/img/mission/tasks/namaan.svg" alt=""/>
                        </div>
                    </>
                    }
                    {taskID == 6 &&
                    <>
                        <div className="boxer">
                            <p>SETIAP TEAM TELAH MENDAPAT NAMA PLANET,  KEMUDIAN BUATLAH SINGKATAN LUCU DARI NAMA PLANET KAMU</p>
                        </div>
                        <div className="boxer pict">
                            <img src="/img/mission/tasks/namaan.svg" alt=""/>
                        </div>
                    </>
                    }
                    <div className="pagebtn">
                        <button onClick={()=> taskID > 1 ? settaskID(taskID - 1) : "" } className={`${taskID > 0 ? "" : "samar"} prev`}><svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75001 16.1651C1.08333 15.2028 1.08334 12.7972 2.75 11.8349L19.25 2.30866C20.9167 1.34641 23 2.54922 23 4.47372L23 23.5263C23 25.4508 20.9167 26.6536 19.25 25.6913L2.75001 16.1651Z" stroke="white" stroke-width="3"/></svg></button>
                        <button onClick={()=> {taskID < 6 ? () => {settaskID(taskID + 1)} : location.href='/mission'}} className="next"><p>NEXT</p><svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({screen}) =>`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url('/img/mission/bg-tasks.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .container{
        position: relative;
        max-width: 1247px;
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: ${screen < 1002 ? "center" :"space-between"};
        align-items: flex-start;

        .task-container{
            ${screen < 1002 ? "display: none;" : ""}

            img{
                padding: 20px;
                width: 100%;
            }
        }
        .taskbox{
            min-width: 316px;
            width: 316px;
            height: 159.86px;
            background-image: url('/img/mission/taskbox.svg');
            background-size: cover;
            background-position: right;
            border-radius: 8px;
            background-repeat: no-repeat;
            margin: 20px;
            margin-top: 40px;
        }
        .taskbox2{
            min-width: 316px;
            width: 100%;
            height: 159.86px;
            border-radius: 8px;
            background-image: url('/img/mission/taskbox.svg');
            background-size: cover;
            background-position: right;;
            background-repeat: no-repeat;
            margin-bottom: 36px;
            ${screen > 1002 ? "display: none;" : ""}
        }
        .scrolling{
            position: relative;
            height: 100%;
            width: 100%;
            min-width: 350px;
            ${screen < 1002 ? "max-width: 450px":""};
            margin: 20px;
            margin-top: 0;
            padding-top: 40px;
            overflow-y: scroll;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            
            &::-webkit-scrollbar {
                display: none;
            }

            .boxer{
                border: 2px solid #FFFFFF;
                width: 100%;
                box-sizing: border-box;
                border-radius: 8px;
                margin-bottom: 36px;

                p{
                    font-family: 'Exo2-reg';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 22px;
                    line-height: 30px;
                    margin: 28px 32px;
                    color: #FFFFFF;
                }
            }
            .pict{
                border: none;
                img{
                    width: 100%;
                }
            }
        }
    }

    .pagebtn{
        display: flex;
        justify-content: ${screen < 1002 ? "center" : "flex-end"};
        align-items: center;
        margin-bottom: 64px;

        button.prev{
            width: 69px;
            height: 52px;
            
            background: none;
            border: 2.5px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 8px;
            margin-right: 8px;
            display: unset;
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
    
export default Tasks