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
      </div>

      <div className="profile-pic-container">
        <img src={"profile.png"} alt="Profile" className="profile-pic" />
      </div>
    </section>
    );
  }
}

export default Hero;
