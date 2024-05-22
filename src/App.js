import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'; // make sure your logo image is in the src folder
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';
import Project1Page from './Project1Page';
import Project2Page from './Project2Page';
import Project3Page from './Project3Page';
import Project4Page from './Project4Page';
import Project5Page from './Project5Page';
import Project6Page from './Project6Page';

function App() {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <div className="App">
        <header className="main-header">
          <img src={logo} className="logo" alt="logo" />
          <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home activeTab={activeTab} handleTabClick={handleTabClick} />} />
          <Route path="/Project1Page" element={<Project1Page />} />
          <Route path="/Project2Page" element={<Project2Page />} />
          <Route path="/Project3Page" element={<Project3Page />} />
          <Route path="/Project4Page" element={<Project4Page />} />
          <Route path="/Project5Page" element={<Project5Page />} />
          <Route path="/Project6Page" element={<Project6Page />} />
        </Routes>
        <footer className="social-footer">
          <a href="https://www.instagram.com/laurelholland.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="mailto:lmh.running@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
