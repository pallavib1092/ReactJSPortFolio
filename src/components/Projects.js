import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">Portfolio Website</h3>
              <p className="project-desc">
                A personal portfolio website to showcase my projects and skills. Built with React.js and responsive design principles.
              </p>
            </div>
            <div className="project-card">
              <h3 className="project-title">Weather App</h3>
              <p className="project-desc">
                A simple weather app that shows real-time weather using OpenWeatherMap API. Built using React and styled with CSS.
              </p>
            </div>
            <div className="project-card">
              <h3 className="project-title">Task Manager</h3>
              <p className="project-desc">
                A to-do app that helps you organize daily tasks with features like dark mode and local storage persistence.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
