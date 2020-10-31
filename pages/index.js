import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import Loadinger from '../components/Loadinger'
  
const Index = () => {
  const [beginLoad, setbeginLoad] = useState(false)
  const [date, setdate] = useState("")

  useEffect(() => {
    setbeginLoad(true)
    let date1 = new Date(); 
    let date2 = new Date("11/7/2020"); 
      
    // To calculate the time difference of two dates 
    let timeDiffer = date2.getTime() - date1.getTime(); 
      
    // To calculate the no. of days between two dates 
    let dayDiffer = timeDiffer / (1000 * 3600 * 24); 
    setdate(Math.trunc(dayDiffer))
  }, [])

  return (
    <Wrapper>
      <Loadinger beginLoad={beginLoad} date={date}/>
    </Wrapper>
  );
}
  
const Wrapper = Styled.div`
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
background-size: unset, cover;
`
  
export default Index