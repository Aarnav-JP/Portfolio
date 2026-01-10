import React from "react";
import styled, { keyframes } from "styled-components";

import { FaGithub } from "react-icons/fa";

const ProjectsSection = styled.section`
  min-height: 100vh; 
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding-left: 5%;
  padding-right: 5%;
  height: auto;

    @media (max-width: 900px) {
        padding-top: 70px;
    }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectTitleName = styled.h3`
  font-size: 2.5rem;
  margin-up: 50px;
  margin-bottom: 10px;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
    @media (max-width: 900px) {
        font-size: 2rem;
    }
`;


const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px;
    width: 90%;
    max-width: 680px;
  animation: ${fadeIn} 1s ease-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff8c00;
  margin-bottom: 5px;
`;

const ProjectSubtitle = styled.p`
  font-size: 1.2rem;
  color: #fffa;
  margin-bottom: 10px;
  ${'' /* z-index: 1; */}
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.5;
`;



const Projects = () => {
  return (
    <ProjectsSection id="projects">
      {/* <h2>My Projects</h2> */}
      <ProjectTitleName>Projects</ProjectTitleName>

      <ProjectCard>
        <ProjectTitle>HireMatrix - Online Coding Assessment Platform</ProjectTitle>
        <ProjectSubtitle>

          Technology: MERN | <a href="https://github.com/Sanskar84/HIRE-MATRIX" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
            <FaGithub color="#ffffff" />
          </a> |
          <a href="https://hire-matrix-frontend.vercel.app/" style={{ color: "#ffffff", margin: '10px' }}>Link</a>
        </ProjectSubtitle>
        <ProjectDescription>
          • Built a full-stack MERN online coding assessment platform supporting 4 programming languages with distinct
          user interfaces for companies and candidates, enabling seamless test creation and participation.
          <p></p>
          • Empowered companies to design, administer, and evaluate coding tests with real-time scoring and detailed
          analytics, engaging 500+ active monthly users and accelerating recruitment cycles.
          <p></p>
          • Implemented secure user authentication and a responsive UI, reducing average test load latency by 30% and
          improving user retention by 25% across devices.
        </ProjectDescription>
      </ProjectCard>

      <ProjectCard>
        <ProjectTitle>Distributed LMS with LLM-based Tutoring and Raft-based Data Consistency</ProjectTitle>
        <ProjectSubtitle>Technology: Python | <a href="https://github.com/Aarnav-JP/Distributed_LMS" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
          <FaGithub color="#ffffff" />
        </a></ProjectSubtitle>
        <ProjectDescription>
          • Implemented a Decentralized Learning Management System (LMS) with integrated lightweight language
          model (LLM) for real-time, CPU-optimized tutoring support and automated student-instructor interactions,
          improving accessibility and responsiveness in remote education for 500+ concurrent users.
          <p></p>
          • Configured data consistency using Raft consensus protocol and RPC communication to ensure reliable,
          synchronized tracking of grades and progress. Achieved sub-200ms latency across 3+ distributed nodes,
          gaining hands-on experience with multi-node systems and consensus algorithms.
          <p></p>
          • Reduced system downtime and data conflicts by 30% compared to baseline implementations through robust
          consensus and RPC mechanisms.
        </ProjectDescription>
      </ProjectCard>

      <ProjectCard>
        <ProjectTitle>Pathfinder Visualizer</ProjectTitle>
        <ProjectSubtitle>Technology: React.js, CSS3 | <a href="https://github.com/Aarnav-JP/PathFinder" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
          <FaGithub color="#ffffff" />
        </a> | <a href="https://path-finder-red.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", margin: '10px' }}>Live Demo</a>
        </ProjectSubtitle>
        <ProjectDescription>
          • Architected an interactive Pathfinding Visualizer supporting Dijkstra and A* (A-Star) algorithms to solve
          complex grid-based routing problems in real-time.
          <p></p>
          • Implemented Recursive Division Maze Generation and dynamic node manipulation (Start/End/Walls),
          enabling users to simulate and test algorithms against unpredictable constraints.
          <p></p>
          • Engineered a custom Neon Design System using advanced CSS3 animations (zero UI libraries) and integrated
          live performance metrics, achieving &lt; 15ms execution time for path calculations.
        </ProjectDescription>
      </ProjectCard>


    </ProjectsSection>
  );
};

export default Projects;
