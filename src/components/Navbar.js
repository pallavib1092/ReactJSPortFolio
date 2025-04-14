// src/components/Navbar.js
import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { darkMode, toggleDarkMode } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="logo">    <a href="#" className="logo-text">Pallavi</a>
        
        <button className="hamburger" onClick={this.toggleMenu}>
            ☰
          </button>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="cv-button">Download CV</button>
          </li>
          <li>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
