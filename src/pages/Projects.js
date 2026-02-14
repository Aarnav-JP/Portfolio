import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectsSection = styled(motion.section)`
  min-height: 100vh; 
  padding: 80px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  height: auto;
  scroll-margin-top: 100px;

  @media (max-width: 900px) {
    padding-top: 70px;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
  font-weight: 700;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 2.2rem;
    margin-bottom: 35px;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 800px;
  z-index: 1;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(25, 25, 35, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    border-color: rgba(255, 140, 0, 0.5);
    box-shadow: 0 10px 40px -10px rgba(255, 140, 0, 0.3);
  }

  /* Premium Shine */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    opacity: 0.5;
  }
  
  /* Bottom glow */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ff8c00, transparent);
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: -0.3px;
  
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const TechBadgesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const TechBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 12px;
  border-radius: 20px;
  background: ${props => `${props.$color}15`};
  border: 1px solid ${props => `${props.$color}40`};
  color: ${props => props.$color};
`;

const LinksRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.2s ease;

  &:hover {
    color: #ff8c00;
    border-color: rgba(255, 140, 0, 0.4);
    background: rgba(255, 140, 0, 0.08);
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled.li`
  font-size: 1rem;
  line-height: 1.7;
  color: #ccc;
  margin-bottom: 10px;
  padding-left: 18px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ff8c00;
    box-shadow: 0 0 6px rgba(255, 140, 0, 0.5);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

const Projects = () => {
  return (
    <ProjectsSection
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <Heading>Projects</Heading>

      <CardsGrid>
        <ProjectCard variants={cardVariants}>
          <ProjectTitle>HireMatrix — Online Coding Assessment Platform</ProjectTitle>
          <TechBadgesRow>
            <TechBadge $color="#00ffea">React</TechBadge>
            <TechBadge $color="#68a063">Node.js</TechBadge>
            <TechBadge $color="#a855f7">MongoDB</TechBadge>
            <TechBadge $color="#ff8c00">Express</TechBadge>
          </TechBadgesRow>
          <LinksRow>
            <IconButton href="https://github.com/Sanskar84/HIRE-MATRIX" target="_blank" rel="noopener noreferrer">
              <FaGithub size={14} /> GitHub
            </IconButton>
            <IconButton href="https://hire-matrix-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={12} /> Live Demo
            </IconButton>
          </LinksRow>
          <BulletList>
            <BulletItem>
              Built a full-stack MERN online coding assessment platform supporting 4 programming languages with distinct user interfaces for companies and candidates, enabling seamless test creation and participation.
            </BulletItem>
            <BulletItem>
              Empowered companies to design, administer, and evaluate coding tests with real-time scoring and detailed analytics, engaging 500+ active monthly users and accelerating recruitment cycles.
            </BulletItem>
            <BulletItem>
              Implemented secure user authentication and a responsive UI, reducing average test load latency by 30% and improving user retention by 25% across devices.
            </BulletItem>
          </BulletList>
        </ProjectCard>

        <ProjectCard variants={cardVariants}>
          <ProjectTitle>Distributed LMS with LLM-based Tutoring and Raft-based Data Consistency</ProjectTitle>
          <TechBadgesRow>
            <TechBadge $color="#3572A5">Python</TechBadge>
            <TechBadge $color="#ff8c00">Raft</TechBadge>
            <TechBadge $color="#00ffea">gRPC</TechBadge>
            <TechBadge $color="#a855f7">LLM</TechBadge>
          </TechBadgesRow>
          <LinksRow>
            <IconButton href="https://github.com/Aarnav-JP/Distributed_LMS" target="_blank" rel="noopener noreferrer">
              <FaGithub size={14} /> GitHub
            </IconButton>
          </LinksRow>
          <BulletList>
            <BulletItem>
              Implemented a Decentralized Learning Management System (LMS) with integrated lightweight language model (LLM) for real-time, CPU-optimized tutoring support and automated student-instructor interactions, improving accessibility and responsiveness in remote education for 500+ concurrent users.
            </BulletItem>
            <BulletItem>
              Configured data consistency using Raft consensus protocol and RPC communication to ensure reliable, synchronized tracking of grades and progress. Achieved sub-200ms latency across 3+ distributed nodes, gaining hands-on experience with multi-node systems and consensus algorithms.
            </BulletItem>
            <BulletItem>
              Reduced system downtime and data conflicts by 30% compared to baseline implementations through robust consensus and RPC mechanisms.
            </BulletItem>
          </BulletList>
        </ProjectCard>

        <ProjectCard variants={cardVariants}>
          <ProjectTitle>Pathfinder Visualizer</ProjectTitle>
          <TechBadgesRow>
            <TechBadge $color="#00ffea">React.js</TechBadge>
            <TechBadge $color="#ff8c00">CSS3</TechBadge>
            <TechBadge $color="#a855f7">Algorithms</TechBadge>
          </TechBadgesRow>
          <LinksRow>
            <IconButton href="https://github.com/Aarnav-JP/PathFinder" target="_blank" rel="noopener noreferrer">
              <FaGithub size={14} /> GitHub
            </IconButton>
            <IconButton href="https://path-finder-red.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={12} /> Live Demo
            </IconButton>
          </LinksRow>
          <BulletList>
            <BulletItem>
              Architected an interactive Pathfinding Visualizer supporting Dijkstra and A* (A-Star) algorithms to solve complex grid-based routing problems in real-time.
            </BulletItem>
            <BulletItem>
              Implemented Recursive Division Maze Generation and dynamic node manipulation (Start/End/Walls), enabling users to simulate and test algorithms against unpredictable constraints.
            </BulletItem>
            <BulletItem>
              Engineered a custom Neon Design System using advanced CSS3 animations (zero UI libraries) and integrated live performance metrics, achieving &lt; 15ms execution time for path calculations.
            </BulletItem>
          </BulletList>
        </ProjectCard>
      </CardsGrid>
    </ProjectsSection>
  );
};

export default Projects;
