import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-heading">About Me</h3>
            <p>I'm a passionate developer focused on creating beautiful and functional web experiences. Let's bring your ideas to life!</p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Get in Touch</h3>
            <p>Feel free to reach out for collaborations or just a friendly chat.</p>
            <div className="footer-social">
              <a href="https://github.com/" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/" aria-label="LinkedIn"><FaLinkedin /></a>
             
              <a href="mailto:jananimihiranijmbalasooriya@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;