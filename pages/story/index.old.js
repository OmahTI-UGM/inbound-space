import React from 'react'
import { useRouter } from 'next/router'
import Styled from '@emotion/styled'
import dataStory from '../../sample-api/story.json'
import Link from 'next/link'
    
const Index = () => {
    const router = useRouter()
    let { page } = router.query
    const pageId = typeof page == 'undefined' ? 0 : page 

    const content = dataStory.pages

    function movepage(topage){
        topage = `/story?page=${ topage == 'next' ? parseInt(pageId) + 1 :  parseInt(pageId) - 1}`
        
    }

    return (
        <Wrapper pageId={pageId}>
            <img src={`/img/story/${pageId}.svg`} alt=""/>
            <div className="whitecontent">
                <p>{content[pageId].words}</p>
                <div className="pagebtn">
                    <button onClick={()=> movepage('prev')}className="prev"><svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75001 16.1651C1.08333 15.2028 1.08334 12.7972 2.75 11.8349L19.25 2.30866C20.9167 1.34641 23 2.54922 23 4.47372L23 23.5263C23 25.4508 20.9167 26.6536 19.25 25.6913L2.75001 16.1651Z" stroke="white" stroke-width="3"/></svg></button>
                
                    <button onClick={()=> movepage('next')}className="next"><p>NEXT</p><svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 13.2679C27.3333 14.0377 27.3333 15.9622 26 16.732L3.5 29.7224C2.16667 30.4922 0.499999 29.53 0.499999 27.9904L0.5 2.00962C0.5 0.470019 2.16667 -0.492234 3.5 0.277567L26 13.2679Z" fill="#180F4A"/></svg></button>
                    
                </div>
            </div>
            <h1>.story</h1>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({pageId}) => `
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    flex-direction: ${ pageId % 2 != 0 ? "row" : "row-reverse"};
    align-items: center;
    color: white;

    background-image: url('/img/story/bg${pageId}.svg');
    background-position: ${pageId % 2 != 0 ? "left" : "right"};
    background-size: contain;
    background-repeat: no-repeat;
    padding-bottom: 5%;

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
`)
    
export default Index