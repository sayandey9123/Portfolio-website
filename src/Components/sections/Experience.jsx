import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } 
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  padding: 80px 20px;
  max-width: 1100px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.text_primary};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #00f2ff, #3a47d5);
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;

const Entry = styled.div`
  background: ${({ theme }) => theme.card_light || '#1e1e1e'};
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  text-align: center;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 242, 255, 0.25), 0 4px 10px rgba(255, 255, 255, 0.05);
    border: 1px solid ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_light || '#1e1e1e'};
  }
`;


const Role = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;
`;

const Desc = styled.p`
  font-size: 16.5px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  padding: 0 12px;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Title>Experience</Title>

      <Entry>
        <Role>Fresher — Aspiring Software Engineer</Role>
        <Desc>
          I am a highly motivated postgraduate in Computer Science with a strong foundation in web technologies and software development. While I have no formal industry experience yet, I have demonstrated my skills through several academic and personal projects using technologies like <strong>React.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>.
          <br /><br />
          I am currently seeking entry-level opportunities where I can contribute, collaborate, and continue to grow as a developer.
        </Desc>
      </Entry>
    </Container>
  );
};

export default Experience;
