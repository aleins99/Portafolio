import React from "react";
import "../styles/pages/Projects.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projectsData";
const Projects = () => {
  return (
    <div id="my-projects">
      <h2>Mis Proyectos</h2>
      <div id="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
