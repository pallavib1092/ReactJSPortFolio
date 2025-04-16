import React, { Component } from 'react';
import './Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiPostman, SiNpm,
} from 'react-icons/si';

class Skills extends Component {
  renderCategory = (title, skills) => (
    <div className="skills-category">
      <h3>{title}</h3>
      <div className="skills-grid">
        {skills.map(({ Icon, label }, index) => (
          <div key={index} className="skill-tile">
            <Icon className="skill-icon" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  render() {
    const { theme } = this.props;

    const frontendSkills = [
      { Icon: FaHtml5, label: 'HTML5' },
      { Icon: FaCss3Alt, label: 'CSS3' },
      { Icon: FaJsSquare, label: 'JavaScript' },
      { Icon: FaReact, label: 'React' }
    ];

    const backendSkills = [
      { Icon: FaNodeJs, label: 'Node.js' },
      { Icon: SiExpress, label: 'Express' },
      { Icon: SiMongodb, label: 'MongoDB' }
    ];

    const toolsSkills = [
      { Icon: FaGitAlt, label: 'Git' },
      { Icon: FaGithub, label: 'GitHub' },
    
      { Icon: SiPostman, label: 'Postman' },
      { Icon: SiNpm, label: 'NPM' },
    ];

    return (
      <section className={`skills-section ${theme}`} id="skills">
        <h2 className="section-title">Skills</h2>
        {this.renderCategory('Frontend', frontendSkills)}
        {this.renderCategory('Backend', backendSkills)}
        {this.renderCategory('Tools', toolsSkills)}
      </section>
    );
  }
}

export default Skills;
