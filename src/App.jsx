import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Home />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
