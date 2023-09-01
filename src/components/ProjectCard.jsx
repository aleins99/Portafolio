import React from "react";
import "../styles/components/ProjectCard.css";

const ProjectCard = ({ title, description, technologies, link, image }) => {
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Tecnologías utilizadas: {technologies.join(", ")}</p>
      <a href={link}>Ver en GitHub</a>
    </div>
  );
};

export default ProjectCard;
