import React from 'react';
import './Info.css';

const Info: React.FC = () => {
  return (
    <main className="info-page">
      <div className="info-container">
        <h1 className="info-title">Info</h1>
        
        <div className="info-content">
          <section className="info-section">
            <h2 className="section-title">About</h2>
            <p className="section-text">
              Content will be added here. This section will contain biography and professional background.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Experience</h2>
            <p className="section-text">
              Professional experience and work history will be listed here.
            </p>
          </section>

          <section className="info-section">
            <h2 className="section-title">Contact</h2>
            <p className="section-text">
              Contact information and links will be added here.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Info;

