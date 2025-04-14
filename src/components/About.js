import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className="about-section" id="about">
        <div className="about-container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate front-end developer focused on building clean, responsive, and user-friendly websites and applications. I enjoy solving real-world problems with elegant code and love exploring new technologies.
          </p>
          <p className="about-text">
            I specialize in React.js, JavaScript, and CSS. I’m always learning and aim to write accessible and efficient code with great user experiences.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
