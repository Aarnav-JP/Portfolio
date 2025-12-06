// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #000000;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    transition: background 0.3s ease, color 0.3s ease;
    background: ${({ theme }) => theme.background};
    background-size: 300% 300%;
    background-color: #000000;
  }

  * {
    box-sizing: border-box;
  }

  section {
    padding: 100px 20px;
    min-height: 100vh;
    scroll-margin-top: 80px;  /* Offset for fixed navbar */
  }

  section h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  section p {
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    section {
      padding: 80px 16px;
      min-height: auto;
    }
    section h1 {
      font-size: 2rem;
    }
    section p {
      font-size: 1.05rem;
    }
  }
`;

export default GlobalStyle;
