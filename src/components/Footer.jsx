import { Envelope, GithubLogo } from "@phosphor-icons/react";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <h1>Contáctame</h1>
      <p>Siempre estoy en la escucha de nuevas oportunidades</p>
      <a
        href="https://github.com/aleins99"
        target="_blank"
        rel="noreferrer"
        alt="Ir a la cuenta de GitHub de Alejandro"
        title="Visitar mi cuenta de GitHub"
      >
        <GithubLogo size="40" />
      </a>
      <a
        href="https://www.linkedin.com/in/alejandro-marin99/"
        target="_blank"
        rel="noreferrer"
        alt="Ir a la cuenta de Linkedin de Alejandro"
        title="Visitar mi cuenta de Linkedin"
      >
        <LinkedinLogo size="40" />
      </a>
      <a
        href="mailto:amarininsfran@gmail.com"
        alt="Enviar correo a Alejandro"
        title="Envíame un correo para hablar"
      >
        <Envelope size="40" />
      </a>
      <p style={{ marginTop: "36px" }}>Hecho por Alejandro Marín 👨‍💻❤️</p>
    </footer>
  );
};

export default Footer;
