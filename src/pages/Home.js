import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import profileImage from '../assets/home_profile.jpg';
import Typed from 'typed.js';

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

const pulseRing = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.4), 0 0 30px rgba(255, 140, 0, 0.15); }
  50% { box-shadow: 0 0 0 12px rgba(255, 140, 0, 0), 0 0 40px rgba(224, 30, 55, 0.2); }
  100% { box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.4), 0 0 30px rgba(255, 140, 0, 0.15); }
`;

const bounceDown = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(8px); }
  60% { transform: translateX(-50%) translateY(4px); }
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%; 
  color: #ffffff;
  padding: 0 10%;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out forwards;
  z-index: 1;
  white-space: nowrap; 
  margin-right: 40px;  
  max-width: 60%; 

  @media (max-width: 1288px) {
    font-size: 0.9rem;
    max-width: 55%;
  }
  @media (max-width: 1100px) {
    margin-top: 50px;
    margin-right: 0;
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
    white-space: normal;
    overflow-wrap: anywhere;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeIn} 1.2s ease-out forwards;
  z-index: 1;
  max-width: 40%; 

  @media (max-width: 1288px) {
    max-width: 32%;
  }

  @media (max-width: 1100px) {
    max-width: 60%;
    margin-bottom: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 80%; 
  height: auto;
  border-radius: 50%;
  border: 3px solid rgba(255, 140, 0, 0.4);
  animation: ${pulseRing} 3s ease-in-out infinite;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1288px) {
    width: 64%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  background: linear-gradient(135deg, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 1288px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.3rem;
  margin: 20px 0;
  opacity: 0.7;
  font-weight: 400;
  letter-spacing: 0.3px;

  @media (max-width: 1288px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounceDown} 2s ease infinite;
  z-index: 1;
  opacity: 0.5;
  font-size: 1.4rem;
  color: rgba(255, 140, 0, 0.7);
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 12px;
  }
`;

const Home = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const typedTitle = new Typed(titleRef.current, {
      strings: ["Hey, I'm Aarnav JP"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      showCursor: false,
    });

    const typedTagline = new Typed(taglineRef.current, {
      strings: ["Software Engineer | Competitive Programmer | Web Developer"],
      typeSpeed: 40,
      backSpeed: 20,
      loop: false,
      showCursor: false,
    });

    return () => {
      typedTitle.destroy();
      typedTagline.destroy();
    };
  }, []);

  return (
    <HeroSection id="home">
      <TextContainer>
        <Title ref={titleRef}></Title>
        <Tagline ref={taglineRef}></Tagline>
      </TextContainer>
      <ImageContainer>
        <ProfileImage src={profileImage} alt="Aarnav JP" />
      </ImageContainer>
      <ScrollIndicator>
        <Link to="about" smooth={true} duration={500} offset={-60}>▾</Link>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Home;
