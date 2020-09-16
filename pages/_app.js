import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return ( 
  <>
    <Head>
        <title>Inbound 2020</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#060410"/>
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
