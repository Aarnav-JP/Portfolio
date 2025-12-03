import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

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
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

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


// Main section containing the experience content
const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  position: relative;
  overflow: hidden; /* Hide overflow to prevent scroll */
    margin: 50px;
  padding: 20px;
  box-sizing: border-box;
  ${'' /* z-index: 1; */}
  ${'' /* background-color: #000000; */}
    @media (max-width: 900px) {
        margin: 20px 0;
        padding: 10px;
    }
  
`;

// Content that holds all experience entries
const ExperienceContent = styled.div`
  max-width: 800px;
  z-index: 1;
  text-align: left;
`;

// Title of the experience section
const ExperienceTitle = styled.h3`
  font-size: 2.5rem;
  margin: 20px;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
`;
// Each individual experience entry
const ExperienceEntry = styled.div`
  margin-bottom: 50px; /* Increase bottom margin to prevent cutting off the last card */
  padding: 20px;
  border: 2px solid #00ffcc; /* Fluorescent border */
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent background */
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.7); /* Fluorescent glow effect */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, z-index 0.3s ease-in-out;
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  &:hover {
    border-color: #ff00ff; /* Change border color on hover to a pink fluorescent color */
    box-shadow: 0 0 25px rgba(255, 0, 255, 0.7); /* Increase glow effect on hover */
    transform: translateY(-15px); /* Lift the card up by 15px on hover */
    z-index: 2; /* Bring card to the foreground */
  }
`;


// Subtitle for each experience entry
const EntrySubtitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #e0e0e0;
`;

// Details of each experience entry
const EntryDetails = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #dcdcdc;
  white-space: pre-line;
`;

// Function to create galaxy background using Three.js

// Title for each experience entry with link styling
const EntryTitle = styled.a`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #ff8c00;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ff00ff; /* Change color on hover for link */
  }
`;

const Experience = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        createGalaxyEffect(canvasRef);  // Call the galaxy effect function on component mount
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Adjust on load
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ExperienceSection id="experience">
            <ExperienceTitle>Experience</ExperienceTitle>
            <ExperienceContent>
                <ExperienceEntry>
                    <EntryTitle href="https://www.marvell.com/" target="_blank" rel="noopener noreferrer">
                        Marvell Technology
                    </EntryTitle>
                    <EntrySubtitle>Software Engineering Intern (May 2025 – July 2025)</EntrySubtitle>
                    <EntryDetails>
                        • Worked on DPDK/ODP/VPP drivers for Marvell Octeon TX2/TX3 platforms, achieving 25% latency reduction and 10,000+ TLS/IPsec connections/sec via zero-copy buffer optimization and ARMv8-A NEON crypto acceleration.
                        <br />
                        • Designed C/C++ cryptographic modules (AES-GCM/SHA-3) with 20% higher CPU utilization through lock-free ring buffers and thread pinning on Linux PREEMPT-RT, ensuring ISO 26262 compliance for safety-critical systems.
                    </EntryDetails>
                </ExperienceEntry>
                <ExperienceEntry>
                    <EntryTitle href="https://unix-plus.com/" target="_blank" rel="noopener noreferrer">
                        UnixPlus Infotech
                    </EntryTitle>
                    <EntrySubtitle>Web Development Intern (July 2023 – September 2023)</EntrySubtitle>
                    <EntryDetails>
                        • Built scalable cloud gaming interfaces using React.js, Node.js, and AWS S3, reducing front-end load time by 20% for 5,000+ concurrent users through code-splitting and CDN caching.
                        <br />
                        • Revamped authentication flows and game consoles with Firebase Auth and Material-UI, increasing user retention by 15% and supporting 3,000+ daily active users via responsive design testing.
                    </EntryDetails>
                </ExperienceEntry>
                <ExperienceEntry>
                    <EntryTitle href="https://www.amazon.science/academic-engagements/amazon-launches-annual-ml-summer-school-in-india" target="_blank" rel="noopener noreferrer">
                        Amazon ML Summer School
                    </EntryTitle>
                    <EntrySubtitle>Apprenticeship (July 2022)</EntrySubtitle>
                    <EntryDetails>
                        • Mastered 8 core ML domains—including Supervised Learning, Deep Neural Networks (DNNs), and Reinforcement Learning—through hands-on projects, achieving top 10% cohort performance in probabilistic modeling and causal inference challenges.
                    </EntryDetails>
                </ExperienceEntry>

            </ExperienceContent>

            {/* Galaxy animation canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed", // Make canvas fixed to cover the entire viewport
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',  // Full height of the viewport
                    zIndex: 0,  // Ensure the canvas stays in the background
                }}
            />
        </ExperienceSection>
    );
};

export default Experience;
