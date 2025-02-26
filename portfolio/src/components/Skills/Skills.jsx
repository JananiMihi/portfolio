import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Language",
      skills: [
        { name: "Python", level: 70 },
        { name: "c#", level: 60 },
        { name: "c", level: 70 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      title: "Front-end Development",
      skills: [
        { name: "React.JS", level: 80 },
        { name: "Next.JS", level: 85 },
        { name: "Taliwind CSS", level: 80 },
        { name: "HTML/CSS/JavaScript", level: 88 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 90 },
      ]
    },
    {
      title:"Databases",
      skills: [
        { name: "MySQL", level: 95 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 92 },
        
      ]
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <div className="skill-category" key={catIndex}>
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;