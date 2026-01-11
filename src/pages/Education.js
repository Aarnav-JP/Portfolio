import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 140, 0, 0.5); }
  50% { box-shadow: 0 0 25px rgba(255, 140, 0, 1), 0 0 40px rgba(224, 30, 55, 0.6); }
  100% { box-shadow: 0 0 10px rgba(255, 140, 0, 0.5); }
`;

const EducationSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #ffffff;
  padding: 80px 5%;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 100px; /* Prevent navbar overlap */

  @media (max-width: 900px) {
    padding: 60px 4% 40px;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 60px;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;
  z-index: 1;
  
  @media (max-width: 600px) {
    padding-left: 20px;
  }
`;

/* The Constellation Line */
const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 29px; /* Aligns with the center of the 60px nodes (offset by padding) */
  width: 2px;
  background: linear-gradient(to bottom, #ff8c00, #e01e37, rgba(0,0,0,0));
  background-size: 2px 20px;
  border-left: 2px dashed rgba(255, 140, 0, 0.3);
  z-index: 0;
  
  @media (max-width: 600px) {
    left: 19px; /* Adjusted for smaller icon nodes */
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: flex-start;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

/* Glowing "Planet" Node */
const IconWrapper = styled.div`
  position: absolute;
  left: -30px; /* (60px width / 2) */
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 30% 30%, #ff8c00, #000);
  border: 2px solid #ff8c00;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: white;
  font-size: 1.5rem;
  animation: ${pulseGlow} 3s infinite ease-in-out;
  
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    left: -20px;
    font-size: 1rem;
  }
`;

const Card = styled(motion.div)`
  background: rgba(25, 25, 35, 0.4); /* Darker, more premium glass */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 30px;
  margin-left: 50px;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    border-color: rgba(255, 140, 0, 0.5);
    box-shadow: 0 10px 40px -10px rgba(255, 140, 0, 0.3);
  }

  /* Premium Shine Effect */
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

  @media (max-width: 600px) {
    margin-left: 30px;
    padding: 24px;
  }
`;

const Degree = styled.h3`
  font-size: 1.9rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin: 0 0 8px 0;
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Specialization = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  color: #00ffea; /* Neon Blue */
  text-shadow: 0 0 10px rgba(0, 255, 234, 0.4);
  margin: 0 0 15px 0;
  font-family: 'Consolas', monospace;
  
  @media (max-width: 600px) {
    font-size: 1.05rem;
  }
`;

const CollegeName = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  color: #ff8c00;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: #ff8c00;
    font-size: 1.2rem;
  }
`;

const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 0.95rem;
  color: #ccc;
`;

const DetailItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Separator = styled.span`
  color: rgba(255, 255, 255, 0.2);
  
  @media (max-width: 600px) {
    display: none;
  }
`;

const GradeBadge = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 4px 12px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #ccc;
`;

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <EducationSection
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Heading>Education Journey</Heading>

      <TimelineContainer>
        <TimelineLine />

        {/* Masters */}
        <TimelineItem variants={itemVariants}>
          <IconWrapper>
            <FaGraduationCap />
          </IconWrapper>
          <Card>
            <Degree>Masters of Engineering</Degree>
            <Specialization>Computer Science</Specialization>
            <CollegeName>
              Birla Institute of Science and Technology (BITS)
            </CollegeName>
            <DetailsRow>
              <DetailItem>Aug 2024 – June 2026</DetailItem>
              <Separator>•</Separator>
              <DetailItem>Pilani, Rajasthan</DetailItem>
              <Separator>•</Separator>
              <GradeBadge>8.4 CGPA</GradeBadge>
            </DetailsRow>
          </Card>
        </TimelineItem>

        {/* Bachelors */}
        <TimelineItem variants={itemVariants}>
          <IconWrapper>
            <FaUniversity />
          </IconWrapper>
          <Card>
            <Degree>Bachelors of Technology</Degree>
            <Specialization>Computer Science & Engineering</Specialization>
            <CollegeName>
              Bharati Vidyapeeth's College of Engineering
            </CollegeName>
            <DetailsRow>
              <DetailItem>Aug 2020 – June 2024</DetailItem>
              <Separator>•</Separator>
              <DetailItem>New Delhi</DetailItem>
              <Separator>•</Separator>
              <GradeBadge>8.94 CGPA</GradeBadge>
            </DetailsRow>
          </Card>
        </TimelineItem>

        {/* School */}
        <TimelineItem variants={itemVariants}>
          <IconWrapper>
            <FaSchool />
          </IconWrapper>
          <Card>
            <Degree>12th Standard</Degree>
            <Specialization>PCM with Computer Science</Specialization>
            <CollegeName>
              St. Andrews Scots Sr Sec School
            </CollegeName>
            <DetailsRow>
              <DetailItem>April 2019 – March 2020</DetailItem>
              <Separator>•</Separator>
              <DetailItem>New Delhi</DetailItem>
              <Separator>•</Separator>
              <GradeBadge>95% (CBSE Board)</GradeBadge>
            </DetailsRow>
          </Card>
        </TimelineItem>

      </TimelineContainer>
    </EducationSection>
  );
};

export default Education;
