import React from 'react'
import styled from 'styled-components'
import yassinLogo from '../images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'





const Container = styled.div`
    flex: 1;
    background-color:${({ theme }) => theme.bg};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-style: 14px;
    position: sticky;
    top: 0;
`
const Wrapper = styled.div`
    padding: 1.125rem 1.625rem;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 0.469rem 0;
    cursor: pointer;
`
const Logo = styled.div`
    display:flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 1.563rem;
    font-weight: bold;
`
const Img = styled.img`
    height: 1.563rem;
`
const Hr = styled.hr`
    margin: 0.938rem 0;
    border:  0.5px solid ${({ theme }) => theme.soft};
`
const Login = styled.div`

`
const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 1.25rem;
    color:#aaaaaa;
`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    font-weight: 500;
    border-radius: 3px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
`
const Menu = ({ darkMood, setDarkMood }) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: 'none',color:"inherit"}}>
                    <Logo>
                        <Img src={yassinLogo} />
                        YassinTube
                    </Logo>
                </Link>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Hr />
                <Item>
                    <SubscriptionsIcon />
                    Subscription
                </Item>
                <Item>
                    <VideoLibraryIcon />
                    Liprary
                </Item>
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign in to Like videos,Comment,and Subscripe
                    <Button>
                        <AccountCircleIcon />
                        SIGN IN
                    </Button>
                </Login>
                <Hr />
                <Title>
                    BEST OF YASSINTUBE
                </Title>
                <Item>
                    <LibraryMusicIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieIcon />
                    Movies
                </Item>
                <Item>
                    <ArticleIcon />
                    News
                </Item>
                <Item>
                    <LiveTvIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsIcon />
                    Settings
                </Item>
                <Item>
                    <FlagIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkMood(!darkMood)}>
                    <SettingsBrightnessIcon />
                    {darkMood ? "Light":"Dark"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu