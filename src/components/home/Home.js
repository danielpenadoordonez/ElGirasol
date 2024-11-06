import React from "react";
import "./Home.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header className="header">
        {/* <h1 className="title">Floristería El Girasol</h1>
        <p className="subtitle">Las flores más frescas y hermosas para cada ocasión</p> */}
      </header>
      <p className="subtitle">Las flores más frescas y hermosas para cada ocasión</p>
      <section className="main-content">
        <div className="card">
          <h2 className="card-title">Ramos de Flores</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Arreglos Florales</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Flores Artificiales</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Bodas</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Graduaciones</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Funerales</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Aniversarios</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Decoración del hogar</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Empaques para regalos</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Otros</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
