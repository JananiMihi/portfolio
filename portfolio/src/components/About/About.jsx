import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate and motivated undergraduate with a strong interest in web development, 
              specializing in creating elegant, responsive, and user-friendly interfaces. With a foundation
              in Computer Science and a love for clean, efficient code, I am eager to contribute to meaningful
              projects and gain hands-on experience in the tech industry.
            </p>
            <p>
              My journey in web development began during my studies, where I worked on various academic and
              personal projects, ranging from simple websites to interactive web applications. As an aspiring
              tech enthusiast, I am constantly learning and adapting to new technologies to enhance my skills and
              stay updated with industry trends. I am now seeking an internship opportunity to further grow
              my expertise and contribute to real-world projects.
            </p>

            <div className="about-details">
              <div className="about-detail">
                <strong>Name:</strong> Janani Balasooriya
              </div>
              <div className="about-detail">
                <strong>Email:</strong> janani@mihiranijmbalasooriya.com
              </div>
            </div>

            <div className="about-buttons">
              <a href="/assets/resume.pdf" download className="btn btn-primary">
                Download CV
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;