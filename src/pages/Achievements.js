import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const AchievementsSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 80px 5%;
  scroll-margin-top: 100px;

  @media (max-width: 900px) {
    padding: 60px 4%;
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

const SubHeading = styled.h2`
  font-size: 2rem;
  margin: 50px 0 30px 0;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: center;
  
  @media (max-width: 900px) {
    font-size: 1.6rem;
    margin: 35px 0 20px 0;
  }
`;

const ProfileGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const ProfileButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  border-radius: 12px;
  background: rgba(25, 25, 35, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 140, 0, 0.5);
    box-shadow: 0 8px 25px -8px rgba(255, 140, 0, 0.3);
    color: #ffffff;
  }
`;

const ProfileIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color || '#ff8c00'};
  font-size: 1.3rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.span`
  font-weight: 600;
  font-size: 0.95rem;
`;

const ProfileStat = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
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
    { icon: <FaTrophy />, color: "#ffd700", text: "Achieved Global Rank 274 in Codeforces (2022)" },
    { icon: <FaMedal />, color: "#ff8c00", text: "Achieved Global Rank 459 in Code Sensoby (CodeChef) by IIIT Allahabad (2021)" },
    { icon: <FaMedal />, color: "#ff8c00", text: "Achieved Global Rank 3441 in Google Kickstart — Round F (2022)" },
    { icon: <FaMedal />, color: "#ff8c00", text: "Achieved Global Rank 924 in Codechef Starters (2022)" },
    { icon: <FaStar />, color: "#00ffea", text: "Selected for Amazon ML Summer School 2022" },
    { icon: <FaTrophy />, color: "#ffd700", text: "Secured AIR 1406 in GATE CS 2024 (Top 1% of 1.5L+ candidates)" },
    { icon: <FaTrophy />, color: "#ffd700", text: "Secured AIR 1291 in GATE DA 2024 (Top 1% of 1L+ candidates)" },
  ];

  const profiles = [
    { name: "LeetCode", stat: "Rank 52k · 630+ solved", icon: <SiLeetcode />, color: "#ffa116", href: "https://leetcode.com/aarnavjp/" },
    { name: "CodeChef", stat: "Rating 1614", icon: <SiCodechef />, color: "#5b4638", href: "https://www.codechef.com/users/comrade_aj" },
    { name: "HackerRank", stat: "5 Stars", icon: <SiHackerrank />, color: "#00ea64", href: "https://www.hackerrank.com/aarnavjp" },
    { name: "Codeforces", stat: "Max 1291 · Pupil", icon: <SiCodeforces />, color: "#1f8acb", href: "https://codeforces.com/profile/deadpool28" },
    { name: "GeeksforGeeks", stat: "330+ solved · 867 Score", icon: <SiGeeksforgeeks />, color: "#2f8d46", href: "https://www.geeksforgeeks.org/user/alpha_saga/" },
    { name: "Code Studio 360", stat: "", icon: <FaCode />, color: "#ff8c00", href: "https://www.naukri.com/code360/profile/deadpool28" },
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

        <SubHeading>Coding Profiles</SubHeading>
        <ProfileGrid>
          {profiles.map((p, i) => (
            <ProfileButton key={i} href={p.href} target="_blank" rel="noopener noreferrer">
              <ProfileIcon $color={p.color}>{p.icon}</ProfileIcon>
              <ProfileInfo>
                <ProfileName>{p.name}</ProfileName>
                {p.stat && <ProfileStat>{p.stat}</ProfileStat>}
              </ProfileInfo>
            </ProfileButton>
          ))}
        </ProfileGrid>
      </ContentContainer>
    </AchievementsSection>
  );
};

export default Achievements;
