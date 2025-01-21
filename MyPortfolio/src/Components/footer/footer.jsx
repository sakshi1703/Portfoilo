
import React from 'react';
import { useTheme } from '../ThemeContext';
import './Footer.css';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <p>&copy; 2025 MyPortfolio. All Rights Reserved.</p>
      <p>Follow me on:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sakshi-thodsare-417169320" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/sakshi1703" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:thodsaresakshi17@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
