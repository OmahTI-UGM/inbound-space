import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'

const TaskList = ({taskID}) => {
    const [date, setdate] = useState("-");
    const [week, setweek] = useState("-");

    useEffect(() => {
        let date1 = new Date(); 
        let date2 = new Date("12/6/2020"); 
        
        // To calculate the time difference of two dates 
        let timeDiffer = date2.getTime() - date1.getTime()
        
        // To calculate the no. of days between two dates 
        let dayDiffer = timeDiffer / (1000 * 3600 * 24);
        setdate(Math.trunc(dayDiffer)-1)
        let weekDiffer = timeDiffer / (1000 * 3600 * 24 * 7);
        weekDiffer = -weekDiffer + 4;
        setweek(Math.trunc(weekDiffer))
    }, [])

    return (
        <div className="list-task">
            <p className={taskID == 1 && "yellow"}>Planet: Buat singkatan</p>
            <p className={taskID == 2 && "yellow"}>Go to your planet</p>
            <p className={taskID == 3 && "yellow"}>Rocket: Nama ide projek</p>
            <p className={taskID == 4 && "yellow"}>Crewmates Meetings (∞)</p>
            <p className={taskID == 5 && "yellow"}>Progress Report ({week}/4)</p>
            <p className={taskID == 6 ? "red" : "green"}>FINAL PLANET AWARDING{taskID == 6 && ` (${date}d)`}</p>
        </div>
    );
}

    
const Tasks = () => {
    const [screen, setScreen] = useState(undefined)
    const [taskID, settaskID] = useState(1)
    const [red, setred] = useState(true)
    const handleWindowSizeChange = () => setScreen(window.innerWidth)

    useEffect(() => {
        setScreen(window.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange)

        const interval = setInterval(() => {
            setred(!red)
          }, 1000);
      
          return () => clearInterval(interval);
    }, [red]);

    function stateAndTop(){
        settaskID(taskID + 1);
        document.getElementById('scrolling').scrollTop = 0;
    }

    return (
        <Wrapper screen={screen} red={red}>
            <div className="container">
                <div className="task-container">
                    <div className="taskbox">
                        <TaskList taskID={taskID} />
                    </div>
                    {taskID == 2 && <img src="/img/mission/rocketside.svg" alt=""/>}
                </div>

                <div className="scrolling" id="scrolling">
                    <div className="taskbox2">
                        <TaskList taskID={taskID} />
                    </div>

                    {taskID == 1 &&
                    <>
                        <div className="boxer">
                            <p>Setiap team telah mendapat nama planet, kemudian buatlah singkatan lucu dan menarik dari nama planet team kamu</p>
                        </div>
                        <div className="boxer pict">
                            <img src="/img/mission/tasks/namaan.svg" alt=""/>
                        </div>
                        <div className="boxer">
                            <p>Nama planet disubmit pada <a href="/check-in" class="ckin">/CHECK-IN</a> sebelum 13 NOV</p>
                        </div>
                    </>
                    }
                    {taskID == 2 &&
                    <>
                        <div className="boxer">
                            <p>INBOUND adalah program bagi anggota baru yang bertujuan untuk memberikan pengalaman mengerjakan project sebagai team</p>
                        </div>
                        <div className="boxer">
                            <p>Project yang dikerjakan adalah ide kalian sendiri dan itu bisa berupa produk game, mobile app, web dan lain sebagainya sesuai kapabilitas kalian</p>
                        </div>
                        <div className="boxer">
                            <p>Nah dalam kisah ini project kalian adalah roket untuk menuju planet masing2 yang mana menentukan keberhasilan misi kalian menuju planet tersebut</p>
                        </div>
                        <div className="boxer">
                            <p>Diberikan waktu satu bulan untuk membangun roketmu. Setiap minggunya akan ada progress report untuk saling mempresentasikan perkembangan project</p>
                        </div>
                        <div className="boxer">
                            <p>Di akhir nanti akan ada malam penghargaan (awarding) dan penentuan team terbaik serta planet yang menjadi tujuan umat manusia mengungsi</p>
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
                        <div className="boxer">
                            <p>Nama roket disubmit pada <a href="/check-in" className="ckin">/CHECK-IN</a> sebelum 13 NOV</p>
                        </div>
                    </>
                    }
                    {taskID == 4 &&
                    <>
                        <div className="boxer">
                            <img class="tumblr" src={`/img/mission/tasks/emermeeting${screen < 1002 ? "-m" : ""}.png`} alt=""/>
                            <p>Tiap team diwajibkan untuk membuat gmeet sebagai tempat bagi team kalian untuk bahas project</p>
                        </div>
                        <div className="boxer">
                            <p>Link gmeet dikumpulkan pada <a href="/check-in" className="ckin">/CHECK-IN</a> sebelum 13 NOV. Setiap kali gmeet jangan lupa untuk record dan mencatat notulensi meeting (dikumpulkan setelahnya)</p>
                        </div>
                        <div className="boxer">
                            <p>Selama menjalankan misi, kalian punya pendamping seorang mantan astronot yang akan membimbing dan memberi semangat</p>
                        </div>
                    </>
                    }
                    {taskID == 5 &&
                    <>
                        <div className="boxer">
                            <img class="tumblr" src={`/img/mission/tasks/bigmeet${screen < 1002 ? "-m" : ""}.png`} alt=""/>
                            <p>Setiap sabtu akan ada meeting bersama semua team dan panitia serta juri untuk membahas perkembangan project</p>
                        </div>
                        <div className="boxer">
                            <p>Presentasikan dan ceritakan tentang progress, kendala dan fitur yang akan ditambahkan selanjutnya pada project team kamu</p>
                        </div>
                        <div className="boxer">
                            <p>Juri akan mencatat dan menilai kinerja kalian, serta memberikan kritik, saran dan solusi atas kendala yang kalian alami</p>
                        </div>
                    </>
                    }
                    {taskID == 6 &&
                    <>
                        <div className="boxer columnbox">
                            <p>Setelah dikerjakan selama satu bulan, di akhir nanti akan ada awarding untuk tiap kategori di atas. Pastikan team kalian menjadi pemenangnya, ya! (dapet hadiah)</p>
                            {screen > 1002 && 
                                <div className="lebihlanjut">
                                    <p>Keterangan tiap kategori bisa dilihat di</p>
                                    <Link href="/awards"><a>AWARDS</a></Link>
                                </div>
                            }
                        </div>
                        <div className="boxer pict">
                            <img src="/img/mission/tasks/nomination.svg" alt=""/>
                        </div>
                        {screen < 1002 &&
                            <div className="boxer">
                                <p>Keterangan tiap kategori bisa dilihat di <a href="/awards" className="ckin">/AWARDS</a></p>
                            </div>
                        }
                    </>
                    }
                    <div className="pagebtn">
                        <button onClick={()=> taskID > 1 ? settaskID(taskID - 1) : "" } className={`${taskID > 1 ? "" : "samar"} prev`}><svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75001 16.1651C1.08333 15.2028 1.08334 12.7972 2.75 11.8349L19.25 2.30866C20.9167 1.34641 23 2.54922 23 4.47372L23 23.5263C23 25.4508 20.9167 26.6536 19.25 25.6913L2.75001 16.1651Z" stroke="white" stroke-width="3"/></svg></button>
                        <button onClick={()=> {taskID < 6 ? stateAndTop() : location.href='/mission'}} className="next"><p>NEXT</p><svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({screen, red}) =>`
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

    .samar{
        filter: opacity(0.2);
    }

    .container{
        position: relative;
        max-width: 1247px;
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: ${screen < 1002 ? "center" :"space-between"};
        align-items: flex-start;
        border: none;
        
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
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
        }
        .taskbox2{
            min-width: 316px;
            width: 100%;
            height: 180px;
            border-radius: 8px;
            background-image: url('/img/mission/taskbox-m.svg');
            background-size: cover;
            background-position: right;;
            background-repeat: no-repeat;
            margin-bottom: 36px;
            border: none;
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            ${screen > 1002 ? "display: none;" : ""}
            padding-bottom: 20px;
        }
        .list-task{
            padding-left: 24px;
            p{
                margin: 0;
                font-family: Exo2-lit;
                font-style: normal;
                font-size: 16px;
                line-height: 22px;
                text-shadow: #000 0px 0px 3px,   #000 0px 0px 3px,   #000 0px 0px 3px,
                             #000 0px 0px 3px,   #000 0px 0px 3px,   #000 0px 0px 3px;
                color: #FFFFFF;
                border: none;
            }
            .yellow{
                color: #F0C419;
                font-family: Exo2-med;
                text-transform: uppercase;
            }
            .green{
                color: #00EF6E;
                font-family: Exo2-med;
            }
            .red{
                color: ${red ? "#ED1C24" : "white"};
                font-family: Exo2-med;
            }
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
            
            
            .boxer{
                border: 2px solid #FFFFFF;
                width: 100%;
                box-sizing: border-box;
                border-radius: 8px;
                margin-bottom: 36px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 28px 32px;

                ${screen < 1002 ? "flex-direction: column;" : ""}

                img.tumblr{
                    height: ${screen < 1002 ? "100%" : "102px"};
                    width: ${screen < 1002 ? "100%" : "102px"};
                    margin-${screen < 1002 ? "bottom" : "right"}: 28px;
                    border-radius: 12px;
                }

                p{
                    font-family: 'Exo2-reg';
                    font-style: normal;
                    font-weight: normal;
                    font-size: ${screen < 1002 ? "18px" : "22px"};
                    line-height: ${screen < 1002 ? "25px" : "30px"};
                    color: #FFFFFF;
                    margin: 0;
                    
                }
                .ckin{
                    color: #F0A036;
                    margin: 0 4px;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
            .columnbox{
                flex-direction: column;
                align-items: flex-start;
                
                .lebihlanjut{
                    height: 60px;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 12px 0 22px;
                    margin-top: 40px;

                    a{
                        width: 139px;
                        height: 41px;
                        left: 1094px;
                        top: 481px;

                        background: #FFFFFF;
                        border-radius: 6px;

                        font-family: 'Exo2-med';
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 34px;
                        text-align: center;

                        color: #050216;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    p{
                        margin: 0;
                    }
                }
            }
            .pict{
                border: none;
                padding: 0;
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
    
export default Tasks