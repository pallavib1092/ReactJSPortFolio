import React, { Component } from 'react';
import './Hero.css';


class Hero extends Component {
  render() {
    return (
      <section className="hero">
      <div className="intro">
        <h1>
          Hello, I'm <span className="name">Pallavi</span> <span className="wave">👋</span>
        </h1>
        <h2 className="role">Frontend Developer</h2>
        <p className="status">Open to work • Passionate about clean UI</p>
        <p  className="description">I'm a Frontend expert (React.js & React Native) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
      </div>

      <div className="profile-pic-container">
      <img src="https://png.pngtree.com/png-vector/20240501/ourmid/pngtree-code-and-coffee-the-mind-of-a-determined-professional-png-image_12350632.png" alt="Profile" className="profile-pic" />
      </div>
    </section>
    );
  }
}

export default Hero;
