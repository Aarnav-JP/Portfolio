// src/components/ProjectCard.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text};
`;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ProjectCard = ({ title, description }) => (
  <Card variants={cardVariants} initial="hidden" animate="visible">
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

export default ProjectCard;
