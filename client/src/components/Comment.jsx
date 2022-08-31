import React from 'react'
import styled from 'styled-components'


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
    color:${({theme})=> theme.text};

`
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-left: 5px;
    color:${({theme})=> theme.textSoft};
`
const Text = styled.span`
    font-size: 14px;
    color:${({theme})=> theme.text};
`


const Comment = () => {
    return (
        <Container>
            <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu9DoIpSzW2gtiTVQJAH5xUUbZrn8fTNsfysLoMy=s68-c-k-c0x00ffffff-no-rj' />
            <Details>
                <Name>yassin mohamed<Date>1 day ago</Date></Name>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit, nobis vel doloremque aspernatur saepe, praesentium eum ullam         voluptatum, nisi vitae corporis provident eaque quam natus exercitationem ipsa voluptates id?
                </Text>
            </Details>
        </Container>
    )
}

export default Comment