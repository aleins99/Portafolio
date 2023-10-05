import React from "react";
import "../styles/pages/Projects.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projectsData";
const Projects = () => {
  return (
    <div id="my-projects">
      <h2>Mis Proyectos</h2>
      <div id="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
