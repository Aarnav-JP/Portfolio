// src/pages/About.js
import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #ffffff;
  padding: 80px 5%;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 100px; /* Prevent navbar overlap */
  
  @media (max-width: 900px) {
    padding: 80px 4% 120px; /* Increased bottom padding to prevent overlap */
    min-height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1400px;
  width: 100%;
  align-items: center;
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 100px; /* Increased gap to prevent overlap with parallax */
  }
`;

const TextPanel = styled.div`
  flex: 1.2;
  position: relative;
  background: rgba(20, 20, 30, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 255, 234, 0.3);
  border-radius: 24px;
  padding: 35px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
  /* Decorative corner accent */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #00ffea22, transparent);
    border-radius: 0 24px 0 100%;
  }
  
  @media (max-width: 900px) {
    padding: 25px 20px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0 0 20px 0;
  background: linear-gradient(90deg, #ff8c00, #ff0055);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -1px;
  
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const SectionHeader = styled.h3`
  font-size: 1.1rem;
  color: #00ffea;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 25px 0 15px 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::after {
    content: '';
    height: 1px;
    background: linear-gradient(90deg, #00ffea40, transparent);
    flex: 1;
  }
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  color: #e0e0e0;
  line-height: 1.8;
  margin: 0;
  text-align: justify;
  font-weight: 300;
`;

const HighlightedText = styled.span`
  color: ${props => props.$color || '#ff8c00'};
  font-weight: 600;
`;

const AnimationPanel = styled(motion.div)`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  perspective: 1200px; /* Increased perspective */
  transform-style: preserve-3d; /* Ensure 3D context is preserved */
  
  @media (max-width: 900px) {
    height: 300px;
    width: 100%;
  }
`;

// Neon Cube Animation
const rotateCube = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

const CubeWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: ${rotateCube} 15s infinite linear;
  
  /* Pause animation on hover for better interaction */
  &:hover {
    animation-play-state: paused;
  }
  
  @media (max-width: 900px) {
    width: 150px;
    height: 150px;
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.$color};
  background: ${props => props.$color}10;
  box-shadow: 0 0 20px ${props => props.$color}40, inset 0 0 20px ${props => props.$color}20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  backface-visibility: visible;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Hover Effect: Slight Glow */
  &:hover {
    background: ${props => props.$color}30;
    box-shadow: 0 0 40px ${props => props.$color}80, inset 0 0 30px ${props => props.$color}40;
    border-color: ${props => props.$color};
  }
  
  /* Positioning faces */
  &:nth-child(1) { transform: rotateY(0deg) translateZ(100px); }
  &:nth-child(2) { transform: rotateY(90deg) translateZ(100px); }
  &:nth-child(3) { transform: rotateY(180deg) translateZ(100px); }
  &:nth-child(4) { transform: rotateY(-90deg) translateZ(100px); }
  &:nth-child(5) { transform: rotateX(90deg) translateZ(100px); }
  &:nth-child(6) { transform: rotateX(-90deg) translateZ(100px); }
  
  @media (max-width: 900px) {
    &:nth-child(1) { transform: rotateY(0deg) translateZ(75px); }
    &:nth-child(2) { transform: rotateY(90deg) translateZ(75px); }
    &:nth-child(3) { transform: rotateY(180deg) translateZ(75px); }
    &:nth-child(4) { transform: rotateY(-90deg) translateZ(75px); }
    &:nth-child(5) { transform: rotateX(90deg) translateZ(75px); }
    &:nth-child(6) { transform: rotateX(-90deg) translateZ(75px); }
  }
`;

const About = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Disable parallax on mobile to prevent overlap
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [50, -50]);

  return (
    <AboutSection
      id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <ContentWrapper>
        <TextPanel>
          <Title>About Me</Title>
          {/* Badges removed as per request */}

          <SectionHeader>WHO I AM</SectionHeader>
          <Paragraph>
            Hello! I'm <HighlightedText $color="#00ffea">Aarnav JP</HighlightedText>, a Computer Science Engineering student with a passion for
            tackling new challenges and a drive to constantly learn, grow, and excel in software
            development. I'm currently pursuing my <HighlightedText>Masters</HighlightedText> at the <HighlightedText>Birla Institute of Science and
              Technology - Pilani</HighlightedText>, set to graduate in 2026.
          </Paragraph>

          <SectionHeader>MY JOURNEY</SectionHeader>
          <Paragraph>
            My journey in tech has cultivated a strong foundation in <HighlightedText $color="#a855f7">competitive programming</HighlightedText>,
            <HighlightedText $color="#a855f7">data structures</HighlightedText>, and <HighlightedText $color="#a855f7">algorithms</HighlightedText>, with hands-on experience in <HighlightedText>C++</HighlightedText>, <HighlightedText>Python</HighlightedText>, <HighlightedText>Machine
              Learning</HighlightedText>, and the <HighlightedText>MERN stack</HighlightedText>. I'm excited to step into the software engineering world
            and build impactful solutions that meet real-world needs.
          </Paragraph>
        </TextPanel>

        <AnimationPanel style={{ y }}>
          <CubeWrapper>
            <CubeFace $color="#ff8c00" />
            <CubeFace $color="#00ffea" />
            <CubeFace $color="#a855f7" />
            <CubeFace $color="#ff0055" />
            <CubeFace $color="#ff8c00" />
            <CubeFace $color="#00ffea" />
          </CubeWrapper>
        </AnimationPanel>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
