import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Logo, Navigation, ContactLinks } from './components';
import Projects from './pages/Projects';
import Info from './pages/Info';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <div id="Logo">
        <Logo/>
      </div>
      <div id="Navigation">
        <Navigation/>
      </div>
      <div id="ContactLinks">
        <ContactLinks/>
      </div>
      <div className="page-transition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/projects" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
