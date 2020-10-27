import React, { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import dataStory from '../../sample-api/story.json'
import Mobile from '../../components/mobile/Story'
    
const Index = () => {
    const [pageId, setpageId] = useState(1)
    const [imgOpac, setimgOpac] = useState(1)
    const [screen, setScreen] = useState(undefined)
    const [cover, setcover] = useState(true)
    const [coverdelay, setcoverdelay] = useState(true)

    useEffect(() => {
        setScreen(window.innerWidth);
        window.addEventListener('resize', handleWindowSizeChange);
        
        setTimeout(() => {
            setcover(false)
            setTimeout(() => {
                setcoverdelay(false)
            }, 2000);
        }, 1000);
    }, []);
    
    const handleWindowSizeChange = () => {
        setScreen(window.innerWidth);
    };

    const content = dataStory.pages

    function nextpage(){
        setimgOpac(0);
        setTimeout(() => {
            setpageId(parseInt(pageId)+1)
            setTimeout(() => {
                setimgOpac(1)
            }, 1000);
        }, 250);
    }
    
    function prevpage(){
        setimgOpac(0);
        setTimeout(() => {
            setpageId(parseInt(pageId)-1)
            setTimeout(() => {
                setimgOpac(1)
            }, 1000);
        }, 250);
    }

    if(screen > 1080){
        return (
            <Wrapper pageId={pageId} imgOpac={imgOpac} screen={screen} cover={cover} coverdelay={coverdelay}>
                <div className="containslide">
                    <div className="slidleft"></div>
                    <div className="img">
                        <img src={`/img/story/${pageId}.svg`} alt=""/>
                    </div>
                    <div className="slidright"></div>
                </div>
                <div className="containslide">
                    <div className="slidright"></div>
                    <div className="whitecontent">
                        <p>{content[pageId].words}</p>
                        <div className="pagebtn">
                            <button onClick={()=> prevpage()}className="prev"><svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75001 16.1651C1.08333 15.2028 1.08334 12.7972 2.75 11.8349L19.25 2.30866C20.9167 1.34641 23 2.54922 23 4.47372L23 23.5263C23 25.4508 20.9167 26.6536 19.25 25.6913L2.75001 16.1651Z" stroke="white" stroke-width="3"/></svg></button>
                            <button onClick={()=> pageId == 5 ? location.href='/story/finale' : nextpage()}className="next"><p>NEXT</p><svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button>
                        </div>
                    </div>
                    <div className="slidleft"></div>
                </div>
                
                <h1>.story</h1>
                <div className="mvgbg">
                    <div className="bg"></div>
                </div>

                <div className="imgloader">
                    <img src={`/img/story/1.svg`} alt=""/>
                    <img src={`/img/story/2.svg`} alt=""/>
                    <img src={`/img/story/3.svg`} alt=""/>
                    <img src={`/img/story/4.svg`} alt=""/>
                    <img src={`/img/story/5.svg`} alt=""/>
                </div>

                
                <div className="coveronload" id="cover"></div>
            </Wrapper>
        )
    }else{
        return(
            <Mobile pageId={pageId} content={content} prevpage={prevpage} nextpage={nextpage} cover={cover} coverdelay={coverdelay} />
        )
    }
}
    
const Wrapper = Styled.div(({pageId, imgOpac, cover, coverdelay}) =>`
width: 100%;
height: 100%;
position: fixed;
display: flex;
justify-content: space-evenly;
align-items: center;
color: white;
transition: 1s;

background-position: left;
background-size: contain;
background-repeat: no-repeat;
padding-bottom: 5%;


.coveronload{
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: url('img/cover/story.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: opacity(${cover ? '1' : '0'});
    transition: filter 2s;
    ${coverdelay ? '' : 'display: none;'}
  }

.mvgbg{
    z-index: -10;
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    .bg{
        position: relative;
        left: ${ pageId % 2 != 0 ? '0%' : '-50%'};
        height: 100%;
        width: 2079px;
        background-image: url('/img/story/movingbg.svg');
        background-position: center;
        transition: 1.5s;
    }
}

.containslide{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    .slidright{
        width: ${pageId % 2 != 0 ? '520' : '0'}px;
        height: 380px;
        transition: 1s;
    }
    .slidleft{
        width: ${pageId % 2 != 0 ? '0' : '520'}px;
        height: 380px;
        transition: 1s;
    }
}

div.img{
    width: 380px;
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;

    img{
        filter: opacity(${imgOpac});
        transition: 0.25s;
    }
}
h1{
    font-family: 'Poppkorn';
    font-style: normal;
    font-weight: normal;
    font-size: 75px;
    line-height: 75px;
    position: fixed;
    right: 54px;
    bottom: 0;
    background: -webkit-linear-gradient(0deg, #F29C1F 40%, #EA1984 130%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.whitecontent{
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}
.pagebtn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
}
button.prev{
    width: 69px;
    height: 52px;

    background: none;
    border: 2.5px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 8px;
    margin-right: 8px;
    display: ${pageId < 2 ? 'none' : 'unset'};

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
p{
    font-family: 'Exo2-med';
    font-size: 32px;
    margin: 0;
    max-width: 480px;
}
.imgloader{
    position: fixed;
    filter: opacity(0);
    transform: scale(0.01);
    z-index: -100;
}
`)
    
export default Index