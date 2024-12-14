import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import * as THREE from "three";
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
  height: 150%;
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
`;


const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px;
  width: 90%;
  max-width: 600px;
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

const createGalaxyEffect = (canvasRef) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({ color: "#FFFAFA", size: 1, sizeAttenuation: true });
    const starsCount = 10000;

    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
        positions[i * 3] = Math.random() * 2000 - 1000;
        positions[i * 3 + 1] = Math.random() * 2000 - 1000;
        positions[i * 3 + 2] = Math.random() * 2000 - 1000;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    camera.position.z = 1000;

    const animate = () => {
        requestAnimationFrame(animate);
        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0005;
        renderer.render(scene, camera);
    };

    animate();
};

const Projects = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        createGalaxyEffect(canvasRef);
    }, []);

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
                    <a href="https://hire-matrix-frontend.vercel.app/" style={{ color: "#ffffff",margin: '10px'}}>Link</a>
                </ProjectSubtitle>
                <ProjectDescription>
                    • A MERN stack-based coding assessment platform enabling companies to create and manage tests,
                    evaluate candidates, and provide real-time feedback in a JavaScript environment.
                    <p></p>• Implemented key features including test management, user authentication, and a responsive design to
                    ensure seamless user experience across devices.
                </ProjectDescription>
            </ProjectCard>

            <ProjectCard>
                <ProjectTitle>Distributed LMS with LLM-based Tutoring and Raft-based Data Consistency</ProjectTitle>
                <ProjectSubtitle>Technology: Python | <a href="https://github.com/Aarnav-JP/Distributed_LMS" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
                        <FaGithub color="#ffffff" />
                    </a></ProjectSubtitle>
                <ProjectDescription>
                    • Developed a distributed Learning Management System (LMS) with integrated lightweight language model (LLM)
                    for real-time, CPU-optimized tutoring support and automated student-instructor interactions, improving
                    accessibility and responsiveness in remote education.
                    <p></p>
                    • Implemented data consistency through Raft consensus protocol and RPC communication for reliable,
                    synchronized tracking of critical data such as grades and progress, gaining practical experience with
                    distributed systems and consensus algorithms.
                </ProjectDescription>
            </ProjectCard>

            <ProjectCard>
                <ProjectTitle>Path Finder, an application of Dijkstra's algorithm</ProjectTitle>
                <ProjectSubtitle>Technology: React JS | <a href="https://github.com/Aarnav-JP/PathFinder" target="_blank" rel="noopener noreferrer" style={{ margin: '10px' }}>
                        <FaGithub color="#ffffff" />
                    </a>  </ProjectSubtitle>
                <ProjectDescription>
                    • Developed an interactive Pathfinding Visualizer in React, enabling real-time visualization of Dijkstra’s
                    algorithm with dynamic grid manipulation and user input for start, finish, and obstacles.
                    <p></p>
                    • Optimized algorithm performance and user experience by implementing efficient state management and animations
                    for shortest path and node traversal, enhancing the educational utility of the tool.
                </ProjectDescription>
            </ProjectCard>

            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            />
        </ProjectsSection>
    );
};

export default Projects;
