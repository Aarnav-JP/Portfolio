// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #000000;
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: transparent;
    color: ${({ theme }) => theme.text};
    height: 100vh;
    transition: background 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  /* Custom scrollbar for the galaxy theme */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0a0a0f;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff8c00, #e01e37);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #ffa940, #ff2d55);
  }

  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: #ff8c00 #0a0a0f;
  }

  section {
    padding: 100px 20px;
    min-height: 100vh;
    scroll-margin-top: 80px;  /* Offset for fixed navbar */
  }

  section h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  section p {
    font-size: 1.1rem;
    line-height: 1.7;
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
