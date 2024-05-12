import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ProfileSection from "./components/profileSection/index.js";
import Experience from "./components/Experience/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <ProfileSection/>
          <Wrapper>
            <Skills />
            <Experience/>
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;