import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import profileImage from '../assets/home_profile.jpg';
import * as THREE from 'three';
import Typed from 'typed.js'; // Import Typed directly

// Reuse the background style from the Home page
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;  // Ensures the section height fits the viewport
  color: #ffffff;
  padding: 0 10%;
  position: relative;
  overflow: hidden;  // Prevent overflow
  flex-wrap: wrap; // Ensure responsive behavior when screen size reduces
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
  z-index: 1;
  white-space: nowrap; // Prevent line breaks within single text element
  margin-right: 40px;  // Add some margin to create space between text and image
  max-width: 60%; // Ensures text container doesn't take too much space
`;

// Title style for the Home section
const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block; // Ensure title stays in its own line
`;

// Tagline text style
const Tagline = styled.p`
  font-size: 1.3rem;
  margin: 20px 0;
  opacity: 0.8;
  display: block; // Ensure tagline stays in its own line
`;

// Profile image container
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeIn} 1.2s ease-out forwards;
  z-index: 1;
  max-width: 40%; // Ensures the profile image container doesn't take too much space
`;

// Profile image styling
const ProfileImage = styled.img`
  width: 80%; // Adjust the width to prevent the image from becoming too large
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

// Scroll indicator
const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${fadeIn} 2s ease-out forwards infinite alternate;
  z-index: 1;
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

const Home = () => {
    const canvasRef = useRef(null);
    const titleRef = useRef(null);  // Reference for the title
    const taglineRef = useRef(null); // Reference for the tagline

    useEffect(() => {
        createGalaxyEffect(canvasRef);

        // Initialize the typing animation for the name/title
        const typedTitle = new Typed(titleRef.current, {
            strings: ["Hey, I’m Aarnav JP"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: false,
            showCursor: false,  // Disable cursor
        });

        // Initialize the typing animation for the tagline
        const typedTagline = new Typed(taglineRef.current, {
            strings: ["Software Engineer | Competitive Programmer | Web Developer"],
            typeSpeed: 40,
            backSpeed: 20,
            loop: false,
            showCursor: false,  // Disable cursor
        });

        return () => {
            // Destroy instances on cleanup to prevent memory leaks
            typedTitle.destroy();
            typedTagline.destroy();
        };
    }, []);

    return (
        <HeroSection id="home">
            <TextContainer>
                <Title ref={titleRef}></Title>  {/* Title (name) */}
                <Tagline ref={taglineRef}></Tagline>  {/* Tagline */}
            </TextContainer>
            <ImageContainer>
                <ProfileImage src={profileImage} alt="Aarnav JP" />
            </ImageContainer>
            <ScrollIndicator>↓</ScrollIndicator>

            {/* Galaxy background canvas */}
            <canvas ref={canvasRef} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0
            }} />
        </HeroSection>
    );
};

export default Home;
