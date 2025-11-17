import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  // Placeholder data for project cards
  const projectPlaceholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">Selected Work</h1>
        
        <div className="projects-grid">
          {projectPlaceholders.map((item) => (
            <div key={item} className="project-card-placeholder">
              <div className="project-image-placeholder">
                <span>Project Image {item}</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">Project Title {item}</h3>
                <p className="project-description">
                  Project description will go here. This is a placeholder for custom project cards.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;

