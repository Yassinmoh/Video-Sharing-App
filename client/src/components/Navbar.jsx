import React, { useState } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import Upload from './Upload'



const Container = styled.div`
    position:sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 3.5rem;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    padding: 0 1.25rem;
    position: relative;
`
const Search = styled.div`
    position: absolute;
    width: 40%;
    margin: auto;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
`
const Input = styled.input`
    border:0;
    outline: none;
    background-color: transparent;
`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    font-weight: 500;
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`
const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color:${({ theme }) => theme.text};

`
const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #999;
`



const Navbar = () => {
    const {currentUser} =useSelector(state=> state.user)
    const [open,setOpen]=useState(false)
    return (
        <>
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='Search' />
                    <SearchIcon />
                </Search>
                {currentUser ? (
                    <User>
                        <VideoCallOutlinedIcon onClick={()=>setOpen(true)}/>
                        <Avatar src={currentUser.img}/>
                        {currentUser.name}
                    </User> 
                ) : <Link to="/signin" style={{textDecoration: 'none'}}>
                    <Button>
                        <AccountCircleIcon />
                        SIGN IN
                    </Button>
                </Link>}
            </Wrapper>
        </Container>
        {open && <Upload setOpen={setOpen}/>}
        </>
    )
}

export default Navbar