import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Janani Balasooriya</h1>
          <h2 className="hero-title">Computer Engineer</h2>
          <p className="hero-description">
            Crafting seamless digital experiences at the intersection of design & technology.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/assets/portrait.jpg" alt="Janani Balasooriya" />
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <i className="fas fa-angle-down"></i>
      </div>
    </section>
  );
};

export default Hero;
