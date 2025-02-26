import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs
      .send(
        'service_pq9on9q', // Replace with your EmailJS service ID
        'template_f787onn', // Replace with your EmailJS template ID
        formData,
        'sSEyCMhGFADjVvRI5' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Message sent successfully!', response);
          setFormSubmitted(true);

          // Reset the form after 3 seconds
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
            setFormSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.error('Failed to send message:', error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaGithub /> {/* GitHub icon */}
              </div>
              <div className="contact-card-content">
                <h3>GitHub</h3>
                <p>github.com/JananiMihi</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaLinkedin /> {/* LinkedIn icon */}
              </div>
              <div className="contact-card-content">
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/janani-jmb</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FaEnvelope /> {/* Email icon */}
              </div>
              <div className="contact-card-content">
                <h3>Email</h3>
                <p>jananimihiranijmbalasooriya@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message <FaPaperPlane className="btn-icon" />
              </button>

              {formSubmitted && (
                <div className="form-success">
                  <p>Your message has been sent successfully!</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;