import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/Themes";
import Navbar from './Components/sections/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Components/sections/Hero';
import Skills from './Components/sections/Skills';
import Education from './Components/sections/Education';
import StartCanvas from "./Components/canvas/Stars";
import Projects from './Components/sections/Projects';
import Contact from './Components/sections/Contact';
import Footer from './Components/sections/Footer';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0,15) 0%,
    rgba(201, 32, 184, 0) 50%
  
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0,15) 100%
  );
  width: 100%;
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <Navbar/>
      <Body>
      <StartCanvas/>
        <div>
        <Hero/>
        <Wrapper>
        <Skills/>
        </Wrapper>
        <Projects/>
        <Wrapper>
        <Education/>
        <Contact/>
        </Wrapper>
        <Footer/>
        </div>
      </Body>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
