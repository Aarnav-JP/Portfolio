import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const FooterBar = styled.footer`
  position: relative;
  z-index: 1;
  padding: 24px 20px;
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid rgba(255, 140, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
    padding: 20px 16px;
  }
`;

const CopyText = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    color: #e01e37;
    font-size: 0.7rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.35);
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: #ff8c00;
    transform: translateY(-2px);
  }
`;

const Footer = () => (
  <FooterBar>
    <CopyText>
      © 2026 Aarnav JP · Built with <FaHeart /> & React
    </CopyText>
    <SocialLinks>
      <SocialLink href="https://github.com/Aarnav-JP" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/aarnavjp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </SocialLink>
    </SocialLinks>
  </FooterBar>
);

export default Footer;
