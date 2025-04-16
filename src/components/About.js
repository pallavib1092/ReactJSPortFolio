// import React, { Component } from 'react';
// import './About.css';

// class About extends Component {
//   render() {
//     return (
//       <section className="about-section" id="about">
//         <div className="about-container">
//           <h2 className="section-title">About Me</h2>
//           <p className="about-text">
//             I'm a passionate front-end developer focused on building clean, responsive, and user-friendly websites and applications. I enjoy solving real-world problems with elegant code and love exploring new technologies.
//           </p>
//           <p className="about-text">
//             I specialize in React.js, JavaScript, and CSS. I’m always learning and aim to write accessible and efficient code with great user experiences.
//           </p>
//         </div>
//       </section>
//     );
//   }
// }

// export default About;


import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className="about-section" id='about'>
        <div className="about-content">
          <div className="about-image-wrapper">
            <img src="https://png.pngtree.com/png-vector/20240501/ourmid/pngtree-code-and-coffee-the-mind-of-a-determined-professional-png-image_12350632.png" alt="About" className="about-img" />
            <div className="image-shadow"></div>
          </div>

          <div className="about-text">
            <button className="about-badge">About me</button>
            <h2>Curious about me? Here you have it:</h2>

            <p>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I enjoy building fast, accessible, pixel-perfect apps and writing clean code.
            </p>

            <p>
              I started as a developer in 2015, and I've kept growing ever since. These days, I’m working with modern tech like Next.js, TypeScript, NestJS, TailwindCSS, and more.
            </p>

            <p>
              Outside of dev mode, I’m probably tweeting tech thoughts or building in public. You can find me on <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> or on <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>

            <ul className="about-list">
              <li>🎓 B.E. in Computer Engineering</li>
              <li>🧠 Avid learner</li>
              <li>💻 Full-time freelancer</li>
              <li>🧘 Aspiring indie hacker</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
