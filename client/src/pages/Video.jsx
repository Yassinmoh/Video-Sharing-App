import React from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';





const Container =styled.div`
    display: flex;
    gap: 1.5rem;
`
const Content =styled.div`
flex: 5;
`
const Recommendation =styled.div`
flex: 2;
`
const VideoWrapper =styled.div`

`
const Details =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info =styled.span`
    color: ${({ theme })=> theme.textSoft};
`
const Hr =styled.hr`
    border: 0.5px solid ${({ theme })=> theme.soft};
`
const Title =styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme })=> theme.text};
`
const Buttons =styled.div`
    display:flex;
    gap: 20px;
    color: ${({ theme })=> theme.text};
`
const Button =styled.div`
    display: flex;
    align-items: center;
    gap:5px;
    cursor: pointer;
`
const Chanel =styled.div`
    display:flex;
    justify-content:space-between;
`
const ChanelInfo =styled.div`
    display:flex;
    gap: 20px;
`
const Image =styled.img`
    width: 50px;
    height:50px;
    border-radius: 50%;
`
const ChanelDetails =styled.div`
    display:flex;
    flex-direction:column;
    color: ${({ theme })=> theme.text};
`
const ChanelName =styled.span`
    font-weight: 500;`

const ChanelCounter =styled.span`
    margin-top: 5px;
    margin-bottom:20px;
    color: ${({ theme })=> theme.textSoft};
    font-size:12px  ;
`
const Description =styled.p`
    font-size:12px              ;
`
const Subscripe =styled.button`
    background-color: red;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    cursor: pointer;
    padding: 10px 20px;

`



const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                <iframe width="100%" height="720" src="https://www.youtube.com/embed/vkc99WHcDTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>34,958 veiws 30/0/2022 </Info>
                    <Buttons>
                        <Button>
                            <ThumbUpAltOutlinedIcon/> 123
                        </Button>
                        <Button>
                            <ThumbDownAltOutlinedIcon/> Dislike
                        </Button>
                        <Button>
                            <ReplayOutlinedIcon/> Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon/> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr/>
                <Chanel>
                    <ChanelInfo>
                        <Image src='https://yt3.ggpht.com/ILAtcb8-5LhkMw50Wa4i4dLzKHhSEpMKnFKQ-BREVayexxKEvGVxUeK-9sOqRqao9LeoREK2=s68-c-k-c0x00ffffff-no-rj'/>
                        <ChanelDetails>
                            <ChanelName>Yassin Tube</ChanelName>
                            <ChanelCounter>205k subscriper</ChanelCounter>
                            <Description>Learn React, Typescript, GraphQL with our tutorials </Description>
                        </ChanelDetails>
                    </ChanelInfo>
                    <Subscripe>Subscripe</Subscripe>
                </Chanel>
            </Content>
            <Recommendation>Recommendation</Recommendation>
        </Container>
    )
}

export default Video