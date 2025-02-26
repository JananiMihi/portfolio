import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const nameRef = useRef(null);
  
  useEffect(() => {
    const nameElement = nameRef.current;
    const fullName = "Janani Balasooriya";
    let i = 0;
    
    if (nameElement) {
      nameElement.textContent = "";
      
      const typingInterval = setInterval(() => {
        if (i < fullName.length) {
          nameElement.textContent += fullName.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="particles"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name" ref={nameRef}>Janani Balasooriya</h1>
          <h2 className="hero-title">
            <span className="highlight">Computer Engineer</span>
            <span className="blinking-cursor">|</span>
          </h2>
          
          <p className="hero-description">
            Crafting seamless digital experiences at the intersection of design & technology.
            Turning complex problems into elegant solutions with clean, efficient code.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
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
            <a href="mailto:contact@example.com" aria-label="Email" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="image-decoration"></div>
            <img src="/assets/portrait.jpg" alt="Janani Balasooriya" />
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <i className="fas fa-angle-down bounce"></i>
      </div>
    </section>
  );
};

export default Hero;