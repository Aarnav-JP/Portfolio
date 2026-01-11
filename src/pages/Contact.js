import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing necessary icons


import { motion } from "framer-motion";

// Styling for the section
const ContactSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: #ffffff;
  padding: 0 10%;
  position: relative;
  overflow: hidden;


  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    padding: 80px 6% 60px;
    text-align: center;
    gap: 24px;
    min-height: 100vh;
  }
`;

// (removed unused galaxyAnimation)

// Animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000;
  }
  50% {
    text-shadow: 0 0 20px #ff0000, 0 0 30px #ff4500, 0 0 40px #ffd700;
  }
  100% {
    text-shadow: 0 0 5px #ff0000, 0 0 10px #ff4500, 0 0 15px #ffd700;
  }
`;

// Text container with fade-in animation
const TextContainer = styled.div`
z-index: 1;
  flex: 1;
  animation: ${fadeIn} 1s ease-out forwards;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

// Title text in the Contact section
const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  background: linear-gradient(to right, #ff8c00, #e01e37); // Fluorescent gradient for text
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
`;

// A subtitle or small text below the title
const Tagline = styled.p`
  font-size: 1.3rem;
  margin: 20px 0;
  opacity: 0.8;
  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
`;

// Link buttons with glowing hover effects (for social links)
const ContactLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  margin: 10px;
  display: flex;
  align-items: center;  // Align text and icon horizontally
  gap: 15px;  // Space between the icon and the text
  transition: all 0.3s ease;
  text-align: center;
  padding: 10px 20px;
  background: linear-gradient(45deg, #ff0000, #ff4500, #ffd700); /* Fluorescent gradient */
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: none;
  z-index: 1;
  &:hover {
    animation: ${glowAnimation} 1.5s infinite alternate;
    text-shadow: 0 0 20px #ff0000, 0 0 30px #ff4500, 0 0 40px #ffd700;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;

// Icons for social links (using react-icons)
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
  z-index: 1;
  animation: ${fadeIn} 1.2s ease-out forwards;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

// const ScrollIndicator = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   animation: ${fadeIn} 2s ease-out forwards infinite alternate;
//   font-size: 3rem;
//   color: #ffffff;
// `;

// (removed unused Footer)

// const ThankYouMessage = styled.p`
//   font-size: 1.2rem; /* Further reduced size */
//   opacity: 0.8;
//   color: #ff8c00;
//   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
// `;



const Contact = () => {
  return (
    <ContactSection
      id="contact"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Galaxy background */}

      <TextContainer>
        <Title>Contact</Title>
        <Tagline>Feel free to reach out via email or connect with me on LinkedIn and GitHub.</Tagline>
      </TextContainer>

      <ContactDetails>
        {/* Email Contact Link with Icon */}
        <ContactLink
          href="mailto:aarnav.jp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={40} color="#ff8c00" />
          <p>Email</p>
        </ContactLink>

        {/* LinkedIn Contact Link with Icon */}
        <ContactLink
          href="https://www.linkedin.com/in/aarnavjp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} color="#0a66c2" />
          <p>LinkedIn</p>
        </ContactLink>

        {/* GitHub Contact Link with Icon */}
        <ContactLink
          href="https://github.com/Aarnav-JP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} color="#ffffff" />
          <p>GitHub</p>
        </ContactLink>
      </ContactDetails>


    </ContactSection>
  );
};

export default Contact;
