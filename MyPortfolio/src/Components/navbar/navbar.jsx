import React from 'react';
import { useTheme } from '../ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();  

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-logo">MyPortfolio</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
     
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
      </button>
    </nav>
  );
};

export default Navbar;
