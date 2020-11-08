import React, { useState } from 'react'
import Styled from '@emotion/styled'
import { db } from '../../lib/db'
import OtpInput from 'react-otp-input'
import Link from 'next/link'
    
const CheckIn = () => {
    const [planet, setplanet] = useState("")
    const [singkatanPlanet, setsingkatanPlanet] = useState("")
    const [roket, setroket] = useState("")
    const [deskripsi, setdeskripsi] = useState("")
    const [room, setroom] = useState("")
    const [availPlanet, setavailPlanet] = useState([])

    const [isSucceed, setisSucceed] = useState("netral")
    const [isPopUp, setisPopUp] = useState(false)
    
    const [kode, setkode] = useState("")

    
    db.collection('teamdata').get().then(function(querySnapshot) {
        let available = []
        querySnapshot.forEach(function(doc) {     
            available.push(doc.id)            
        })
        setavailPlanet(available)
    });

    
    const closePopUp = (e) => {
        setisPopUp(false)
        setkode("")
        setisSucceed("netral")
    }

    const openPopUp = (e) => {
        e.preventDefault()
        setisPopUp(true)
    }

    const getPlanetOrder = (planetName) => {

        switch (planetName) {
            case "merkurius":
                return 1;
            case "venus":
                return 2;
            case "mars":
                return 3;
            case "jupiter":
                return 4;
            case "saturnus":
                return 5;
            case "uranus":
                return 6;
            case "neptunus":
                return 7;
            case "pluto":
                return 8;
        }
    }
    
    const submitCheckIn = async () => {        
        db.collection('kodeluncur').doc(planet).get().then(function(doc) {    
           const matchCode = doc.data().kode;

            if(kode.toString() == matchCode){
                db.collection("teamdata").doc(planet).set({
                    planet: planet,
                    singkatanPlanet: singkatanPlanet,
                    roket: roket,
                    deskripsi: deskripsi,
                    room: room,
                    num: getPlanetOrder(planet),
                    progress: 0
                })
                .then(function(e) {
                    console.log("Document successfully written!")
                    setplanet("")
                    setsingkatanPlanet("")
                    setroket("")
                    setdeskripsi("")
                    setroom("") 
                    setkode("")
                    setisSucceed("sukses")
                })
                .catch(function(error) {
                    setisSucceed("gagal")
                    console.error("Error writing document: ", error)
                });
            }else{
                setisSucceed("gagal")
            }
        })
    }

    return (
        <Wrapper isPopUp={isPopUp}>
            <div className="container-all">
                <h1>CHECK-IN</h1>
                <h5>Diskusikan persiapanmu dengan team dan lakukan check-in dengan mengisi form dibawah maksimal tanggal 11 Nov</h5>
                <form onSubmit={(e) => openPopUp(e)}>
                    <div className="each-input">
                        <label for="planet">NAMA PLANET</label>
                        <select value={planet} required name="planet" id="" onChange={(e) => setplanet(e.target.value)}>
                            <option disabled selected value="">PILIH TEAM</option>
                            <option disabled={availPlanet.includes('merkurius')} value="merkurius">MERKURIUS {availPlanet.includes('merkurius') ? " [ CHECKED-IN ]": ""}</option>
                            <option disabled={availPlanet.includes('venus')} value="venus">VENUS {availPlanet.includes('venus') ? " [ CHECKED-IN ]": ""}</option>
                            <option disabled={availPlanet.includes('mars')} value="mars">MARS {availPlanet.includes('mars') ? " [ CHECKED-IN ]": ""}</option>
                            <option disabled={availPlanet.includes('jupiter')} value="jupiter">JUPITER {availPlanet.includes('jupiter') ? " [ CHECKED-IN ]": ""}</option>
                            <option disabled={availPlanet.includes('saturnus')} value="saturnus">SATURNUS {availPlanet.includes('saturnus') ? " [ CHECKED-IN ]": ""}</option>
                            <option disabled={availPlanet.includes('uranus')} value="uranus">URANUS {availPlanet.includes('uranus') ? " [ CHECKED-IN ]": ""}</option>
                            <option disabled={availPlanet.includes('neptunus')} value="neptunus">NEPTUNUS {availPlanet.includes('neptunus') ? " [ CHECKED-IN ]": ""}</option>
                            <option disabled={availPlanet.includes('pluto')} value="pluto">PLUTO {availPlanet.includes('pluto') ? " [ CHECKED-IN ]": ""}</option>
                        </select>
                    </div>
                    <div className="each-input" placeholder="Gabungan kata lucu dari nama planetmu">
                        <label for="singkatanPlanet">SINGKATAN</label>
                        <input placeholder="Singkatan lucu nama planetmu" value={singkatanPlanet} required type="text" name="singkatanPlanet" onChange={(e) => setsingkatanPlanet(e.target.value)}/>
                    </div>
                    <div className="each-input">
                        <label for="roket">NAMA ROKET</label>
                        <input placeholder="Nama ide projekmu" value={roket} required type="text" name="roket" onChange={(e) => setroket(e.target.value)}/>
                    </div>
                    <div className="each-input">
                        <label for="deskripsi">DESKRIPSI ROKET</label>
                        <textarea placeholder="Penjelasan singkat idemu" value={deskripsi} required name="deskripsi" id="" cols="30" rows="4" onChange={(e) => setdeskripsi(e.target.value)}></textarea>
                    </div>
                    <div className="each-input">
                        <label for="room">GMEET ROOM</label>
                        <input placeholder="Link gmeet team kamu" value={room} required type="text" name="room" onChange={(e) => setroom(e.target.value)}/>
                    </div>
                    <div className="button">
                        <button type="submit" className="next"><p>INPUT KODE PELUNCURAN</p><svg width="21" height="24" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button>
                    </div>
                    <h5>Kode Peluncuran diperlukan untuk check-in, didapat dari challenge yang kalian pecahkan <a className="adown" href="/challenge.rar" target="_blank" download>Download Challenge</a> Setiap team memiliki kode peluncuran yang berbeda dari yang lainnya</h5>
                
                </form>
            </div>

            <div className="popup">
                <div className="popup-box">
                    <div className="closer" onClick={() => closePopUp()}><svg width="20" height="20" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="68" height="68" rx="12" fill="#DC0F2C"/><path d="M12.0491 12.0491C13.4479 10.6503 15.7159 10.6503 17.1147 12.0491L55.9509 50.8853C57.3497 52.2841 57.3497 54.5521 55.9509 55.9509C54.5521 57.3497 52.2841 57.3497 50.8853 55.9509L12.0491 17.1147C10.6503 15.7159 10.6503 13.4479 12.0491 12.0491Z" fill="white"/><path d="M55.9509 12.0491C57.3497 13.4479 57.3497 15.7159 55.9509 17.1147L17.1147 55.9509C15.7159 57.3497 13.4479 57.3497 12.0491 55.9509C10.6503 54.5521 10.6503 52.2841 12.0491 50.8853L50.8853 12.0491C52.2841 10.6503 54.5521 10.6503 55.9509 12.0491Z" fill="white"/></svg></div>
                    {isSucceed == "sukses" ? 
                      <>
                        <p>BERHASIL CHECK-IN</p>
                        <Link href="/progress"><button className="btn-regular">PROGRESS</button></Link>
                      </>
                    : isSucceed == "gagal" ?
                    <>
                        <p>GAGAL CHECK-IN</p> 
                        <button className="btn-regular" onClick={() => closePopUp()}>TUTUP</button>
                      </>
                    :
                      <>
                        <p>KODE PELUNCURAN</p>
			            <p className="planet-code">{planet}</p> 
                        <OtpInput value={kode} onChange={(kode) => setkode(kode)} numInputs={6} isInputNum={true} inputStyle={"otp"} focusStyle={"otp-focus"}/>
                        <button type="submit" onClick={submitCheckIn} className={`check ${kode.length !== 6 ? 'check-off' : ''}`}>CHECK IN NOW</button>
                      </>
                    }
                </div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({isPopUp})=>`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;
    overflow-y: scroll; 

    background-image: url('/img/mission/bg-crewmate.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


	.planet-code{
		font-family: 'Exo2-reg';
        font-style: normal;
        font-weight: 500;
        font-size: 12px !important;
        line-height: 22px;
		margin: 0px 0 24px 0;
		text-transform: uppercase !important;
                
        color: #FFFFFF;
	} 
    .adown{
        color: orange;
        text-decoration: underline;
    }

    .btn-regular{
        border: none;
        background: #fff;
        padding: 8px 12px;
        border-radius: 6px;

        font-family: 'Exo2-eb';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        
        color: black;
    }

    .popup{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: ${isPopUp ? "flex" : "none"};
        justify-content: center;
        align-items: center;
        z-index: 10;
        background: rgba(0,0,0,0.8);

        

        .popup-box{
            padding: 28px 0;
            max-width: 500px;
            width: 85%;
            min-width: 320px;
            background: #04020b;
            box-shadow: 0 0 12px rgba(255,255,255,0.3);
            border: 2px solid white;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: 0.5s;
            position: relative;

            .closer{
                position: absolute;
                top: 6px;
                right: 6px;
                height: 20px;
                width: 20px;
            }
            p{
                margin: 0;
                margin-bottom: 18px ;
                font-family: 'Exo2-reg';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 22px;
                
                color: #FFFFFF;
            }
            .otp{
                border: none;
                border-radius: 8px;
                margin: 4px;
                width: 42px !important;
                padding: 10px 0;
                background: #201938;
                color: white;
                font-size: 24px;
                font-family: 'Exo2-med';
            }
            .otp-focus{
                outline: none;
                box-shadow: inset 0 0 8px #d61249;
            }
        }
    }

    h5{
        margin: 0;
        margin-bottom: 24px ;
        font-family: 'Exo2-lit';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        margin-top: 0;
        margin-bottom: 42px;
        color: #FFFFFF;
    }

    div.button{
        margin-top: 24px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .check-off{
        height: 0 !important;
        opacity: 0 !important;
        color: rgba(0,0,0,0) !important;
    }
    .check{
        height: 52px;
        opacity: 1;
        margin-top: 24px;
        padding: 0 16px;
        
        background: #dc0f2c;
        border-radius: 8px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;

        font-family: 'Exo2-med';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 34px;
        color: white;
    }
    button.next{
        height: 42px;
        padding: 0 8px;
        
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #FFF;
        padding-left: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
        margin-bottom: 20px;
    
        p{
            margin: 0 12px 2px 0;
            font-family: 'Exo2-med';
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 34px;
            color: #180F4A;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            display: inline;
        }
    }

    .container-all{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 60px;
        padding-bottom: 60px;
        max-width: 600px;
        width: 85%;
        min-width: 320px;

        h1{
            width: 100%;
            text-align: center;
            font-family: 'Exo2-med';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 20px;
            
            color: #FFFFFF;
            text-transform: uppercase;
        }
        
        form{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

            select, input, textarea{
                width: 100%;
                margin: 12px 0;
                padding: 8px 16px;
            }
            .each-input{
                width: 100%;
                margin: 12px 0;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
            }
            label{
                font-family: 'Exo2-reg';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                
                color: #FFFFFF;
            }
            input{
                background: #050216 ;
                border: 1px solid #FFFFFF;
                box-sizing: border-box;
                border-radius: 10px;
                color: white;
        
                
                -webkit-appearance: none;
                -moz-appearance: none;
                text-indent: 1px;
                text-overflow: '';
        
                font-family: 'Exo2-reg';
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 34px;
            }
            textarea{
                background: #050216 ;
                border: 1px solid #FFFFFF;
                box-sizing: border-box;
                border-radius: 10px;
                color: white;
                resize: none;
                
                -webkit-appearance: none;
                -moz-appearance: none;
                text-indent: 1px;
                text-overflow: '';
        
                font-family: 'Exo2-reg';
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 34px;
            }

            select{
                background: #050216 url('/img/customselect.svg');
                background-size: contain;
                background-position: right;
                background-repeat: no-repeat;
                border: 1px solid #FFFFFF;
                box-sizing: border-box;
                border-radius: 10px; 
                color: white;
        
                
                -webkit-appearance: none;
                -moz-appearance: none;
                text-indent: 1px;
                text-overflow: '';
        
                font-family: 'Exo2-reg';
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 34px;
        
                color: #FFFFFF;
                
                &:focus{
                    outline: none;
                }
            }
            option{
                margin: 8px 0;
            }
        

        }
    }
`)
    
export default CheckIn
