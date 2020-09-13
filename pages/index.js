import Head from 'next/head'
import React from 'react'
import Styled from '@emotion/styled'
import LayoutNav from '../components/layouts/Nav'
  
const Index = () => {
  return (
    <LayoutNav position="bottom">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>

      </Wrapper>
    </LayoutNav>
  );
}
  
const Wrapper = Styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-image: url('/img/indexbg.svg');
  z-index: -1;
`
  
export default Index