// import React, { Component } from 'react';
// import './Contact.css';

// class Contact extends Component {
//   render() {
//     return (
//       <section className="contact-section" id="contact">
//         <div className="contact-container">
//           <h2 className="section-title">Contact</h2>
//           <p className="contact-text">
//             Interested in working together or just want to say hi? Feel free to drop a message!
//           </p>
//           <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <textarea placeholder="Your Message" rows="5" required></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </section>
//     );
//   }
// }

// export default Contact;


import React, { Component } from 'react';
import './Contact.css';
import { FiMail, FiPhone, FiCopy } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

class Contact extends Component {
  copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  render() {
    const { theme } = this.props;

    return (
      <section className={`contact-section ${theme}`} id="contact">
        <div className="contact-container">
          <button className="contact-btn">Get in touch</button>
          <p className="contact-description">
            What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <FiMail className="icon" />
              <span><strong>reachme@example.com</strong></span>
              <FiCopy
                className="copy-icon"
                onClick={() => this.copyToClipboard('reachme@example.com')}
              />
            </div>
            <div className="contact-item">
              <FiPhone className="icon" />
              <span><strong>+91 1234567890</strong></span>
              <FiCopy
                className="copy-icon"
                onClick={() => this.copyToClipboard('+91 1234567890')}
              />
            </div>
          </div>

          <div className="social-icons">
            <p>You may also find me on these platforms!</p>
            <div className="icons-row">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
