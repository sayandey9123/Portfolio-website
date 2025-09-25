import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 14px;
  padding: 20px;
  color: ${({ theme }) => theme.text_primary};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 300px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  
  /* Default no bend */
  transform: rotateY(0deg) scale(1);
  
  /* Bend only for prev/next cards */
  .swiper-slide-prev & {
    transform: rotateY(20deg) scale(0.95);
  }

  .swiper-slide-next & {
    transform: rotateY(-20deg) scale(0.95);
  }

  /* Active card glow */
  .swiper-slide-active & {
    box-shadow: 0 0 20px rgba(0, 200, 255, 0.4);
    transform: rotateY(0deg) scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  z-index: 2;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
`;

const Tags = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.primary + 25};
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardContent>
        <ProjectImage src={project.image} alt={project.title} />
        <Title>{project.title}</Title>
        <Description>{project.description.substring(0, 120)}...</Description>
        <Tags>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Links>
          <Link href={project.github} target="_blank">GitHub</Link>
          <Link href={project.webapp} target="_blank">Live Demo</Link>
        </Links>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
