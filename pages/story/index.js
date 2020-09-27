import React from 'react'
import { useRouter } from 'next/router'
import Styled from '@emotion/styled'
import dataStory from '../../sample-api/story.json'
    
const Index = () => {
    const router = useRouter()
    let { page } = router.query
    const pageId = typeof page == 'undefined' ? 1 : page 

    const content = dataStory.pages

    return (
        <Wrapper pageId={pageId}>
            <img src={`/img/story/${1}.png`} alt=""/>
            <p>{content[pageId-1].words}</p>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({pageId}) => `
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    flex-direction: ${ pageId % 2 == 0 ? "row" : "row-reverse"};
    align-items: center;
    color: white;
    p{
        font-family: 'Exo2-med';
        font-size: 24px;
        margin: 0;
    }
`)
    
export default Index