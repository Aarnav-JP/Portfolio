import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const ProfilesSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 40px 5%;
  scroll-margin-top: 80px;

  @media (max-width: 900px) {
    padding: 30px 4%;
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  width: 100%;
  z-index: 1;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin: 0 0 20px 0;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: center;
  
  @media (max-width: 900px) {
    font-size: 1.6rem;
    margin: 0 0 15px 0;
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

const Profiles = () => {
  const profiles = [
    { name: "LeetCode", stat: "Rank 52k · 630+ solved", icon: <SiLeetcode />, color: "#ffa116", href: "https://leetcode.com/aarnavjp/" },
    { name: "CodeChef", stat: "Rating 1614", icon: <SiCodechef />, color: "#5b4638", href: "https://www.codechef.com/users/comrade_aj" },
    { name: "HackerRank", stat: "5 Stars", icon: <SiHackerrank />, color: "#00ea64", href: "https://www.hackerrank.com/aarnavjp" },
    { name: "Codeforces", stat: "Max 1291 · Pupil", icon: <SiCodeforces />, color: "#1f8acb", href: "https://codeforces.com/profile/deadpool28" },
    { name: "GeeksforGeeks", stat: "330+ solved · 867 Score", icon: <SiGeeksforgeeks />, color: "#2f8d46", href: "https://www.geeksforgeeks.org/user/alpha_saga/" },
    { name: "Code Studio 360", stat: "", icon: <FaCode />, color: "#ff8c00", href: "https://www.naukri.com/code360/profile/deadpool28" },
  ];

  return (
    <ProfilesSection
      id="profiles"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <ContentContainer>
        <Heading>Coding Profiles</Heading>
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
    </ProfilesSection>
  );
};

export default Profiles;
