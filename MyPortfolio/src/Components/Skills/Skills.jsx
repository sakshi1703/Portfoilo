import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 90 },
    { name: "DSA", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "SQL", level: 65 }
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
