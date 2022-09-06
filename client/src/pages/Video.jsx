import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments'
import Card from '../components/Card'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { fetchSuccess } from '../redux/videoSlice'
import { format } from 'timeago.js';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';




const Container = styled.div`
    display: flex;
    gap: 1.5rem;
`
const Content = styled.div`
flex: 5;
`
const Recommendation = styled.div`
flex: 2;
`
const VideoWrapper = styled.div`

`
const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`
const Hr = styled.hr`
    border: 0.5px solid ${({ theme }) => theme.soft};
`
const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`
const Buttons = styled.div`
    display:flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`
const Button = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
    cursor: pointer;
`
const Chanel = styled.div`
    display:flex;
    justify-content:space-between;
`
const ChanelInfo = styled.div`
    display:flex;
    gap: 20px;
`
const Image = styled.img`
    width: 50px;
    height:50px;
    border-radius: 50%;
`
const ChanelDetails = styled.div`
    display:flex;
    flex-direction:column;
    color: ${({ theme }) => theme.text};
`
const ChanelName = styled.span`
    font-weight: 500;`

const ChanelCounter = styled.span`
    margin-top: 5px;
    margin-bottom:20px;
    color: ${({ theme }) => theme.textSoft};
    font-size:12px  ;
`
const Description = styled.p`
    font-size:12px              ;
`
const Subscripe = styled.button`
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

    const { currentVideo } = useSelector((state) => state.video);
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();



    const path = useLocation().pathname.split("/")[2];

    const [channel, setChannel] = useState({});
    // const [video, setVideo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const videoRes = await axios.get(`/videos/find/${path}`);
            const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
            setChannel(channelRes.data);
            dispatch(fetchSuccess(videoRes.data))
        };
        fetchData();

    }, [path, dispatch]);

    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="720" src="https://www.youtube.com/embed/vkc99WHcDTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>{currentVideo.title}</Title>
                <Details>
                    <Info>{currentVideo.views} views {format(currentVideo.createdAt)} </Info>
                    <Buttons>
                        <Button>
                            {currentVideo.likes?.includes(currentUser?._id) ? (
                                <ThumbUpIcon />
                            ) : (
                                <ThumbUpOutlinedIcon />
                            )}{" "}
                            {currentVideo.likes?.length}
                        </Button>
                        <Button>
                            <ThumbDownAltOutlinedIcon /> Dislike
                        </Button>
                        <Button>
                            <ReplayOutlinedIcon /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon /> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr />
                <Chanel>
                    <ChanelInfo>
                        <Image src={channel.img} />
                        <ChanelDetails>
                            <ChanelName>{channel.name}</ChanelName>
                            <ChanelCounter>{channel.subscribers} subscriper</ChanelCounter>
                            <Description>{currentVideo.description}</Description>
                        </ChanelDetails>
                    </ChanelInfo>
                    <Subscripe>Subscripe</Subscripe>
                </Chanel>
                <Hr />
                <Comments />
            </Content>
            {/* <Recommendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendation> */}
        </Container>
    )
}

export default Video