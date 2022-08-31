import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'



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



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='Search' />
                    <SearchIcon />
                </Search>
                <Link to="/signin" style={{textDecoration: 'none'}}>
                    <Button>
                        <AccountCircleIcon />
                        SIGN IN
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Navbar