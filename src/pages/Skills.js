import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
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

const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  background-color: #000000;
  height: 100vh;
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
  margin-top: -40px; // Shift header upwards
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px; // Shift content upwards
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const SkillCard = styled.div`
  background-color: rgba(248, 249, 250, 0.2);
  color: #333;
  padding: 20px;
  border-radius: 8px;
  width: 280px; /* Increased width from 250px to 280px */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color:rgb(0, 255, 234);
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.5; /* Consistent line spacing for readability */
  text-align: left; /* Align text naturally to avoid uneven spacing */
  font-weight: 500; /* Slight boldness for clarity */
  background: linear-gradient(to right, #ffffff, #dcdcdc); /* Subtle gradient text */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px; /* Add top spacing */
  letter-spacing: 0.4px; /* Uniform spacing between letters */
  &:hover {
    transform: scale(1.05); /* Add slight hover animation */
    transition: transform 0.3s ease-in-out;
  }
`;

const TechListTitle = styled.h3`
  font-size: 1.1rem;
  color: #e0e0e0;
  margin: 20px 0;
  font-weight: bold;
`;

const TechList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4fr); // Three columns layout
  gap: 15px;
  font-size: 20px;
  color: #e0e0e0;
  text-align: center;
  max-width: 800px; // Limit width to avoid too wide layout

  span {
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
      color: #ff8c00;
      transform: scale(1.1);
    }
  }
`;

const Skills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      createGalaxyEffect(canvasRef);
    }

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SkillsSection id="skills">
      <GradientText>Skills</GradientText>

      <ContentWrapper>
        <CardsWrapper>
          <SkillCard>
            <CardTitle>Machine Learning</CardTitle>
            <CardDescription>
              Machine Learning has sharpened my ability to create data-driven models that solve complex problems. By working with algorithms and neural networks, I focus on extracting insights and making smarter predictions for real-world applications.
            </CardDescription>


          </SkillCard>
          <SkillCard>
            <CardTitle>Web Development</CardTitle>
            <CardDescription>
              As a Full Stack Web Developer specializing in the MERN stack, I create dynamic, responsive, and visually engaging web applications. My passion lies in crafting seamless user experiences and developing efficient backend systems.
            </CardDescription>
          </SkillCard>
          <SkillCard>
            <CardTitle>Problem Solving</CardTitle>
            <CardDescription>
              Competitive programming has shaped my critical thinking and strategic approach to solving problems. Through platforms like Codeforces, CodeChef, and CSES, I’ve mastered algorithms and data structures, while embracing challenges that test and push my limits, transforming obstacles into opportunities.
            </CardDescription>
          </SkillCard>
        </CardsWrapper>
        <TechListTitle>Tech I'm Familiar With</TechListTitle>
        <TechList>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>SASS</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
          <span>jQuery</span>
          <span>React.js</span>
          {/* <span>Redux</span> */}
          {/* <span>Jest</span> */}
          {/* <span>Webpack</span> */}
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Firebase</span>
          <span>Java</span>
          <span>Python</span>
          <span>Git</span>
          <span>MySQL</span>
          <span>C</span>
          <span>C++</span>
          {/* <span>Ruby on Rails</span> */}
          {/* <span>Solidity</span> */}
          {/* <span>Truffle</span> */}
          {/* <span>Adobe XD</span> */}
        </TechList>
      </ContentWrapper>

      <canvas ref={canvasRef} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }} />
    </SkillsSection>
  );
};

export default Skills;
