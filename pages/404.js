import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
    
const error404 = () => {
    const [screen, setScreen] = useState(undefined)
  
    useEffect(() => {
      setScreen(window.innerWidth)

      window.addEventListener('resize', handleWindowSizeChange)
    }, [])
  
    const handleWindowSizeChange = () => {
      setScreen(window.innerWidth)
    }

    return (
        <Wrapper screen={screen}>
            
        </Wrapper>
    )
}
    
const Wrapper = Styled.div(({screen}) => `
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    
    background-image: url('/img/${screen > 685 ? "404bg" : "404bg-m"}.svg');
  
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`)
    
export default error404