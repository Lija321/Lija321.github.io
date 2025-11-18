import React, { useEffect, useRef } from 'react';
import { ProjectCard } from '../components';
import { projects } from '../resources/projects';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './Projects.css';

const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scrollInstance: any;
    let initialized = false;

    const initScroll = async () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) return;

      const LocomotiveScroll = (await import('locomotive-scroll')).default as any;
      if (!scrollContainerRef.current) return;

       // Remove any previous Locomotive scrollbars to prevent duplicates
      document.querySelectorAll('.c-scrollbar').forEach(el => el.remove());

      document.documentElement.classList.add('has-scroll-smooth');
      document.body.classList.add('has-scroll-smooth');
      document.body.classList.add('has-scroll-smooth-body');

      scrollInstance = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        lerp: 0.085,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
      initialized = true;
    };

    initScroll();

    return () => {
      if (initialized) {
        document.documentElement.classList.remove('has-scroll-smooth');
        document.body.classList.remove('has-scroll-smooth');
        document.body.classList.remove('has-scroll-smooth-body');
      }
      if (scrollInstance) {
        scrollInstance.destroy();
      }
      // Clean up any leftover custom scrollbars
      document.querySelectorAll('.c-scrollbar').forEach(el => el.remove());
    };
  }, []);

  return (
    <main
      className="projects-page"
      data-scroll-container
      data-scroll-section
      ref={scrollContainerRef}
    >
      <div className="projects-bg"/>
      <div className="projects-container" >
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
