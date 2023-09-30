import React from "react";
import "../styles/components/ProjectCard.css";
import FlippingCard from "./FlippingCard";
import PropTypes from "prop-types";
const ProjectCard = ({ title, description, technologies, link, image }) => {
  return (
    <div className="project-card">
      <div className="upper">
        <h3>{title}</h3>
        <FlippingCard imageSrc={image} description={description} />
      </div>
      <div className="project-tech">
        <p>Tecnologías utilizadas:</p>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
      <a className="btn-primary" href={link} target="_blank" rel="noreferrer">
        Código Fuente
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
