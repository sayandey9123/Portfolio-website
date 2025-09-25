import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { RiCopyrightLine } from 'react-icons/ri';
import LogoImage from '../../images/s.png';

const waveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const heartBeat = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;

const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  padding: 6rem 1rem 3rem;
  text-align: center;
  color: #f8f9fa;
  background: linear-gradient(145deg, #0a1d3b 0%, #1a3a8f 100%);
  overflow: hidden;
  margin-top: 8rem;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const WaveBorder = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 120px;
  overflow: hidden;
  line-height: 0;

  svg {
    display: block;
    width: 200%;
    height: 120px;
    animation: ${waveAnimation} 20s linear infinite;
    will-change: transform;
  }

  .shape-fill {
    fill: rgba(58, 123, 213, 0.7);
  }

  @media (max-width: 600px) {
    height: 80px;

    svg {
      height: 80px;
    }
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Logo = styled.div`
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  cursor: pointer;

  img {
    width: 150px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  &:hover img {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }

  h2 {
    margin-top: 0.6rem;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.8px;
    background: linear-gradient(90deg, #ff6b81, #ff8e53);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  font-size: 1.1rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);

    &::after {
      width: 100%;
      left: 0;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: linear-gradient(90deg, #ff6b81, #ff8e53);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:focus-visible {
    outline: 2px solid #ff6b81;
    outline-offset: 2px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  font-size: 1.8rem;
  margin: 1.5rem 0;

  a {
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.4s ease;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:focus-visible {
      outline: 2px solid #ff6b81;
      outline-offset: 3px;
    }
  }
`;

const HeartIcon = styled(FaHeart)`
  color: #ff6b81;
  animation: ${heartBeat} 1s infinite ease-in-out;
`;

const Copyright = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  letter-spacing: 0.5px;

  svg {
    color: #ff6b81;
    margin: 0 0.3rem;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <WaveBorder>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="shape-fill"
          ></path>
        </svg>
      </WaveBorder>

      <FooterContent>
        <Logo>
            <img src={LogoImage} alt="Sayan Dey" />
            <h2>Sayan Dey</h2>
        </Logo>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>

        <SocialIcons>
          <a href="https://github.com/sayandey9123" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sayan-dey-98a7a223b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:sayanday1111@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.facebook.com/your-facebook-username" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </SocialIcons>

        <Copyright>
          <span>Made with <HeartIcon /> by Sayan Dey</span>
          <RiCopyrightLine size="14" />
          <span>{new Date().getFullYear()} All rights reserved</span>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
