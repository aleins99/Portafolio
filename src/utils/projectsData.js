import monster from "../images/monster-rolodex.png";
import pigGame from "../images/pig-game.png";
import turnero from "../images/turnero.png";
import adoptMe from "../images/adoptPet.png/";
// Supongamos que tienes un array con tus proyectos
const projects = [
  {
    title: "Turnero",
    description: "Este es el proyecto 2",
    technologies: ["Django", "HTML", "CSS", "PostgreSQL"],
    image: turnero,
    link: "https://github.com/aleins99/Pig-Game",
  },
  {
    title: "Adopt Me",
    description:
      "Una página que simula el proceso de adoptar animales por medio de una página web",
    technologies: ["React", "CSS"],
    image: adoptMe,
    link: "https://github.com/aleins99/AdoptPet",
  },
  {
    title: "Monster Rolodex",
    description: "Este es el proyecto 1",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: monster,
    link: "#",
  },
  {
    title: "Pig Game",
    description: "Este es el proyecto 2",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: pigGame,
    link: "https://github.com/aleins99/Pig-Game",
  },
  // ...otros proyectos
];

export default projects;