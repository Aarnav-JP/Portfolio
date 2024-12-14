// src/components/ThemeToggle.js
import React from "react";
import styled from "styled-components";

const Toggle = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: ${({ $darkMode }) => ($darkMode ? "flex-end" : "flex-start")};
  padding: 5px;
  margin: 0 20px;
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
`;

const ThemeToggle = ({ darkMode, toggleTheme }) => (
    <Toggle $darkMode={darkMode} onClick={toggleTheme}>
        <Circle />
    </Toggle>
);

export default ThemeToggle;
