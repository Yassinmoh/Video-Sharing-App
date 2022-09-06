import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import Comment from '../components/Comment'

const Container = styled.div``
const NweComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Avatar = styled.img`
    width: 50px;
    height:50px;
    border-radius: 50%;
`
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color:transparent;
    outline: none;
    padding: 5px;
    width: 100%;
    color: ${({ theme }) => theme.text};
`

const Comments = ({videoId}) => {

    const { currentUser } = useSelector((state) => state.user);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`/comments/${videoId}`);
                setComments(res.data);
            } catch (err) { }
        };
        fetchComments();
    }, [videoId]);

    return (
        <Container>
            <NweComment>
                <Avatar src={currentUser.img} />
                <Input placeholder='Add a comment' />
            </NweComment>
            {comments.map((comment)=>(
                <Comment key={Math.random()} comment={comment}/>
            ))}
        </Container>
    )
}

export default Comments