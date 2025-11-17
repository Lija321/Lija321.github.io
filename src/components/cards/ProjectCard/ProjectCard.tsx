import React from 'react';
import { ProjectCard as ProjectCardType } from '../../../types/ProjectCard';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectCardType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleNavigate = () => {
    if (project.redirect_link) {
      window.open(project.redirect_link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="project-card"
      style={{
        '--hover-color-1': project.hoverColor1,
        '--hover-color-2': project.hoverColor2,
      } as React.CSSProperties}
      role="link"
      tabIndex={0}
      onClick={handleNavigate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNavigate();
        }
      }}
    >
      <div className="project-card-inner">
        <div className="project-card-header">
          <h3 className="project-card-title">{project.title}</h3>
          <span className="project-card-arrow">→</span>
        </div>
        
        <p className="project-card-description">
          <span className="bold-text">{project.boldText}</span>
          <span className="separator"> — </span>
          <span className="normal-text">{project.normalText}</span>
        </p>
        
        <div className="project-card-image">
          <img src={project.imageUrl} alt={project.title} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
