import React from 'react'
import Styled from '@emotion/styled'
    
const Index = ({pageId, content, prevpage, nextpage, cover, coverdelay}) => {
    return (
        <Wrapper pageId={pageId} cover={cover} coverdelay={coverdelay}>
            <div className="content">
                <div className="img">
                    <img src={`/img/story/${pageId}.svg`} alt=""/>
                </div>
                <div className="textbox">
                    <p className="p-content">{content[pageId].words}</p>
                    <hr/>
                    <div className="btns">
                        <button onClick={()=> pageId >= 2 ? prevpage():''}className="prev"><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.03364 7.36694L11.3275 1.83237C12.6607 1.03847 14.3508 1.99912 14.3508 3.55076L14.3508 14.6199C14.3508 16.1715 12.6607 17.1322 11.3275 16.3383L2.03363 10.8037C0.731378 10.0282 0.731377 8.14244 2.03364 7.36694Z" stroke="white" stroke-width="2"/></svg></button>
                        <p>{pageId}/5</p>
                        <button onClick={()=> pageId == 5 ? location.href='/story/finale' : nextpage()}className="next"><svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5905 12.1559C23.8927 12.9314 23.8927 14.8171 22.5905 15.5926L3.39233 27.0253C2.05918 27.8192 0.369021 26.8585 0.369021 25.3069L0.369022 2.44164C0.369022 0.890004 2.05918 -0.0706496 3.39233 0.723249L22.5905 12.1559Z" fill="#D7D7DA"/></svg></button>
                    </div>
                </div>
                <h1>.story</h1>
            </div>

            <div className="coveronload" id="cover"></div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({pageId, cover, coverdelay}) =>`
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url('/img/story/m-bg.svg');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .coveronload{
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        background: #050216 url('/img/cover/story-m.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: opacity(${cover ? '1' : '0'});
        transition: filter 2s;
        ${coverdelay ? '' : 'display: none;'}
        z-index: 10;
      }

    div.content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 0 32px;
    }
    
    div.img{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 32px;

        img{
            height: 300px;
        }
    }
    .textbox{
        width: 100%;
        min-width: 350px;
        max-width: 450px;
        height: 208px;

        background: #050216;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        box-shadow: -4px -4px 4px rgba(255, 255, 255, 0.1), 4px 4px 4px #000000;
        border-radius: 16px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        padding: 22px;
        padding-top: 28px;

        .p-content{
            min-height: 92px;
            font-family: 'Exo2-med';
            font-style: normal;
            font-size: 19px;
            line-height: 23px;
            text-align: center;
            margin: 0;
            margin-bottom: 24px;

            color: #FFFFFF;
        }

        hr{
            border: 1px solid #FFFFFF;
            margin: 0 0;
            width: 100%;
        }
    }
    h1{
        font-family: 'Poppkorn';
        font-style: normal;
        font-weight: normal;
        font-size: 75px;
        line-height: 75px;
        margin: 0;
        background: -webkit-linear-gradient(0deg, #F29C1F 40%, #EA1984 130%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        margin-top: 12px;
    }

    .btns{
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        p{
            margin: 0;
            font-family: 'Exo2-med';
            font-style: normal;
            font-weight: 800;
            font-size: 19px;
            line-height: 23px;
            text-align: center;

            color: #4D35D5;
        }
    }
    button.prev{
        width: 44px;
        height: 34px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    
        background: none;
        border: 2px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 8px;
        filter: opacity(${pageId < 2 ? 0 : 1});
    
        &:focus{
            outline: none;
        }
    }
    button.next{
        background: none;
        border: none;
    }
`)
    
export default Index