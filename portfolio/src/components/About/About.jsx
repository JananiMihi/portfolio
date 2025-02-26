import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-container">
      <motion.div
        className="about-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
      </motion.div>

      <motion.p
        className="about-description"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a passionate and motivated undergraduate with a strong interest in web development,
        specializing in creating elegant, responsive, and user-friendly interfaces.
      </motion.p>

      <motion.div
        className="about-contact-info"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p><strong>Name:</strong> Janani Balasooriya</p>
        <p><strong>Email:</strong> janani@example.com</p>
      </motion.div>

      <motion.div
        className="about-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <button className="btn">Download CV</button>
        <button className="btn">Contact Me</button>
      </motion.div>
    </section>
  );
};

export default About;