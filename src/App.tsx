import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Logo, Navigation, ContactLinks, Footer } from './components';
import Projects from './pages/Projects';
import Info from './pages/Info';
import './App.css';

function App() {
  return (
    <Router>
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
        <Routes>
          <Route path="/" element={<Navigate to="/projects" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
