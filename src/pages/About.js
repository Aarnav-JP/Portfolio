// src/pages/About.js
import React from 'react';
import styled, { keyframes } from 'styled-components';


import { motion } from "framer-motion";

// Reuse the background style from the Home page
const AboutSection = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  color: #ffffff;
  padding: 0 10%;
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    height: auto;
    padding: 80px 6% 40px;
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
`;

// Fade-in animation for content
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

// Text container for the paragraph
const TextContainer = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out forwards;
  max-width: 600px;
  z-index: 1;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

// Title for the About section
const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
`;

// Paragraph text style
const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  opacity: 0.9;
  line-height: 1.6;
`;

// Cube animation (Rotating Cube)
const rotateCube = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`;

// Cube container
const CubeContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 16px; /* Add breathing room from text above */
    margin-bottom: 16px; /* Avoid overlap with following content */
  }
`;

// Cube styles and animation
const Cube = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateY(45deg);
  animation: ${rotateCube} 8s infinite linear;
  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: ${({ color }) => color};
  border: 2px solid #1b1c20;
  opacity: 0.8;

  &:nth-child(1) { transform: rotateY(0deg) translateZ(75px); }
  &:nth-child(2) { transform: rotateY(90deg) translateZ(75px); }
  &:nth-child(3) { transform: rotateY(180deg) translateZ(75px); }
  &:nth-child(4) { transform: rotateY(-90deg) translateZ(75px); }
  &:nth-child(5) { transform: rotateX(90deg) translateZ(75px); }
  &:nth-child(6) { transform: rotateX(-90deg) translateZ(75px); }
  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
    &:nth-child(1) { transform: rotateY(0deg) translateZ(60px); }
    &:nth-child(2) { transform: rotateY(90deg) translateZ(60px); }
    &:nth-child(3) { transform: rotateY(180deg) translateZ(60px); }
    &:nth-child(4) { transform: rotateY(-90deg) translateZ(60px); }
    &:nth-child(5) { transform: rotateX(90deg) translateZ(60px); }
    &:nth-child(6) { transform: rotateX(-90deg) translateZ(60px); }
  }
`;



const About = () => {
  return (
    <AboutSection
      id="about"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <TextContainer>
        <Title>About Me</Title>
        <Paragraph>
          Hello! I’m Aarnav JP, a Computer Science Engineering student with a passion for tackling new
          challenges and a drive to constantly learn, grow, and excel in software development. I'm currently
          pursuing my Masters at the Birla Institute of Science and Technology - Pilani, set to graduate in 2026.
        </Paragraph>
        <Paragraph>
          My journey in tech has cultivated a strong foundation in competitive programming, data structures, and algorithms,
          with hands-on experience in C++, Python, Machine Learning, and the MERN stack. I’m excited to step into
          the software engineering world and build impactful solutions that meet real-world needs.
        </Paragraph>
      </TextContainer>

      <CubeContainer>
        <Cube>
          <CubeFace color="#ff8c00" />
          <CubeFace color="#e01e37" />
          <CubeFace color="#ffd700" />
          <CubeFace color="#ff4500" />
          <CubeFace color="#ff8c00" />
          <CubeFace color="#e01e37" />
        </Cube>
      </CubeContainer>
    </AboutSection >
  );
};

export default About;
