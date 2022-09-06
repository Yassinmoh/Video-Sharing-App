import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments'
import Card from '../components/Card'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { fetchSuccess, like, dislike } from '../redux/videoSlice'
import { subscription } from '../redux/userSlice'
import { format } from 'timeago.js';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from "@mui/icons-material/ThumbDown";



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

const VideoFram =styled.video`
    max-height: 45rem;
    width: 100%;
    object-fit: cover;

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
            console.log("videoRes", videoRes.data);
            const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
            setChannel(channelRes.data);
            dispatch(fetchSuccess(videoRes.data))
        };
        fetchData();
    }, [path, dispatch]);

    const handleLike = async () => {
        await axios.put(`/users/like/${currentVideo._id}`);
        dispatch(like(currentUser._id));
    }

    const handleDisike = async () => {
        await axios.put(`/users/dislike/${currentVideo._id}`);
        dispatch(dislike(currentUser._id));
    }

    const handelSubscribe=async ()=>{
        currentUser.subscribedUsers.includes(channel._id) ?
        await axios.put(`/users/unsub/${channel._id}`):
        await axios.put(`/users/sub/${channel._id}`)
        dispatch(subscription(channel._id))
    }

    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <VideoFram src={currentVideo.VideoUrl} controls/>
                </VideoWrapper>
                <Title>{currentVideo?.title}</Title>
                <Details>
                    <Info>{currentVideo?.views} views {format(currentVideo?.createdAt)} </Info>
                    <Buttons>
                        <Button onClick={handleLike}>
                            {currentVideo?.likes?.includes(currentUser?._id) ? (
                                <ThumbUpIcon />
                            ) : (
                                <ThumbUpOutlinedIcon />
                            )}{" "}
                            {currentVideo?.likes?.length}
                        </Button>
                        <Button onClick={handleDisike}>
                            {currentVideo?.dislikes?.includes(currentUser?._id) ? (
                                <ThumbDownIcon />
                            ) : (
                                <ThumbDownOffAltOutlinedIcon />
                            )}{" "}
                            Dislike
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
                            <Description>{currentVideo?.description}</Description>
                        </ChanelDetails>
                    </ChanelInfo>
                    <Subscripe onClick={handelSubscribe}>{currentUser.subscribedUsers?.includes(channel._id) ? "SUBSCRIBED": "SUBSCRIBE"}</Subscripe>
                </Chanel>
                <Hr />
                <Comments videoId={currentVideo._id}/>
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