import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Container = styled.div`
    width: ${(props)=>props.type !== 'sm' && '22.5rem' };
    margin-bottom:${(props)=>props.type === 'sm' ? '10px' :'45px'};
    cursor: pointer;
    display: ${(props)=>props.type === 'sm' && 'flex' };
    gap: 10px;
`

const Image = styled.img`
    width: 100%;
    height: ${(props)=>props.type === 'sm' ? '7.5rem' :'12.625rem'};
    background-color:#999;
    flex: 1;
`

const Details = styled.div`
    display: flex;
    margin-top: ${(props)=>props.type !== 'sm' && '1rem ' };
    gap: 0.75rem;
    flex: 1;
`

const ChanelImage = styled.img`
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;   
    background-color:#999;
    display: ${(props)=>props.type === 'sm' && 'none' };
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




const Card = ({type}) => {
    return (
        <Link to="/video/test" style={{textDecoration: 'none'}}>
        <Container type={type}>
            <Image type={type} src='https://i.ytimg.com/vi/vIxGDq1SPZQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpSDSAXpvg7FFJtAbuBQnor8SW9Q'/>
            <Details type={type}>
                <ChanelImage type={type} src="https://yt3.ggpht.com/ytc/AMLnZu9hChhvJB3JEhK4O3SucJJaowSebYD_KrX5eeK-IA=s68-c-k-c0x00ffffff-no-rj"/>
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