import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../cards/ProjectCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Container = styled.div`
  padding: 50px 20px;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};

   &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #00f2ff, #3a47d5);
    margin: 11px auto 0;
    margin-bottom: 15px;
    border-radius: 2px;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const FilterButton = styled.button`
  background: ${({ active, theme }) => (active ? theme.primary + '20' : 'transparent')};
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primary + '20'};
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((proj) => proj.category === filter);

  return (
    <Container id="Projects">
      <Title>Projects</Title>
      <FilterGroup>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterButton>
        <FilterButton active={filter === 'web app'} onClick={() => setFilter('web app')}>Web Apps</FilterButton>
      </FilterGroup>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{ paddingBottom: '50px' }}
      >
        {filteredProjects.map((project) => (
          <SwiperSlide key={project.id} style={{ width: '300px' }}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Projects;
