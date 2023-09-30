import React, { useState, useEffect } from "react";
import "../styles/components/Header.css";
import { Link } from "react-router-dom";
import pdf from "../assets/cv.pdf";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenuOnResize = () => {
    if (window.innerWidth > 820 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Add a resize event listener to handle screen width changes
  useEffect(() => {
    window.addEventListener("resize", closeMenuOnResize);
    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, [isMenuOpen]);
  return (
    <header>
      <h1>Alejandro Marín</h1>
      <button
        className={`hamburger ${isMenuOpen ? "nav-menu" : ""}`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav className={`nav-menu ${isMenuOpen ? "open" : "hidden"}`}>
        <div
          className={`${isMenuOpen ? "close-menu open" : "hamburger"}`}
          onClick={toggleMenu}
        >
          <span>X</span>
        </div>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#my-projects">Proyectos</a>
          </li>

          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <button className="btn-secondary">
          <a href={pdf} target="_blank" rel="noreferrer">
            CV
          </a>
        </button>
      </nav>
    </header>
  );
}

export default Header;
