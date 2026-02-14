import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaNodeJs, FaJava, FaPython, FaGitAlt, FaAws, FaCode } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiMongodb, SiMysql, SiFirebase } from "react-icons/si";

const SkillsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #ffffff;
  position: relative;
  height: 100%;
  padding: 100px 5% 50px;
  scroll-margin-top: 100px;

  @media (max-width: 900px) {
    min-height: 100vh;
    padding: 80px 5%;
  }
`;

const Heading = styled.h1`
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 1;
  margin-top: 0;

  @media (max-width: 900px) {
    font-size: 2rem;
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
  gap: 24px;
  margin-bottom: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

const SkillCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 28px 24px;
  border-radius: 16px;
  width: 320px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${props => `${props.$accentColor}40` || 'rgba(255, 140, 0, 0.25)'};
    box-shadow: 0 8px 32px -8px ${props => `${props.$accentColor}18` || 'rgba(255, 140, 0, 0.1)'};
    transform: translateY(-3px);
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
    width: 100%;
    padding: 24px 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
`;

const CardIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${props => `${props.$color}10`};
  border: 1px solid ${props => `${props.$color}20`};
  font-size: 1.3rem;
`;

const CardTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.3px;
`;

const CardSubtitle = styled.div`
  font-size: 0.78rem;
  color: ${props => props.$color || 'rgba(255, 255, 255, 0.4)'};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  font-weight: 500;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.7;
  font-weight: 400;
  margin: 0;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const PlanetLabel = styled.span`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.95);
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 140, 0, 0.4);
  font-size: 0.85rem;
  font-weight: 600;
  color: #ff8c00;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, top 0.3s ease;
  pointer-events: none;
  z-index: 1000;
`;

const SolarLabel = styled.h3`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin: 40px 0 20px;
  font-weight: 500;
  text-align: center;
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
    margin: 40px auto;
    width: 350px;
    height: 350px;
  }
  @media (max-width: 450px) {
    transform: scale(0.5);
    margin: 0px auto;
    width: 300px;
  }
`;

const Sun = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: radial-gradient(circle, #ff8c00, #e01e37);
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(255, 140, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.1rem;
`;

const OrbitRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  animation: ${orbitAnimation} linear infinite;
  pointer-events: none;

  &.inner { width: 220px; height: 220px; animation-duration: 20s; }
  &.middle { width: 380px; height: 380px; animation-duration: 30s; }
  &.outer { width: 540px; height: 540px; animation-duration: 40s; }
`;

const PlanetContainer = styled.div`
  position: absolute;
  width: 46px;
  height: 46px;
  margin-top: -23px;
  margin-left: -23px;
  animation: ${counterRotate} linear infinite;
  animation-duration: ${({ $duration }) => $duration || '20s'};
  pointer-events: auto;
`;

const PlanetBody = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(10, 10, 18, 0.9);
  border: 1px solid rgba(255, 140, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  position: relative;
  z-index: 20;

  &:hover {
    transform: scale(1.15);
    background: rgba(255, 140, 0, 0.15);
    border-color: #ff8c00;
    color: #ff8c00;
    box-shadow: 0 0 18px rgba(255, 140, 0, 0.4);
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
      <Heading>Skills</Heading>

      <ContentWrapper>
        <CardsWrapper>
          <SkillCard $accentColor="#00ffea">
            <CardHeader>
              <CardIconBox $color="#00ffea">🤖</CardIconBox>
              <CardTextGroup>
                <CardTitle>Machine Learning</CardTitle>
                <CardSubtitle $color="rgba(0, 255, 234, 0.6)">AI & Data Science</CardSubtitle>
              </CardTextGroup>
            </CardHeader>
            <CardDescription>
              Machine Learning has sharpened my ability to create data-driven models that solve complex problems. By working with algorithms and neural networks, I focus on extracting insights and making smarter predictions for real-world applications.
            </CardDescription>
          </SkillCard>
          <SkillCard $accentColor="#ff8c00">
            <CardHeader>
              <CardIconBox $color="#ff8c00">💻</CardIconBox>
              <CardTextGroup>
                <CardTitle>Web Development</CardTitle>
                <CardSubtitle $color="rgba(255, 140, 0, 0.6)">Full Stack MERN</CardSubtitle>
              </CardTextGroup>
            </CardHeader>
            <CardDescription>
              As a Full Stack Web Developer specializing in the MERN stack, I create dynamic, responsive, and visually engaging web applications. My passion lies in crafting seamless user experiences and developing efficient backend systems.
            </CardDescription>
          </SkillCard>
          <SkillCard $accentColor="#a855f7">
            <CardHeader>
              <CardIconBox $color="#a855f7">🧩</CardIconBox>
              <CardTextGroup>
                <CardTitle>Problem Solving</CardTitle>
                <CardSubtitle $color="rgba(168, 85, 247, 0.6)">Competitive Programming</CardSubtitle>
              </CardTextGroup>
            </CardHeader>
            <CardDescription>
              Competitive programming has shaped my critical thinking and strategic approach to solving problems. Through platforms like Codeforces, CodeChef, and CSES, I've mastered algorithms and data structures, while embracing challenges that test and push my limits, transforming obstacles into opportunities.
            </CardDescription>
          </SkillCard>
        </CardsWrapper>
        <SolarLabel>Tech Stack Solar System</SolarLabel>
        <SolarSystemContainer>
          <Sun>
            <FaCode size={36} />
          </Sun>

          {/* Inner Orbit (4 items) */}
          <OrbitRing className="inner">
            <PlanetWrapper orbitDuration="20s" style={{ left: '85.4%', top: '14.6%' }} icon={<SiCplusplus size={22} />} label="C++" />
            <PlanetWrapper orbitDuration="20s" style={{ left: '85.4%', top: '85.4%' }} icon={<FaJava size={22} />} label="Java" />
            <PlanetWrapper orbitDuration="20s" style={{ left: '14.6%', top: '85.4%' }} icon={<FaPython size={22} />} label="Python" />
            <PlanetWrapper orbitDuration="20s" style={{ left: '14.6%', top: '14.6%' }} icon={<SiJavascript size={22} />} label="JavaScript" />
          </OrbitRing>

          {/* Middle Orbit (5 items) */}
          <OrbitRing className="middle">
            <PlanetWrapper orbitDuration="30s" style={{ left: '100%', top: '50%' }} icon={<FaReact size={22} />} label="React" />
            <PlanetWrapper orbitDuration="30s" style={{ left: '65.5%', top: '97.6%' }} icon={<FaHtml5 size={22} />} label="HTML5" />
            <PlanetWrapper orbitDuration="30s" style={{ left: '9.5%', top: '79.4%' }} icon={<FaCss3Alt size={22} />} label="CSS3" />
            <PlanetWrapper orbitDuration="30s" style={{ left: '9.5%', top: '20.6%' }} icon={<FaSass size={22} />} label="SASS" />
            <PlanetWrapper orbitDuration="30s" style={{ left: '65.5%', top: '2.4%' }} icon={<FaBootstrap size={22} />} label="Bootstrap" />
          </OrbitRing>

          {/* Outer Orbit (6 items) */}
          <OrbitRing className="outer">
            <PlanetWrapper orbitDuration="40s" style={{ left: '100%', top: '50%' }} icon={<FaNodeJs size={22} />} label="Node.js" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '75%', top: '93.3%' }} icon={<SiMongodb size={22} />} label="MongoDB" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '25%', top: '93.3%' }} icon={<SiMysql size={22} />} label="MySQL" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '0%', top: '50%' }} icon={<FaGitAlt size={22} />} label="Git" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '25%', top: '6.7%' }} icon={<FaAws size={22} />} label="AWS" />
            <PlanetWrapper orbitDuration="40s" style={{ left: '75%', top: '6.7%' }} icon={<SiFirebase size={22} />} label="Firebase" />
          </OrbitRing>
        </SolarSystemContainer>
      </ContentWrapper>
    </SkillsSection>
  );
};

export default Skills;
