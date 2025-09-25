import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import {Bio} from "../../data/constants";
import {MenuRounded} from "@mui/icons-material";



const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #000; /* optional background */
  padding: 10px;
`;

const NavbarContainer = styled.div`
width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

// Use styled(LinkR) to make a styled React Router link
const NavLogo = styled(LinkR)`
  width:80%;
  padding: 0 24px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    color: #00f2ff;
  }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-item: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px; 
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    justify-content: flex-start;
  }
`;

const MobileIcon =styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    display: none;
    @media screen and (max-width: 768px){
    display: block;
    }
`;

const Mobilemenu = styled.ul`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.card_light || "#1e1e1e"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-20px)"};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 999;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
   


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
  return (
    <Nav>    

    <NavbarContainer>

     <NavLogo>Sayan Dey
</NavLogo>


      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <MenuRounded style={{color: 'inherit'}}/>
      </MobileIcon>

      <NavItems>
        <NavLink href = "#about">About</NavLink>
        <NavLink href = "#Skills">Skils</NavLink>
        <NavLink href = "#Projects">Projects</NavLink>
        <NavLink href = "#Education">Education</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavItems>

     <Mobilemenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href = "#About">About</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href = "#Skils">Skils</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href = "#Exprience">Experience</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href = "#Projects">Projects</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href = "#Education">Education</NavLink>
            <GithubButton href = {Bio.github} target='blank' style={{
                background:theme.primary,
                color: theme.text_primary,
            }}
                >GitHub Profile</GithubButton>
        </Mobilemenu>

      <ButtonContainer>
        <GithubButton href = {Bio.github} target='blank'>GitHub Profile</GithubButton>
      </ButtonContainer>
    </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
