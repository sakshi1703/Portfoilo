import React from 'react';
import './Contact.css';

const Contact = ({ theme }) => {
  return (
    <section id="contact" className={`contact ${theme}`}>
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or through my social media!</p>
      <ul>
        <li>Email: your.email@example.com</li>
        <li>
          LinkedIn: <a href="https://www.linkedin.com/in/sakshi-thodsare-417169320" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/sakshi1703" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
