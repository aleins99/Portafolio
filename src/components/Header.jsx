import React, { useState } from "react";
import "../styles/components/Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav className={`nav-menu ${isMenuOpen ? "open" : "hidden"}`}>
        <Link to="/">Inicio</Link>
        <a href="#projects">Proyectos</a>
        <Link to="/about-me">Acerca de Mí</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
