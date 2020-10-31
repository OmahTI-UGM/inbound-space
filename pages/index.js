import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import Loadinger from '../components/Loadinger'
  
const Index = () => {
  const [beginLoad, setbeginLoad] = useState(false)
  const [date, setdate] = useState("")
  const [red, setred] = useState(false);

  useEffect(() => {
    setbeginLoad(true)
    let date1 = new Date(); 
    let date2 = new Date("11/7/2020"); 
      
    // To calculate the time difference of two dates 
    let timeDiffer = date2.getTime() - date1.getTime(); 
      
    // To calculate the no. of days between two dates 
    let dayDiffer = timeDiffer / (1000 * 3600 * 24); 
    setdate(Math.trunc(dayDiffer))
    
    const interval = setInterval(() => {
      setred(!red)
    }, 1000);

    return () => clearInterval(interval);
  }, [red])

  return (
    <Wrapper red={red}>
      <Loadinger beginLoad={beginLoad} date={date}/>
      <div className="alarmer"></div>
    </Wrapper>
  );
}
  
const Wrapper = Styled.div(({red}) => `
width: 100%;
height: 100%;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
color: white;
background: url('/img/comingsoon.svg'), url('/img/comingbg.svg');

background-position: top, left;
background-repeat: no-repeat;
background-size: cover, cover;

.alarmer{
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url('img/alarmer.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  filter: opacity(${red ? 1 : 0});
  transition: 0.5s;
}
`)
  
export default Index