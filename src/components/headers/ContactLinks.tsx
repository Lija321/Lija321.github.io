import React from 'react';
import './ContactLinks.css';

const ContactLinks: React.FC = () => {
  return (
    <div className="contact-links">
      <a 
        href="https://www.linkedin.com/in/dejan-lisica-658478319/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-link"
      >
        LinkedIn
        <span className="arrow">↗</span>
      </a>
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-link"
      >
        Resume
        <span className="arrow">↗</span>
      </a>
    </div>
  );
};

export default ContactLinks;

