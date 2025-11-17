import React from 'react';
import { ProjectCard } from '../components';
import { ProjectCard as ProjectCardType } from '../types/ProjectCard';
import './Projects.css';

const Projects: React.FC = () => {
  // Sample project data - replace with your actual projects
  const projects: ProjectCardType[] = [
    {
      title: 'Test Hub Next',
      boldText: "Google, '22",
      normalText: 'Envisioning a future of playtesting for all developers.',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop',
      hoverColor1: '#667eea',
      hoverColor2: '#764ba2',
    },
    {
      title: 'Design System',
      boldText: 'Company Name',
      normalText: 'Building a comprehensive design system for modern applications.',
      imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=450&fit=crop',
      hoverColor1: '#f093fb',
      hoverColor2: '#f5576c',
    },
    {
      title: 'Mobile Experience',
      boldText: 'Another Company',
      normalText: 'Creating seamless mobile experiences for millions of users.',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
      hoverColor1: '#4facfe',
      hoverColor2: '#00f2fe',
    },
    {
      title: 'Brand Identity',
      boldText: 'Studio Name',
      normalText: 'Crafting memorable brand identities that stand out.',
      imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop',
      hoverColor1: '#43e97b',
      hoverColor2: '#38f9d7',
    },
  ];

  return (
    <main className="projects-page">
      <div className="projects-container">
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
