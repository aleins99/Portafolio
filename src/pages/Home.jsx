import React from "react";
import Header from "../components/Header";
import "../styles/pages/Home.css";
const Home = () => {
  return (
    <div className="home-page" id="home">
      <span>Hola, mi nombre es</span>
      <h1>Alejandro Marín</h1>
      <h1> Soy un Desarrollador Web de Paraguay 🇵🇾.</h1>
      <p>
        Me encanta aprender y mejorar siempre tanto en lo personal como profesionalmente.
      </p>
      <p>
        Cree esta página para compartir lo que voy aprendiendo y mostrar mis
        habilidades como desarrollador.
      </p>
    </div>
  );
};

export default Home;
