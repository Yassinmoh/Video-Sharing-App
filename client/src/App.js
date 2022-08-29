import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import './App.css';
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { darkTheme ,lightTheme} from './utils/Theme';






const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({theme})=>theme.bg};
`
const Wrapper = styled.div``



function App() {

const [darkMood,setDarkMood]=useState(true)


  return (
    <ThemeProvider theme={darkMood ? darkTheme:lightTheme}>
      <Container>
        <Menu darkMood={darkMood} setDarkMood={setDarkMood}/>
        <Main>
          <Navbar />
          <Wrapper>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
            <h1>AccountCircleIcon</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
