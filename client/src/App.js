import styled from 'styled-components'
import './App.css';
import Menu from './components/Menu'
import Navbar from './components/Navbar'

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
`
const Wrapper = styled.div``



function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          <h1>AccountCircleIcon</h1>
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
