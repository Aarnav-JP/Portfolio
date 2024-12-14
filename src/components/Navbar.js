// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

// Keyframes for glowing effect on hover
const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px #FF0000, 0 0 10px #FF0000, 0 0 15px #FF0000;
  }
  50% {
    text-shadow: 0 0 20px #FF0000, 0 0 30px #FF4500, 0 0 40px #FFD700, 0 0 50px #FFD700;
  }
  100% {
    text-shadow: 0 0 5px #FF0000, 0 0 10px #FF4500, 0 0 15px #FFD700;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background: linear-gradient(135deg, #2d2e32, #1b1c20);
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  gap: 10px;
  flex-wrap: nowrap; /* Ensure all links stay in one row */

  @media (max-width: 768px) {
    gap: 5px; /* Reduce gap for smaller screens */
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem; /* Slightly smaller font size */
  padding: 8px 12px; /* Reduce padding */
  margin: 0 5px; /* Minimize margin between links */
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  background-image: linear-gradient(45deg, #FF0000, #FF4500, #FFD700); /* Gradient effect for text */
  -webkit-background-clip: text; /* Clips the background to the text */
  color: transparent; /* Make text color transparent so background is visible */
  text-shadow: none;

  &:hover {
    /* Apply glow effect on hover */
    background-image: linear-gradient(45deg, #FF0000, #FF4500, #FFD700);
    -webkit-background-clip: text;
    color: transparent;
    animation: ${glowAnimation} 1.5s infinite alternate;
    text-shadow: 0 0 20px #FF0000, 0 0 30px #FF4500, 0 0 40px #FFD700, 0 0 50px #FFD700;
    transform: scale(1.1); /* Slightly enlarge on hover */
  }

  &:active {
    /* Slightly scale down when clicked */
    transform: scale(0.98);
  }
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: none;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.navLinkBg};
    transform: rotate(20deg);
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Navbar = ({ darkMode, toggleTheme }) => {
    return (
        <Nav>
            {/* <ToggleButton onClick={toggleTheme}>
                {darkMode ? <FaSun color="yellow" size={20} /> : <FaMoon color="gray" size={20} />}
            </ToggleButton> */}
            <Title>Welcome!</Title>
            <NavLinks>
                <NavLink to="home" smooth={true} duration={500} offset={-60}>
                    Home
                </NavLink>
                <NavLink to="about" smooth={true} duration={500} offset={-60}>
                    About
                </NavLink>
                <NavLink to="skills" smooth={true} duration={500} offset={-60}>
                    Skills
                </NavLink>
                <NavLink to="education" smooth={true} duration={500} offset={-60}>
                    Education
                </NavLink>
                <NavLink to="experience" smooth={true} duration={500} offset={-60}>
                    Experience
                </NavLink>
                <NavLink to="projects" smooth={true} duration={500} offset={-60}>
                    Projects
                </NavLink>
                <NavLink to="achievements" smooth={true} duration={500} offset={-60}>
                    Achievements
                </NavLink>
                <NavLink to="contact" smooth={true} duration={500} offset={-60}>
                    Contact
                </NavLink>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;
