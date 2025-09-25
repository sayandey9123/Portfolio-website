import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';
import TypeWriter from "typewriter-effect"
import HeroImg from "../../images/my-image2.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import {Tilt} from "react-tilt" ;
import {motion} from "framer-motion";
import {headContainerAnimation,headContentAnimation, headTextAnimation} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";


const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px){
    padding: 66px 16px;
  }
    
  @media (max-width: 640px){
    padding: 32px 16px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px){
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width:100%;
  order: 1;
  @media (max-width: 960px){
    order: 2;
    margin-bottom: 30px;
    display:flex;
    gap:6px;
    flex-direction: column;
    align-items: center;
  }

  
`;
const HeroRightContainer = styled.div`
  width:100%;
  order: 2;
  display:flex;
  justify-content: end;

  @media (max-width: 960px){
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    @media (max-width: 640px){
      margin-bottom: 30px;
    }
  }

`;

const Title = styled.div`
  font-weight: 700px;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width : 960px){
    text-align: center;
  }

  @media (max-width : 960px){
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600px;
  font-size: 32px;
  display:flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width : 960px){
    text-align: center;
  }

  @media (max-width : 960px){
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor:pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size; 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width : 960px){
    text-align: center;
  }

  @media (max-width : 960px){
    font-size: 16px;
    line-height: 32px;
    
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 280px;
  text-align: center;
  padding: 16px 0;
  border-radius: 50px;
  font-weight: 700;
  font-size: 18px;
  color: white;
  background: linear-gradient(135deg, #00f2ff, #3a47d5);
  box-shadow: 0 4px 15px rgba(58, 71, 213, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #3a47d5, #00f2ff);
    transform: scale(1.03);
    box-shadow: 0 6px 20px rgba(58, 71, 213, 0.6);
  }

    
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px){
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  justify-content: end;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width : 960px){
    justify-content: center;
    padding: 0 0px;
  
  }
`;


const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
       <HeroBg>
        <StarCanvas/>
          <HeroBgAnimation/>
       </HeroBg>
       <motion.div {...headContainerAnimation}>

        <HeroInnerContainer>
          <HeroLeftContainer>

          <motion.div {...headTextAnimation}>
            <Title>
              Hi , I am <br/> {Bio.name}
            </Title>
            <TextLoop>
              I am a 
              <Span>
                <TypeWriter options={{
                  strings:Bio.roles,
                  autoStart: true,
                  loop: true,
                }}/>
              </Span>
            </TextLoop>
            </motion.div>
           
          <motion.div {...headContainerAnimation}>
          <SubTitle>{Bio.description}</SubTitle>
          </motion.div>

          <ResumeButton
          href="https://drive.google.com/file/d/1mJx17lGcBXzjeXsaIdedYVdBqMjg7SiT/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer">
          Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>

          <motion.div {...headContainerAnimation}>
          <Tilt> 
            <Img src={HeroImg} alt='Sayan Dey'/>
          </Tilt> 
          </motion.div>

          </HeroRightContainer>
        </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default Hero
