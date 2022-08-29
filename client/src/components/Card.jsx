import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Container = styled.div`
    width: 22.5rem;
    margin-bottom: 2.813rem;
    cursor: pointer;
    
`

const Image = styled.img`
    width: 100%;
    height: 12.625rem;
    background-color:#999;
`

const Details = styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 0.75rem;
`

const ChanelImage = styled.img`
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;   
    background-color:#999;

`

const Texts = styled.div``

const Title = styled.h1`
    font-size: 1rem;
    font-weight: 500;
    color:${({ theme }) => theme.text};   
`
const ChanelName = styled.h2`
    font-size: 14px;
    color:${({ theme }) => theme.textSoft};
    margin: 9px 0px;
`
const Info = styled.div`
    font-size: 14px;
    color:${({ theme }) => theme.textSoft};
`




const Card = () => {
    return (
        <Link to="/video/test" style={{textDecoration: 'none'}}>
        <Container>
            <Image src='https://i.ytimg.com/vi/vIxGDq1SPZQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpSDSAXpvg7FFJtAbuBQnor8SW9Q'/>
            <Details>
                <ChanelImage src="https://yt3.ggpht.com/ytc/AMLnZu9hChhvJB3JEhK4O3SucJJaowSebYD_KrX5eeK-IA=s68-c-k-c0x00ffffff-no-rj"/>
                <Texts>
                    <Title>Test Video</Title>
                    <ChanelName>Yassin Tube</ChanelName>
                    <Info>600,45 views . 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
        </Link>
    )
}

export default Card