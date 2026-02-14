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
  scroll-margin-top: 100px;

  @media (max-width: 900px) {
    padding: 80px 4% 120px;
    min-height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1300px;
  width: 100%;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 80px;
  }
`;

const TextPanel = styled.div`
  flex: 1.2;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 36px;
  transition: border-color 0.35s ease;

  &:hover {
    border-color: rgba(255, 140, 0, 0.2);
  }

  /* Subtle top highlight */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 24px;
    right: 24px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
  }

  @media (max-width: 900px) {
    padding: 28px 22px;
  }
`;

const Title = styled.h1`
  font-size: 2.6rem;
  margin: 0 0 24px 0;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const SectionLabel = styled.h3`
  font-size: 0.8rem;
  color: rgba(255, 140, 0, 0.7);
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin: 28px 0 12px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;

  &::after {
    content: '';
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 140, 0, 0.25), transparent);
    flex: 1;
  }
`;

const Paragraph = styled.p`
  font-size: 0.98rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
`;

const Highlight = styled.span`
  color: ${props => props.$color || '#ff8c00'};
  font-weight: 500;
`;

const AnimationPanel = styled(motion.div)`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  perspective: 1200px;
  transform-style: preserve-3d;

  @media (max-width: 900px) {
    height: 300px;
    width: 100%;
  }
`;

const rotateCube = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

const CubeWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  transform-style: preserve-3d;
  animation: ${rotateCube} 20s infinite linear;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 900px) {
    width: 140px;
    height: 140px;
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.$color};
  background: ${props => `${props.$color}10`};
  box-shadow: 0 0 20px ${props => `${props.$color}40`}, inset 0 0 20px ${props => `${props.$color}20`};
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: visible;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => `${props.$color}30`};
    box-shadow: 0 0 40px ${props => `${props.$color}80`}, inset 0 0 30px ${props => `${props.$color}40`};
    border-color: ${props => props.$color};
  }

  &:nth-child(1) { transform: rotateY(0deg) translateZ(90px); }
  &:nth-child(2) { transform: rotateY(90deg) translateZ(90px); }
  &:nth-child(3) { transform: rotateY(180deg) translateZ(90px); }
  &:nth-child(4) { transform: rotateY(-90deg) translateZ(90px); }
  &:nth-child(5) { transform: rotateX(90deg) translateZ(90px); }
  &:nth-child(6) { transform: rotateX(-90deg) translateZ(90px); }

  @media (max-width: 900px) {
    &:nth-child(1) { transform: rotateY(0deg) translateZ(70px); }
    &:nth-child(2) { transform: rotateY(90deg) translateZ(70px); }
    &:nth-child(3) { transform: rotateY(180deg) translateZ(70px); }
    &:nth-child(4) { transform: rotateY(-90deg) translateZ(70px); }
    &:nth-child(5) { transform: rotateX(90deg) translateZ(70px); }
    &:nth-child(6) { transform: rotateX(-90deg) translateZ(70px); }
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

          <SectionLabel>WHO I AM</SectionLabel>
          <Paragraph>
            Hello! I'm <Highlight $color="rgba(0, 255, 234, 0.9)">Aarnav JP</Highlight>, a Computer Science Engineering student with a passion for
            tackling new challenges and a drive to constantly learn, grow, and excel in software
            development. I'm currently pursuing my <Highlight>Masters</Highlight> at the <Highlight>Birla Institute of Science and
              Technology - Pilani</Highlight>, set to graduate in 2026.
          </Paragraph>

          <SectionLabel>MY JOURNEY</SectionLabel>
          <Paragraph>
            My journey in tech has cultivated a strong foundation in <Highlight $color="rgba(168, 85, 247, 0.9)">competitive programming</Highlight>,
            <Highlight $color="rgba(168, 85, 247, 0.9)"> data structures</Highlight>, and <Highlight $color="rgba(168, 85, 247, 0.9)">algorithms</Highlight>, with hands-on experience in <Highlight>C++</Highlight>, <Highlight>Python</Highlight>, <Highlight>Machine
              Learning</Highlight>, and the <Highlight>MERN stack</Highlight>. I'm excited to step into the software engineering world
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
