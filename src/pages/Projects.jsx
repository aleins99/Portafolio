import React from "react";
import "../styles/pages/Projects.css";
import ProjectCard from "../components/ProjectCard";
import monster from "../images/monster-rolodex.png";
const Projects = () => {
  // Supongamos que tienes un array con tus proyectos
  const projects = [
    {
      title: "Proyecto 1",
      description: "Este es el proyecto 1",
      technologies: ["React", "Node.js"],
      image: monster,
      link: "#",
    },
    {
      title: "Proyecto 2",
      description: "Este es el proyecto 2",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "#",
    },
    // ...otros proyectos
  ];

  return (
    <div>
      <h2>Mis Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
