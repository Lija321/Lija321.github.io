import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const infoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pendingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const [barPosition, setBarPosition] = useState(0);
  const [spotlightPosition, setSpotlightPosition] = useState(0);
  const [pendingPath, setPendingPath] = useState<string | null>(null);

  const activePath = pendingPath ?? location.pathname;
  const isProjectsActive = activePath === '/projects';
  const isInfoActive = activePath === '/info';

  useEffect(() => {
    // Clear any pending nav when the location actually changes
    if (pendingTimeout.current) {
      clearTimeout(pendingTimeout.current);
      pendingTimeout.current = null;
    }
    setPendingPath(null);
  }, [location.pathname]);

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

  useEffect(() => {
    return () => {
      if (pendingTimeout.current) {
        clearTimeout(pendingTimeout.current);
      }
    };
  }, []);

  const handleNavClick = (path: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (path === location.pathname || path === pendingPath) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    if (pendingTimeout.current) {
      clearTimeout(pendingTimeout.current);
    }

    setPendingPath(path);
    // Wait for slider/spotlight transition (~350ms + 100ms delay buffer)
    pendingTimeout.current = setTimeout(() => {
      navigate(path);
    }, 450);
  };

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
        onClick={handleNavClick('/projects')}
      >Projects</Link>
      <Link 
        to="/info" 
        ref={infoRef}
        className={`nav-button ${isInfoActive ? 'active' : ''}`}
        onClick={handleNavClick('/info')}
      >Info</Link>
    </nav>
  );
};

export default Navigation;
