import React from 'react'
import styled from 'styled-components'
import Comment from '../components/Comment'

const Container =styled.div``
const NweComment =styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Avatar =styled.img`
    width: 50px;
    height:50px;
    border-radius: 50%;
`
const Input =styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme})=>theme.soft};
    background-color:transparent;
    outline: none;
    padding: 5px;
    width: 100%;
    color: ${({ theme})=>theme.text};
`

const Comments = () => {
    return (
        <Container>
            <NweComment>
                <Avatar src='https://yt3.ggpht.com/ILAtcb8-5LhkMw50Wa4i4dLzKHhSEpMKnFKQ-BREVayexxKEvGVxUeK-9sOqRqao9LeoREK2=s68-c-k-c0x00ffffff-no-rj'/>
                <Input placeholder='Add a comment'/>
            </NweComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments