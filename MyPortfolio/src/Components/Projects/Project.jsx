import React from 'react';
import './Project.css';

const Projects = ({ theme }) => {
  return (
    <section id="projects" className={`projects ${theme}`}>
      <h2>My Projects</h2>
      <div className="projects-list">
        <div className="project">
          <h3>Project 1</h3>
          <p>A brief description of the project goes here.</p>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>A brief description of the project goes here.</p>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>A brief description of the project goes here.</p>
          <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
