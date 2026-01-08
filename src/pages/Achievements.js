import React from 'react';
import styled from 'styled-components';


const AchievementsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100%;

    @media (max-width: 900px) {
        padding-left: 6%;
        padding-right: 6%;
    }
`;

const AchievementsContainer = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: left;
  z-index: 1;
`;

const AchievementTitle = styled.h1`
background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  z-index: 1;
    @media (max-width: 900px) {
        font-size: 2rem;
    }
`;

const AchievementItem = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #00ffcc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 255, 204, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 255, 204, 0.5);
  }
`;

const CodingProfileLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;

const CodingProfileButton = styled.a`
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid #00ffcc;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.4);
  
  &:hover {
    color: #ffffff;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    border-color: #ff00ff;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
    transform: translateY(-3px);
  }
`;

// Galaxy background effect using three.js


const Achievements = () => {
    return (
        <AchievementsSection id="achievements">
            <AchievementTitle>Achievements</AchievementTitle>
            <AchievementsContainer>
                {/* Achievements list */}
                <AchievementItem>• Achieved Global Rank - 274 in Codeforces (2022)</AchievementItem>
                <AchievementItem>• Achieved Global Rank - 459 in Code Sensoby (CodeChef) by IIIT Allahabad (2021)</AchievementItem>
                <AchievementItem>• Achieved Global Rank - 3441 in Google Kickstart - Round F (2022)</AchievementItem>
                <AchievementItem>• Achieved Global Rank - 924 in Codechef Starters (2022)</AchievementItem>
                <AchievementItem>• Selected for Amazon ML Summer School 2022</AchievementItem>
                <AchievementItem>• Secured AIR 1406 in GATE CS 2024 (Top 1% of 1.5L+ candidates)</AchievementItem>
                <AchievementItem>• Secured AIR 1291 in GATE DA 2024 (Top 1% of 1L+ candidates)</AchievementItem>

                {/* Coding profiles */}
                <AchievementTitle>Coding Profiles</AchievementTitle>
                <CodingProfileLinks>
                    <CodingProfileButton href="https://leetcode.com/aarnavjp/" target="_blank" rel="noopener noreferrer">
                        LeetCode  (Min Global Rank - 52k and 630+ problems solved)
                    </CodingProfileButton>
                    <CodingProfileButton href="https://www.codechef.com/users/comrade_aj" target="_blank" rel="noopener noreferrer">
                        CodeChef (Highest Rating - 1614)
                    </CodingProfileButton>
                    <CodingProfileButton href="https://www.hackerrank.com/aarnavjp" target="_blank" rel="noopener noreferrer">
                        HackerRank (5 Stars)
                    </CodingProfileButton>
                    <CodingProfileButton href="https://codeforces.com/profile/deadpool28" target="_blank" rel="noopener noreferrer">
                        Codeforces (Max rating - 1291, pupil)
                    </CodingProfileButton>
                    <CodingProfileButton href=": https://www.geeksforgeeks.org/user/alpha_saga/" target="_blank" rel="noopener noreferrer">
                        GeeksforGeeks (330+ problems solved and 867 Score)
                    </CodingProfileButton>
                    <CodingProfileButton href=": https://www.naukri.com/code360/profile/deadpool28" target="_blank" rel="noopener noreferrer">
                        Code Studio 360
                    </CodingProfileButton>
                </CodingProfileLinks>
            </AchievementsContainer>


        </AchievementsSection>
    );
};

export default Achievements;
