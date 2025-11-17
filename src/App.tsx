import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Logo from './components/headers/Logo';
import Navigation from './components/headers/Navigation';
import ContactLinks from './components/headers/ContactLinks';
import Footer from './components/Footer';
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
