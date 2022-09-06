import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios";
import { format } from 'timeago.js';




const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 1.875rem 0rem;
`

const Avatar = styled.img`
    width: 50px;
    height:50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color:${({ theme }) => theme.text};

`
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-left: 5px;
    color:${({ theme }) => theme.textSoft};
`
const Text = styled.span`
    font-size: 14px;
    color:${({ theme }) => theme.text};
`


const Comment = ({ comment }) => {

    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchComment = async () => {
            const res = await axios.get(`/users/find/${comment.userId}`);
            setChannel(res.data)
        };
        fetchComment();
    }, [comment.userId]);


    return (
        <Container>
            <Avatar src={channel.img} />
            <Details>
                <Name>{channel.name}<Date>{format(channel.createdAt)}</Date></Name>
                <Text>{comment.description}</Text>
            </Details>
        </Container>
    )
}

export default Comment