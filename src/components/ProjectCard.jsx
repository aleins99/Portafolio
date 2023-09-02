import React from "react";
import "../styles/components/ProjectCard.css";
import FlippingCard from "./FlippingCard";
const ProjectCard = ({ title, description, technologies, link, image }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <FlippingCard imageSrc={image} description={description} />
      <p>Tecnologías utilizadas: {technologies.join(", ")}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Código Fuente
      </a>
    </div>
  );
};

export default ProjectCard;
