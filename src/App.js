// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import GalaxyBackground from './components/GalaxyBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Education from './pages/Education';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GalaxyBackground />
      <GlobalStyle />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
