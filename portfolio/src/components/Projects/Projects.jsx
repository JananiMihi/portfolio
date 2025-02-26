import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Food Ordering Web App",
    shortDescription: "A modern MERN stack food ordering system with real-time tracking.",
    image: "/assets/food-order.avif",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    sourceLink: "https://github.com/JananiMihi/food"
  },
  {
    id: 2,
    title: "Income Prediction",
    shortDescription: "AI-powered system predicting income levels based on user data.",
    image: "/assets/ml.jpg",
    technologies: ["Python", "Scikit-Learn"],
    sourceLink: "https://github.com/yourusername/income-prediction"
  },
  {
    id: 3,
    title: "Matchmaking Game",
    shortDescription: "A full-stack task manager with real-time updates and collaboration.",
    image: "/assets/networking.avif",
    technologies: ["Python"],
    sourceLink: "https://github.com/JananiMihi/Network-Project.git"
  },
  {
    id: 4,
    title: "Authentication System",
    shortDescription: "A full-stack task manager with real-time updates and collaboration.",
    image: "/assets/log.avif",
    technologies: ["Next.js", "Django"],
    sourceLink: "https://github.com/JananiMihi/Frontend.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;