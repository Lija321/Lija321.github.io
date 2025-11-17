import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const infoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  
  const [barPosition, setBarPosition] = useState(0);
  const [spotlightPosition, setSpotlightPosition] = useState(0);

  const isProjectsActive = location.pathname === '/projects';
  const isInfoActive = location.pathname === '/info';

  useEffect(() => {
    const updatePosition = () => {
      if (!navRef.current) return;
      
      const activeRef = isProjectsActive ? projectsRef : infoRef;
      if (!activeRef.current) return;

      const navRect = navRef.current.getBoundingClientRect();
      const buttonRect = activeRef.current.getBoundingClientRect();
      
      // Calculate the center of the active button relative to the nav container
      const buttonCenter = buttonRect.left - navRect.left + buttonRect.width / 2;
      
      setBarPosition(buttonCenter);
      setSpotlightPosition(buttonCenter);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    
    return () => window.removeEventListener('resize', updatePosition);
  }, [isProjectsActive, isInfoActive]);

  return (
    <nav className="navigation" ref={navRef}>
      <div 
        className={`nav-slider ${isProjectsActive ? 'slider-left' : ''} ${isInfoActive ? 'slider-right' : ''}`}
      />
      <div 
        className="nav-bar"
        style={{
          left: `${barPosition}px`,
          transform: 'translateX(-50%)'
        }}
      />
      <div 
        className="nav-spotlight"
        style={{
          left: `${spotlightPosition}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <Link 
        to="/projects" 
        ref={projectsRef}
        className={`nav-button ${isProjectsActive ? 'active' : ''}`}
      >Projects</Link>
      <Link 
        to="/info" 
        ref={infoRef}
        className={`nav-button ${isInfoActive ? 'active' : ''}`}
      >Info</Link>
    </nav>
  );
};

export default Navigation;

