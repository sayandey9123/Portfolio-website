import React from 'react'
import styled from "styled-components";
import { education } from '../../data/constants';
import {VerticalTimeline} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationCard from '../cards/EducationCard';
import EarthCanvas from '../canvas/Earth';


const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-top:50px;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px){
        flex-direction: column;
    }
`;
const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};
    @media (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;
    }

     &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #00f2ff, #3a47d5);
    margin: 1px auto 0;
    margin-bottom: 12px;
    border-radius: 2px;
  }
`;
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    @media (max-width: 768px){
        font-size: 16px;
    }
`;


const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc style={{marginBottom: "40px",}}>
          My Education has been a journey of self-discovery and growth. My educational details are as follows.
        </Desc>

        <VerticalTimeline>
          {education.map((item, index) => (
            <EducationCard 
            key = {`education-${index}`}
            education={item}/>
          ))}
        </VerticalTimeline>
         <h2 style={{ color: '#fff', marginBottom: '60px' }}></h2>
         <EarthCanvas/>
      </Wrapper>
    </Container>
  )
}

export default Education;
