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
        href="https://drive.google.com/file/d/1Fs2wj3lbk1ImnzlUaxfKK-u_bu163mvO/view?usp=sharing" 
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

