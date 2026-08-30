import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";


const AchievementsSection = styled(motion.section)`
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 80px 5% 50px;
  scroll-margin-top: 100px;

  @media (max-width: 900px) {
    padding: 60px 4% 40px;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: center;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 2.2rem;
    margin-bottom: 35px;
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  width: 100%;
  z-index: 1;
`;

const AchievementCard = styled(motion.div)`
  background: rgba(25, 25, 35, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 18px 22px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 140, 0, 0.4);
    box-shadow: 0 8px 30px -10px rgba(255, 140, 0, 0.25);
  }
  
  /* Subtle bottom glow */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff8c0040, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const AchievementIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${props => `${props.$color}15`};
  border: 1px solid ${props => `${props.$color}30`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color};
  font-size: 1.1rem;
`;

const AchievementText = styled.span`
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.5;
  font-weight: 400;
`;



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const Achievements = () => {
  const achievements = [
    { icon: <FaStar />, color: "#00ffea", text: "Amazon ML Summer School Apprenticeship (2022), Gained knowledge in Supervised Learning, DNNs, Reinforcement Learning, Probabilistic Modeling and Causal Inference" },
    { icon: <FaTrophy />, color: "#ffd700", text: "Achieved Global Rank 274 in Codeforces (2022)" },
    { icon: <FaMedal />, color: "#ff8c00", text: "Achieved Global Rank 459 in Code Sensoby (CodeChef) by IIIT Allahabad (2021)" },
    { icon: <FaMedal />, color: "#ff8c00", text: "Achieved Global Rank 3441 in Google Kickstart — Round F (2022)" },
    { icon: <FaMedal />, color: "#ff8c00", text: "Achieved Global Rank 924 in Codechef Starters (2022)" },
    { icon: <FaTrophy />, color: "#ffd700", text: "Secured AIR 1406 in GATE CS 2024 (Top 1% of 1.5L+ candidates)" },
    { icon: <FaTrophy />, color: "#ffd700", text: "Secured AIR 1291 in GATE DA 2024 (Top 1% of 1L+ candidates)" },
  ];



  return (
    <AchievementsSection
      id="achievements"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <Heading>Achievements</Heading>
      <ContentContainer>
        {achievements.map((item, i) => (
          <AchievementCard key={i} variants={itemVariants}>
            <AchievementIcon $color={item.color}>{item.icon}</AchievementIcon>
            <AchievementText>{item.text}</AchievementText>
          </AchievementCard>
        ))}


      </ContentContainer>
    </AchievementsSection>
  );
};

export default Achievements;
