import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 80px 5%;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 100px;

  @media (max-width: 900px) {
    padding: 80px 6% 60px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1000px;
  width: 100%;
  align-items: center;
  z-index: 1;
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
`;

const TextPanel = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.15rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;

  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
`;

const ContactCard = styled.div`
  flex: 1;
  background: rgba(25, 25, 35, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px 35px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeIn} 1.2s ease-out forwards;
  position: relative;
  overflow: hidden;
  
  /* Premium Shine */
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

  @media (max-width: 900px) {
    width: 100%;
    padding: 30px 25px;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: #ffffff;
    border-color: rgba(255, 140, 0, 0.4);
    background: rgba(255, 140, 0, 0.06);
    box-shadow: 0 4px 20px -6px rgba(255, 140, 0, 0.25);
    transform: translateX(4px);
  }
`;

const LinkIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${props => `${props.$color}15`};
  border: 1px solid ${props => `${props.$color}30`};
  color: ${props => props.$color};
  font-size: 1.3rem;
`;

const FooterText = styled.p`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.35);
  margin: 0;
  z-index: 1;
`;

const Contact = () => {
  return (
    <ContactSection
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <ContentWrapper>
        <TextPanel>
          <Title>Let's Connect</Title>
          <Tagline>
            I'm always open to discussing new opportunities, collaborations, or just having a great conversation about tech. Feel free to reach out!
          </Tagline>
        </TextPanel>

        <ContactCard>
          <ContactLink
            href="mailto:aarnav.jp@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon $color="#ff8c00"><FaEnvelope /></LinkIcon>
            Email
          </ContactLink>

          <ContactLink
            href="https://www.linkedin.com/in/aarnavjp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon $color="#0a66c2"><FaLinkedin /></LinkIcon>
            LinkedIn
          </ContactLink>

          <ContactLink
            href="https://github.com/Aarnav-JP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon $color="#ffffff"><FaGithub /></LinkIcon>
            GitHub
          </ContactLink>
        </ContactCard>
      </ContentWrapper>
      <FooterText>© 2026 Aarnav JP · Built with ❤ & React</FooterText>
    </ContactSection>
  );
};

export default Contact;
