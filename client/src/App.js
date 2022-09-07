import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import './App.css';
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { darkTheme, lightTheme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import Search from './pages/Search';





const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
  padding:  1.375rem 6rem;
`



function App() {

  const [darkMood, setDarkMood] = useState(true)


  return (
    <ThemeProvider theme={darkMood ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMood={darkMood} setDarkMood={setDarkMood} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home type="random"/>} />
                  <Route path='trends' element={<Home type="trend"/>} />
                  <Route path='subscriptions' element={<Home type="sub"/>} />
                  <Route path='search' element={<Search />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path='video'>
                    <Route path=':id' element={<Video />} />
                  </Route >
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
