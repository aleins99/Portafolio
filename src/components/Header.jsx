import React from "react";
import "../styles/components/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>Alejandro Marín</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/about-me">Acerca de Mí</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
