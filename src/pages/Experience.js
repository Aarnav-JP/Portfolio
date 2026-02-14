import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const ExperienceSection = styled(motion.section)`
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
  margin-bottom: 6px;
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
  margin-top: 2px;

  @media (max-width: 600px) {
    width: 34px;
    height: 34px;
    font-size: 0.95rem;
  }
`;

const HeaderText = styled.div`
  flex: 1;
`;

const CompanyName = styled.a`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.3px;
  margin: 0;
  text-decoration: none;
  display: inline-block;
  transition: color 0.2s ease;
  line-height: 1.35;

  &:hover {
    color: #ff8c00;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const RoleTitle = styled.span`
  font-size: 0.92rem;
  font-weight: 500;
  color: rgba(0, 255, 234, 0.8);
  display: block;
  margin-top: 3px;
`;

const DateBadge = styled.span`
  display: inline-block;
  margin-top: 4px;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.4);
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const BulletItem = styled.li`
  font-size: 0.92rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
  padding-left: 16px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(255, 140, 0, 0.6);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <ExperienceSection
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <Heading>Experience</Heading>

      <TimelineContainer>
        <TimelineLine />

        <TimelineItem variants={itemVariants}>
          <NodeDot />
          <Card>
            <CardHeader>
              <IconBox><FaBriefcase /></IconBox>
              <HeaderText>
                <CompanyName href="https://www.marvell.com/" target="_blank" rel="noopener noreferrer">
                  Marvell Technology
                </CompanyName>
                <RoleTitle>Software Engineering Intern</RoleTitle>
                <DateBadge>May 2025 – July 2025</DateBadge>
              </HeaderText>
            </CardHeader>
            <BulletList>
              <BulletItem>
                Developed a high-performance DPDK-based stress test tool for iterative Rx/Tx offload reconfiguration on Marvell CN9K platforms, validating port stability under 1,000+ reconfiguration cycles with zero packet loss and &lt; 2% performance degradation.
              </BulletItem>
              <BulletItem>
                Resolved critical performance and stability issues, including cnxk mac test halts and suboptimal fwd-perf throughput, achieving a ~15% latency improvement and raising forwarding performance to target thresholds across multiple firmware/Rx mode configurations.
              </BulletItem>
            </BulletList>
          </Card>
        </TimelineItem>

        <TimelineItem variants={itemVariants}>
          <NodeDot />
          <Card>
            <CardHeader>
              <IconBox><FaBriefcase /></IconBox>
              <HeaderText>
                <CompanyName href="https://unix-plus.com/" target="_blank" rel="noopener noreferrer">
                  UnixPlus Infotech
                </CompanyName>
                <RoleTitle>Web Development Intern</RoleTitle>
                <DateBadge>July 2023 – September 2023</DateBadge>
              </HeaderText>
            </CardHeader>
            <BulletList>
              <BulletItem>
                Built scalable cloud gaming interfaces using React.js, Node.js, and AWS S3, reducing front-end load time by 20% for 5,000+ concurrent users through code-splitting and CDN caching.
              </BulletItem>
              <BulletItem>
                Revamped authentication flows and game consoles with Firebase Auth and Material-UI, increasing user retention by 15% and supporting 3,000+ daily active users via responsive design testing.
              </BulletItem>
            </BulletList>
          </Card>
        </TimelineItem>

        <TimelineItem variants={itemVariants}>
          <NodeDot />
          <Card>
            <CardHeader>
              <IconBox><FaBriefcase /></IconBox>
              <HeaderText>
                <CompanyName href="https://www.amazon.science/academic-engagements/amazon-launches-annual-ml-summer-school-in-india" target="_blank" rel="noopener noreferrer">
                  Amazon ML Summer School
                </CompanyName>
                <RoleTitle>Apprenticeship</RoleTitle>
                <DateBadge>July 2022</DateBadge>
              </HeaderText>
            </CardHeader>
            <BulletList>
              <BulletItem>
                Mastered 8 core ML domains—including Supervised Learning, Deep Neural Networks (DNNs), and Reinforcement Learning—through hands-on projects, achieving top 10% cohort performance in probabilistic modeling and causal inference challenges.
              </BulletItem>
            </BulletList>
          </Card>
        </TimelineItem>
      </TimelineContainer>
    </ExperienceSection>
  );
};

export default Experience;
