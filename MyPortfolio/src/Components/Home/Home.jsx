import React from 'react';
import './Home.css';
import ProfileImg from "../assets/ProfileImg.jpeg";


const Home = ({ theme }) => {
  return (
    <section id="home" className={`home ${theme}`}>
      <div className="home-content">
        <div className="home-text">
            <h2>Hello, It's Me</h2>
          <h1 className="name">Sakshi Thodsare</h1>
          <div className="role">
            <span className="typewriter">Frontend Developer</span>
          </div>
          <div>
            <h4>I am a creative and detail-oriented Frontend Developer who loves bringing ideas to life through engaging and user-friendly web experiences. With a strong focus on clean design and functionality, I strive to craft solutions that leave a lasting impression. Always eager to learn and grow, I am ready to take on exciting challenges.</h4>
          </div>
        </div>
        <div className="home-image">
          <img src={ProfileImg} alt="Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;

// console.log(profileImg)