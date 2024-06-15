import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-header">
          <h1>My SPA</h1>
          <nav className="app-nav">
            <ul>
              <li className="nav-item"><Link to="/home">Home</Link></li>
              <li className="nav-item"><Link to="/about-us">About Us</Link></li>
              <li className="nav-item"><Link to="/contact-us">Contact Us</Link></li>
              <li className="nav-item"><Link to="/">Logout</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
