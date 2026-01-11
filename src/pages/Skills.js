import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaNodeJs, FaJava, FaPython, FaGitAlt, FaAws, FaCode } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiMongodb, SiMysql, SiFirebase } from "react-icons/si";

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

const SkillsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #ffffff;
  position: relative;
  /* overflow: hidden; */ 
  height: 100%;
  padding: 0 5%;
  scroll-margin-top: 100px; /* Prevent navbar overlap */
  
  @media (max-width: 900px) {
    min-height: 100vh;
  }
`;

const GradientText = styled.h1`
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 50px;
  animation: ${fadeIn} 1s ease-out forwards;
  position: relative;
  z-index: 1;
  margin-top: -40px; 
  @media (max-width: 900px) {
    font-size: 2.2rem;
    margin-top: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px; 
  @media (max-width: 900px) {
    margin-top: 0;
    width: 100%;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    gap: 25px;
  }
`;

const SkillCard = styled.div`
  position: relative;
  background: rgba(20, 20, 30, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 35px 25px;
  border-radius: 20px;
  width: 320px;
  border: 2px solid ${props => props.$accentColor || 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  /* Decorative corner accent */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, ${props => props.$accentColor || '#ff8c00'}33, transparent);
    border-radius: 0 20px 0 100%;
  }

  /* Bottom glow line */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${props => props.$accentColor || '#ff8c00'}, transparent);
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: ${props => props.$accentColor || '#ff8c00'};
    box-shadow: 0 15px 45px ${props => props.$accentColor || '#ff8c00'}40,
                0 0 30px ${props => props.$accentColor || '#ff8c00'}20;
    
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 30px 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const CardTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardIconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${props => `linear-gradient(135deg, ${props.$color}20, ${props.$color}10)`};
  border: 1px solid ${props => `${props.$color}40`};
  font-size: 1.8rem;
  box-shadow: 0 0 20px ${props => `${props.$color}30`};
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.$color || 'rgb(0, 255, 234)'};
  margin: 0;
  text-shadow: 0 0 15px ${props => `${props.$color}60`};
  letter-spacing: -0.5px;
`;

const CardSubtitle = styled.div`
  font-size: 0.85rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 600;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.7;
  text-align: justify;
  font-weight: 400;
  margin-top: 10px;
  position: relative;
  z-index: 1;
`;

const PlanetLabel = styled.span`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.95);
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #ff8c00;
  font-size: 0.9rem;
  font-weight: bold;
  color: #ff8c00;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, top 0.3s ease;
  pointer-events: none;
  z-index: 1000;
  box-shadow: 0 0 15px rgba(0,0,0,0.8);
`;

const TechListTitle = styled.h3`
  font-size: 1.1rem;
  color: #e0e0e0;
  margin: 20px 0;
  font-weight: bold;
`;

const orbitAnimation = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const counterRotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const SolarSystemContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;

  @media (max-width: 900px) {
    transform: scale(0.6);
    margin: 40px auto; /* Increased gap */
    width: 350px;
    height: 350px;
  }
  @media (max-width: 450px) {
    transform: scale(0.5);
    margin: 0px auto; /* Increased gap */
    width: 300px;
  }
`;

const Sun = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #ff8c00, #e01e37);
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(255, 140, 0, 0.8);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
`;

const OrbitRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  
  animation: ${orbitAnimation} linear infinite;
  pointer-events: none;

  &.inner { width: 220px; height: 220px; animation-duration: 20s; }
  &.middle { width: 380px; height: 380px; animation-duration: 30s; }
  &.outer { width: 540px; height: 540px; animation-duration: 40s; }
`;

const PlanetContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  margin-top: -25px; /* Center using margins */
  margin-left: -25px;
  animation: ${counterRotate} linear infinite;
  animation-duration: ${({ $duration }) => $duration || '20s'};
  pointer-events: auto;
`;

const PlanetBody = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #ff8c00;
  box-shadow: 0 0 10px rgba(255, 140, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  z-index: 20;

  &:hover {
    transform: scale(1.2);
    background: #ff8c00;
    color: black;
    box-shadow: 0 0 25px rgba(255, 140, 0, 0.8);
    cursor: pointer;
    z-index: 100;
  }

  &:hover + ${PlanetLabel} {
    opacity: 1;
    top: -55px;
  }
`;

const PlanetWrapper = ({ className, icon, label, style, orbitDuration }) => (
  <PlanetContainer className={className} style={style} $duration={orbitDuration}>
    <PlanetBody>{icon}</PlanetBody>
    <PlanetLabel>{label}</PlanetLabel>
  </PlanetContainer>
);

const Skills = () => {
  return (
    <SkillsSection
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <GradientText>Skills</GradientText>

      <ContentWrapper>
        <CardsWrapper>
          <SkillCard $accentColor="#00ffea">
            <CardHeader>
              <CardIconBadge $color="#00ffea">🤖</CardIconBadge>
              <CardTextGroup>
                <CardTitle $color="#00ffea">Machine Learning</CardTitle>
                <CardSubtitle>AI & Data Science</CardSubtitle>
              </CardTextGroup>
            </CardHeader>
            <CardDescription>
              Machine Learning has sharpened my ability to create data-driven models that solve complex problems. By working with algorithms and neural networks, I focus on extracting insights and making smarter predictions for real-world applications.
            </CardDescription>
          </SkillCard>
          <SkillCard $accentColor="#ff8c00">
            <CardHeader>
              <CardIconBadge $color="#ff8c00">💻</CardIconBadge>
              <CardTextGroup>
                <CardTitle $color="#ff8c00">Web Development</CardTitle>
                <CardSubtitle>Full Stack MERN</CardSubtitle>
              </CardTextGroup>
            </CardHeader>
            <CardDescription>
              As a Full Stack Web Developer specializing in the MERN stack, I create dynamic, responsive, and visually engaging web applications. My passion lies in crafting seamless user experiences and developing efficient backend systems.
            </CardDescription>
          </SkillCard>
          <SkillCard $accentColor="#a855f7">
            <CardHeader>
              <CardIconBadge $color="#a855f7">🧩</CardIconBadge>
              <CardTextGroup>
                <CardTitle $color="#a855f7">Problem Solving</CardTitle>
                <CardSubtitle>Competitive Programming</CardSubtitle>
              </CardTextGroup>
            </CardHeader>
            <CardDescription>
              Competitive programming has shaped my critical thinking and strategic approach to solving problems. Through platforms like Codeforces, CodeChef, and CSES, I've mastered algorithms and data structures, while embracing challenges that test and push my limits, transforming obstacles into opportunities.
            </CardDescription>
          </SkillCard>
        </CardsWrapper>
        <TechListTitle style={{ textAlign: 'center', marginTop: '40px' }}>Tech Stack Solar System</TechListTitle>
        <SolarSystemContainer>
          <Sun>
            <FaCode size={40} />
          </Sun>

          {/* Inner Orbit (4 items) - Rotated 45 degrees */}
          <OrbitRing className="inner">
            <PlanetWrapper orbitDuration="20s" style={{ left: '85.4%', top: '14.6%' }} icon={<SiCplusplus size={24} />} label="C++" />
            <PlanetWrapper orbitDuration="20s" style={{ left: '85.4%', top: '85.4%' }} icon={<FaJava size={24} />} label="Java" />
            <PlanetWrapper orbitDuration="20s" style={{ left: '14.6%', top: '85.4%' }} icon={<FaPython size={24} />} label="Python" />
            <PlanetWrapper orbitDuration="20s" style={{ left: '14.6%', top: '14.6%' }} icon={<SiJavascript size={24} />} label="JavaScript" />
          </OrbitRing>

          {/* Middle Orbit (5 items) */}
          <OrbitRing className="middle">
            <PlanetWrapper orbitDuration="30s" style={{ left: '100%', top: '50%' }} icon={<FaReact size={24} />} label="React" />
            <PlanetWrapper orbitDuration="30s" style={{ left: '65.5%', top: '97.6%' }} icon={<FaHtml5 size={24} />} label="HTML5" />
            <PlanetWrapper orbitDuration="30s" style={{ left: '9.5%', top: '79.4%' }} icon={<FaCss3Alt size={24} />} label="CSS3" />
            <PlanetWrapper orbitDuration="30s" style={{ left: '9.5%', top: '20.6%' }} icon={<FaSass size={24} />} label="SASS" />
            <PlanetWrapper orbitDuration="30s" style={{ left: '65.5%', top: '2.4%' }} icon={<FaBootstrap size={24} />} label="Bootstrap" />
          </OrbitRing>

          {/* Outer Orbit (6 items) */}
          <OrbitRing className="outer">
            <PlanetWrapper orbitDuration="40s" style={{ left: '100%', top: '50%' }} icon={<FaNodeJs size={24} />} label="Node.js" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '75%', top: '93.3%' }} icon={<SiMongodb size={24} />} label="MongoDB" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '25%', top: '93.3%' }} icon={<SiMysql size={24} />} label="MySQL" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '0%', top: '50%' }} icon={<FaGitAlt size={24} />} label="Git" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '25%', top: '6.7%' }} icon={<FaAws size={24} />} label="AWS" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '75%', top: '6.7%' }} icon={<SiFirebase size={24} />} label="Firebase" />
          </OrbitRing>
        </SolarSystemContainer>
      </ContentWrapper>
    </SkillsSection>
  );
};

export default Skills;
