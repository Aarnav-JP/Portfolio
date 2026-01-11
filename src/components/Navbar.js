// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

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
  /* Glassmorphism Effect */
  background: rgba(255, 255, 255, 0.05); /* Very transparent white for "frost" */
  backdrop-filter: blur(20px);           /* Stronger blur */
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Softer shadow */
  
  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  gap: 10px;
  flex-wrap: nowrap; /* Ensure all links stay in one row */

  @media (max-width: 768px) {
    display: none; /* Hide in mobile; use menu */
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

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  right: 16px;
  /* Glassmorphism for Menu */
  background: rgba(45, 46, 50, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  padding: 10px;
  z-index: 200;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    gap: 4px;
    min-width: 180px;
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
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <Nav>
      <Title>Welcome!</Title>
      <NavLinks>
        <NavLink to="home" smooth={true} duration={500} offset={-60}>Home</NavLink>
        <NavLink to="about" smooth={true} duration={500} offset={-60}>About</NavLink>
        <NavLink to="skills" smooth={true} duration={500} offset={-60}>Skills</NavLink>
        <NavLink to="education" smooth={true} duration={500} offset={-60}>Education</NavLink>
        <NavLink to="experience" smooth={true} duration={500} offset={-60}>Experience</NavLink>
        <NavLink to="projects" smooth={true} duration={500} offset={-60}>Projects</NavLink>
        <NavLink to="achievements" smooth={true} duration={500} offset={-60}>Achievements</NavLink>
        <NavLink to="contact" smooth={true} duration={500} offset={-60}>Contact</NavLink>
      </NavLinks>
      <MobileMenuButton aria-label="Menu" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </MobileMenuButton>
      <MobileMenu open={open} onClick={closeMenu}>
        <NavLink to="home" smooth={true} duration={500} offset={-60} onClick={closeMenu}>Home</NavLink>
        <NavLink to="about" smooth={true} duration={500} offset={-60} onClick={closeMenu}>About</NavLink>
        <NavLink to="skills" smooth={true} duration={500} offset={-60} onClick={closeMenu}>Skills</NavLink>
        <NavLink to="education" smooth={true} duration={500} offset={-60} onClick={closeMenu}>Education</NavLink>
        <NavLink to="experience" smooth={true} duration={500} offset={-60} onClick={closeMenu}>Experience</NavLink>
        <NavLink to="projects" smooth={true} duration={500} offset={-60} onClick={closeMenu}>Projects</NavLink>
        <NavLink to="achievements" smooth={true} duration={500} offset={-60} onClick={closeMenu}>Achievements</NavLink>
        <NavLink to="contact" smooth={true} duration={500} offset={-60} onClick={closeMenu}>Contact</NavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
