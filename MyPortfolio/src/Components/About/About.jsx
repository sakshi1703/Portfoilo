import React from 'react';
import './About.css';
import sakshi from "../assets/sakshi.pdf"

const About = ({ theme }) => {
  return (
    <section id="about" className={`about ${theme}`}>
      <h2>About Me</h2>
      <p>
        Hello! I'm a passionate developer with a love for creating innovative web applications.
        I have experience in front-end and back-end development, and I'm always learning new
        technologies to improve my skills.
      </p>
      <p>
        My goal is to build user-centric solutions that are both functional and aesthetically
        pleasing. I'm constantly exploring new tools and frameworks to stay ahead in the
        tech industry.
      </p>
      <div className="about-actions">
        <a href={sakshi} download="Sakshi_Thodsare_CV.pdf" className="download-btn">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
