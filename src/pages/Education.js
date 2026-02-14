import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

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
  scroll-margin-top: 100px;

  @media (max-width: 900px) {
    padding: 60px 4% 40px;
  }
`;

const Heading = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 60px;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding-left: 40px;
  z-index: 1;

  @media (max-width: 600px) {
    padding-left: 28px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 47px;
  width: 1px;
  background: linear-gradient(
    to bottom,
    rgba(255, 140, 0, 0.5),
    rgba(255, 140, 0, 0.15),
    transparent
  );
  z-index: 0;

  @media (max-width: 600px) {
    left: 35px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 48px;
  display: flex;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NodeDot = styled.div`
  position: absolute;
  left: -2px;
  top: 30px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #0a0a12;
  border: 2px solid rgba(255, 140, 0, 0.6);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ff8c00;
  }

  @media (max-width: 600px) {
    left: -2px;
    width: 14px;
    height: 14px;

    &::after {
      width: 4px;
      height: 4px;
    }
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 28px 30px;
  margin-left: 32px;
  width: 100%;
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 140, 0, 0.25);
    box-shadow: 0 8px 32px -8px rgba(255, 140, 0, 0.12);
    transform: translateY(-2px);
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

  @media (max-width: 600px) {
    margin-left: 20px;
    padding: 22px 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 14px;
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 140, 0, 0.08);
  border: 1px solid rgba(255, 140, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff8c00;
  font-size: 1.1rem;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 34px;
    height: 34px;
    font-size: 0.95rem;
  }
`;

const HeaderText = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.3px;
  margin: 0 0 3px 0;
  line-height: 1.35;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Spec = styled.span`
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
`;

const CollegeName = styled.div`
  font-size: 1.02rem;
  font-weight: 500;
  color: rgba(0, 255, 234, 0.8);
  margin-top: 2px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Separator = styled.span`
  color: rgba(255, 255, 255, 0.15);
  @media (max-width: 600px) {
    display: none;
  }
`;

const GradeBadge = styled.span`
  background: rgba(255, 140, 0, 0.08);
  border: 1px solid rgba(255, 140, 0, 0.2);
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 500;
  color: #ff8c00;
`;

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <EducationSection
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <Heading>Education</Heading>

      <TimelineContainer>
        <TimelineLine />

        <TimelineItem variants={itemVariants}>
          <NodeDot />
          <Card>
            <CardHeader>
              <IconBox><FaGraduationCap /></IconBox>
              <HeaderText>
                <Degree>Masters of Engineering <Spec>— Computer Science</Spec></Degree>
                <CollegeName>Birla Institute of Science and Technology (BITS)</CollegeName>
              </HeaderText>
            </CardHeader>
            <MetaRow>
              <MetaItem>Aug 2024 – June 2026</MetaItem>
              <Separator>·</Separator>
              <MetaItem>Pilani, Rajasthan</MetaItem>
              <Separator>·</Separator>
              <GradeBadge>8.4 CGPA</GradeBadge>
            </MetaRow>
          </Card>
        </TimelineItem>

        <TimelineItem variants={itemVariants}>
          <NodeDot />
          <Card>
            <CardHeader>
              <IconBox><FaUniversity /></IconBox>
              <HeaderText>
                <Degree>Bachelors of Technology <Spec>— Computer Science & Engineering</Spec></Degree>
                <CollegeName>Bharati Vidyapeeth's College of Engineering, GGSIPU</CollegeName>
              </HeaderText>
            </CardHeader>
            <MetaRow>
              <MetaItem>Aug 2020 – June 2024</MetaItem>
              <Separator>·</Separator>
              <MetaItem>New Delhi</MetaItem>
              <Separator>·</Separator>
              <GradeBadge>8.94 CGPA</GradeBadge>
            </MetaRow>
          </Card>
        </TimelineItem>

        <TimelineItem variants={itemVariants}>
          <NodeDot />
          <Card>
            <CardHeader>
              <IconBox><FaSchool /></IconBox>
              <HeaderText>
                <Degree>12th Standard <Spec>— PCM with Computer Science</Spec></Degree>
                <CollegeName>St. Andrews Scots Sr Sec School</CollegeName>
              </HeaderText>
            </CardHeader>
            <MetaRow>
              <MetaItem>April 2019 – March 2020</MetaItem>
              <Separator>·</Separator>
              <MetaItem>New Delhi</MetaItem>
              <Separator>·</Separator>
              <GradeBadge>95% (CBSE Board)</GradeBadge>
            </MetaRow>
          </Card>
        </TimelineItem>
      </TimelineContainer>
    </EducationSection>
  );
};

export default Education;
