import monster from "./src/images/monster-rolodex.png";
import pigGame from "./src/images/pig-game.png";
import turnero from "./src/images/turnero.png";
import adoptMe from "./src/images/adoptPet.png/";
import cofeetime from "./src/images/cofeetime.png";
import agileProject from "./src/images/agileProject.png";
// Supongamos que tienes un array con tus proyectos
const projects = [
  {
    title: "CofeeTime",
    description:
      "Sistema de Cafetería con uso de roles como Administrador, Recepcionista y Cocinero, cada uno con una pantalla diferente.",
    image: cofeetime,
    technologies: [
      "Django REST Framework",
      "React",
      "TailwindCSS",
      "MongoDB",
      "JWT",
      "Docker",
    ],
    link: "https://github.com/aleins99/CofeeTime",
  },
  {
    title: "Agile Project",
    description:
      "Sistema de Proyectos basada en la metodología SCRUM, donde puedes crear proyectos, crear roles, agregar tareas, agregar miembros, agregar comentarios,manejo de us, tablero kanban, historial de proyectos y avisos por correo. ",
    technologies: [
      "Boostrap",
      "Oauth2",
      "Javascript",
      "Django",
      "AJAX",
      "PostgreSQL",
    ],
    image: agileProject,
    link: "https://github.com/aleins99/PROYECTO_IS2",
  },
  {
    title: "Turnero",
    description:
      "Sistema de registro turnos, donde puedes agregar diferentes categorías y ordenarlas por preferencia o condición de salud.",
    technologies: ["Django", "HTML", "CSS", "PostgreSQL"],
    image: turnero,
    link: "https://github.com/aleins99/Turnero",
  },
  {
    title: "Adopt Me",
    description:
      "Una página que simula el proceso de adoptar animales por medio de una página web.",
    technologies: ["React", "CSS"],
    image: adoptMe,
    link: "https://github.com/aleins99/AdoptPet",
  },
  {
    title: "Monster Rolodex",
    description: "Mi primer proyecto usando React ⚛. ",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: monster,
    link: "",
  },
  {
    title: "Pig Game",
    description: "Este es un juego de 2 jugadores para pasarla bien :).",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: pigGame,
    link: "https://github.com/aleins99/Pig-Game",
  },

  // ...otros proyectos
];

export default projects;
