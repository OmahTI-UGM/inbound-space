import React, { useState } from 'react'
import Styled from '@emotion/styled'
import { db } from '../../lib/db'
import OtpInput from 'react-otp-input'
    
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

    
    const openPopUp = (e) => {
        e.preventDefault()
        setisPopUp(true)
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
                   room: room
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
        }
    })
    }

    return (
        <Wrapper isPopUp={isPopUp}>
            <div className="container-all">
                <h1>CHECK-IN</h1>
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
                        <input value={singkatanPlanet} required type="text" name="singkatanPlanet" onChange={(e) => setsingkatanPlanet(e.target.value)}/>
                    </div>
                    <div className="each-input">
                        <label for="roket">NAMA ROKET</label>
                        <input value={roket} required type="text" name="roket" onChange={(e) => setroket(e.target.value)}/>
                    </div>
                    <div className="each-input">
                        <label for="deskripsi">DESKRIPSI ROKET</label>
                        <textarea value={deskripsi} required name="deskripsi" id="" cols="30" rows="4" onChange={(e) => setdeskripsi(e.target.value)}></textarea>
                    </div>
                    <div className="each-input">
                        <label for="room">GMEET ROOM</label>
                        <input value={room} required type="text" name="room" onChange={(e) => setroom(e.target.value)}/>
                    </div>
                    <div className="button">
                        <button type="submit" className="next"><p>CHECK IN</p><svg width="21" height="24" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button>
                    </div>
                </form>
            </div>

            <div className="popup">
                    {isSucceed == "sukses" ? 
                    <div className="popup-box">
                        <p>BERHASIL CHECK-IN</p> 
                    </div>
                    : isSucceed == "gagal" ?
                    <div className="popup-box">
                        <p>GAGAL CHECK-IN</p> 
                    </div>
                    :
                    <div className="popup-box">
                        <p>KODE PELUNCURAN</p>
                        <OtpInput value={kode} onChange={(kode) => setkode(kode)} numInputs={6} isInputNum={true} inputStyle={"otp"} focusStyle={"otp-focus"}/>
                        <button type="submit" onClick={submitCheckIn} className={`check ${kode.length !== 6 ? 'check-off' : ''}`}>CHECK IN NOW</button>
                    </div>
                    }
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
            p{
                margin: 0;
                margin-bottom: 24px ;
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

    div.button{
        margin-top: 24px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
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
        padding-top: 120px;
        max-width: 600px;
        width: 85%;
        min-width: 320px;
        
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