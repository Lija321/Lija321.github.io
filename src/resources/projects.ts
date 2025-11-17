import { ProjectCard as ProjectCardType } from '../types/ProjectCard';

export const projects: ProjectCardType[] = [
  {
    title: 'Dream target 2035 drug discovery challenge',
    boldText: 'Participant of team Bioryzm',
    normalText: 'DEL hit-prediction competition. Team placed 9th in step 1 and 13th in step 2. Global competition hosted on Synapse. More info when the embargo is lifted :)',
    imageUrl: 'https://www.thesgc.org/sites/default/files/2025-08/logo%20website.png',
    hoverColor1: '#4facfe',
    hoverColor2: '#00f2fe',
    redirect_link: 'https://www.synapse.org/Synapse:syn65660836/wiki/632249s',
  },
  {
    title: 'KANNET',
    boldText: 'Personal research project',
    normalText: 'ReLU Kolmogorov-Arnold network module for CNNs for improved image classification',
    imageUrl: '/kannet.jpg',
    hoverColor1: '#f093fb',
    hoverColor2: '#f5576c',
    redirect_link: 'https://github.com/Lija321/KANNet',
  },
  {
    title: 'ECHO-PROTEINS',
    boldText: "University research project",
    normalText: 'Edge-aware baselines for OGBN-PROTEINS',
    imageUrl: '/echo-proteins.jpg',
    hoverColor1: '#667eea',
    hoverColor2: '#764ba2',
    redirect_link: 'https://github.com/SV25-22/ECHO-Proteins',
  },
  {
    title: 'WIGGLE (GNOME SHELL EXTENSION)',
    boldText: 'Contributed to the development of a GNOME Shell extension',
    normalText: 'Implemented a customizable “enlargement duration” setting so users can control howlong the cursor stays magnified after movement.Merged upstream (PR #5), later removed following GNOME Shell v45 API changes.',
    imageUrl: '/wiggle.jpg',
    hoverColor1: '#43e97b',
    hoverColor2: '#38f9d7',
    redirect_link: 'https://github.com/mechtifs/wiggle/pull/5',
  },
  {
    title: 'NoSQL database',
    boldText: 'University project',
    normalText: 'NoSQL database implementation in Python. It is a simple database that uses a file to store the data.',
    imageUrl: '/nosql.jpg',
    hoverColor1: '#667eea',
    hoverColor2: '#764ba2',
    redirect_link: 'https://github.com/Lija321/NoSQL-SIIT',
  },
  {
    title: 'EyeTracker',
    boldText: 'Personal project',
    normalText: 'Computer vision project for tracking eye movements.',
    imageUrl: '/eyetracker.jpg',
    hoverColor1: '#f093fb',
    hoverColor2: '#f5576c',
    redirect_link: 'https://github.com/Lija321/EyeTracker',
  }
];
