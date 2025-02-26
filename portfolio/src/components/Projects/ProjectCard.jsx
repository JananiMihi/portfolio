import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
