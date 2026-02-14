// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const subtleGlow = keyframes`
  0% { text-shadow: 0 0 4px rgba(255, 140, 0, 0.3); }
  50% { text-shadow: 0 0 12px rgba(255, 140, 0, 0.6), 0 0 20px rgba(224, 30, 55, 0.3); }
  100% { text-shadow: 0 0 4px rgba(255, 140, 0, 0.3); }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  background: rgba(10, 10, 15, 0.65);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 140, 0, 0.08);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  gap: 4px;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 14px;
  margin: 0 2px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff8c00, #e01e37);
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    background: rgba(255, 140, 0, 0.08);
    animation: ${subtleGlow} 2s infinite;
    
    &::after {
      width: 60%;
    }
  }

  &.active {
    color: #ff8c00;
    
    &::after {
      width: 60%;
    }
  }

  &:active {
    transform: scale(0.97);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s ease;

  &:hover {
    color: #ff8c00;
  }

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
  background: rgba(10, 10, 20, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 140, 0, 0.15);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  padding: 12px 8px;
  z-index: 200;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 180px;
  }
`;

const Brand = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  cursor: default;
`;

const Navbar = ({ darkMode, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const navItems = [
    'home', 'about', 'skills', 'education',
    'experience', 'projects', 'achievements', 'contact'
  ];

  const labels = {
    home: 'Home', about: 'About', skills: 'Skills',
    education: 'Education', experience: 'Experience',
    projects: 'Projects', achievements: 'Achievements', contact: 'Contact'
  };

  return (
    <Nav>
      <Brand>Welcome!</Brand>
      <NavLinks>
        {navItems.map(item => (
          <NavLink
            key={item}
            to={item}
            smooth={true}
            duration={500}
            offset={-60}
            spy={true}
            activeClass="active"
          >
            {labels[item]}
          </NavLink>
        ))}
      </NavLinks>
      <MobileMenuButton aria-label="Menu" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </MobileMenuButton>
      <MobileMenu open={open} onClick={closeMenu}>
        {navItems.map(item => (
          <NavLink
            key={item}
            to={item}
            smooth={true}
            duration={500}
            offset={-60}
            spy={true}
            activeClass="active"
            onClick={closeMenu}
          >
            {labels[item]}
          </NavLink>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
