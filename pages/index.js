import Head from 'next/head'
import React from 'react'
import Styled from '@emotion/styled'
import LayoutNav from '../components/layouts/Nav'
import Link from 'next/link'
  
const Index = () => {
  return (
      <Backlayer>
        <Head>
          <title>Inbound 2020</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Wrapper>
          <div className="upper">
            <h4>WELCOME TO</h4>
            <h2>2020 inbound</h2>
            <h1>SPACE <br/> PROGRAM</h1>
          </div>
          <div className="lower">
            <Notifier text="Siap untuk menjalankan misinya? simak kisahnya dahulu..." position={1} />
            <div className="fourbtn">
              <Link href="/story"><button style={{backgroundImage: "url('/img/fourbtn/story.svg')"}}>STORY</button></Link >
              <Link href="/mission"><button style={{backgroundImage: "url('/img/fourbtn/mission.svg')"}}>MISSION</button></Link >
              <Link href="/check-in"><button style={{backgroundImage: "url('/img/fourbtn/checkin.svg')"}}>CHECK-IN</button></Link >
              <Link href="/progress"><button style={{backgroundImage: "url('/img/fourbtn/progress.svg')"}}>PROGRESS</button></Link >
            </div>
          </div>
        </Wrapper>
      </Backlayer>
  );
}

const Notifier = ({text, position}) => {
  return (
    <div className="notif-div">
      <p className="notif-msg">{text}</p>
      <svg className="notif-svg" width="17" height="34" viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.01781 33.0365C9.0182 33.0361 9.01865 33.0358 9.01905 33.0353L15.8074 26.2141C16.3159 25.7031 16.314 24.8766 15.8029 24.3679C15.2919 23.8593 14.4654 23.8612 13.9568 24.3723L9.39919 28.952L9.39919 1.30544C9.39919 0.584447 8.81475 -3.22273e-07 8.09375 -3.53789e-07C7.37275 -3.85305e-07 6.78831 0.584447 6.78831 1.30544L6.7883 28.952L2.23074 24.3723C1.72214 23.8613 0.895594 23.8593 0.384578 24.3679C-0.126569 24.8766 -0.128331 25.7032 0.380139 26.2142L7.16845 33.0354C7.16884 33.0358 7.1693 33.0361 7.16969 33.0366C7.67999 33.5478 8.50921 33.5462 9.01781 33.0365Z" fill="#484F93"/>
      </svg>

      <style>{`
        .notif-div{
          margin-left: ${254*(position-1)}px;
          padding-left: 4px;
        }
        .notif-msg{
          width: 274px;
          font-family: 'Exo2-reg';
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;

          color: #484F93;
        }
        .notif-svg{
          margin-left: 4px;
        }
      
      `}</style>
    </div>
  );
}
  
const Wrapper = Styled.div`

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-image: url('/img/indexbg.svg');
  
  background-attachment: fixed;
  background-position-x: right;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 102px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  .upper, .lower{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  h1{
    font-family: 'Exo2-eb';
    font-style: normal;
    font-weight: 800;
    font-size: 89px;
    line-height: 102.8%;
    margin: 8px 0 0 0;

    display: inline-block;
    color: #FFFFFF;
  }
  h2{
    font-family: Poppkorn;
    font-style: normal;
    font-weight: normal;
    font-size: 75px;
    line-height: 50px;

    margin: 42px 0 0 0;

    background: -webkit-linear-gradient(0deg, #F29C1F 60%, #EA1984);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  h4{
    font-family: 'Exo2-lit';
    font-size: 23px;
    line-height: 28px;

    text-align: left;
    letter-spacing: 0.36em;
    margin: 50px 0 0 0;

    display: inline-block;

    color: #484F93;
  }
  .fourbtn{
    button{
      width: 228px;
      height: 78px;
      margin: 28px 28px 44px 0;

      box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.1), 4px 4px 8px #000000;
      border-radius: 12px;
      border: none;
      background: none;
      font-family: 'Exo2-reg';
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 31px;

      text-align: left;
      letter-spacing: 0.08em;
      padding-left: 18px;

      color: #FFFFFF;

      &:focus{
        outline:none;
        filter: brightness(2);
      }
    }
  }
}
`
const Backlayer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: linear-gradient(105.16deg, #000000 2.14%, rgba(0, 0, 0, 0) 41.67%);
}
`
  
export default Index