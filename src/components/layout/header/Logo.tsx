import React from 'react';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-section">
      <img src="/logo_white.png" alt="Dejan Lisica logo" className="logo-mark" />
      <div className="logo-text">
        <h1 className="logo-name">Dejan Lisica</h1>
        <p className="logo-title">Software Engineering Student</p>
      </div>
    </div>
  );
};

export default Logo;
