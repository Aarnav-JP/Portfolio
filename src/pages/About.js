// src/pages/About.js
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import * as THREE from 'three';

// Reuse the background style from the Home page
const AboutSection = styled.section`
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

// Galaxy background effect using three.js
const createGalaxyEffect = (canvasRef) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Galaxy settings
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.PointsMaterial({ color: "#FFFAFA", size: 1, sizeAttenuation: true });
  const starsCount = 10000;

  // Create stars
  const positions = new Float32Array(starsCount * 3);
  for (let i = 0; i < starsCount; i++) {
    positions[i * 3] = Math.random() * 2000 - 1000;  // X
    positions[i * 3 + 1] = Math.random() * 2000 - 1000;  // Y
    positions[i * 3 + 2] = Math.random() * 2000 - 1000;  // Z
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

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    createGalaxyEffect(canvasRef); // Initiating the galaxy effect once the component is mounted
  }, []);

  return (
    <AboutSection id="about">
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

      {/* Galaxy background canvas */}
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
    </AboutSection>
  );
};

export default About;
