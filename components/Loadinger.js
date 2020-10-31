import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
    
const Loadinger = ({beginLoad, date}) => {  
    const [randomer, setrandomer] = useState(Math.floor(Math.random()*5))
    
    useEffect(() => {
        const interval = setInterval(() => { 
            setrandomer(Math.floor(Math.random()*(barWords.length-1)))
        }, 3000)
      
        return () => clearInterval(interval);
    }, [randomer])

    let barWords = ['SEGERA...', 'NANTIKAN...', 'SIAP-SIAP...', 'SABAR...', 'GA LAMA LAGI...', 'TUNGGU AJA...', 'BENTAR-BENTAR...', 'SEK...', 'NTAR YA...', 'SABARIN AJA...']

    return (
        <Wrapper beginLoad={beginLoad} date={date}>
            <div className="borderer">
                <div className="loadbar">
                    
                </div>
                <p>{date == 0 ? "TODAY!!!" : date == 1 ? "SEBENTAR LAGI!" : barWords[randomer]}</p>
            </div>
            <p>COMING SOON</p>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({beginLoad, date}) =>`
    width: 267px;
    position: fixed;
    top: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    
    .borderer{
        position: relative;
        width: 267px;
        height: 53px;

        border: 4px solid #D6D6D6;
        box-sizing: border-box;
        border-radius: 11px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .loadbar{
            margin-left: 4px;
            width: ${beginLoad ? 49 + (-date + 8)*6 +'%' : "0"};
            height: 39px;

            background: linear-gradient(180deg, #F0C419 26.04%, #EEB114 26.05%);
            border-radius: 6px;
            transition: 2s;
            transition-delay: 1s;
        }
        p{
            position: absolute;
            left: 16px;
            font-family: 'Exo2-eb';
            font-style: normal;
            font-size: 18px;
            line-height: 102.8%;
            /* or 20px */
            
            filter: opacity(${beginLoad ? 1 : 0});
            transition: 0.5s;
            transition-delay: 3s;

            color: #050216;
        }
    }
    p{
        font-family: Raleway;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 21px;

        color: #FFFFFF;
    }
`)
    
export default Loadinger