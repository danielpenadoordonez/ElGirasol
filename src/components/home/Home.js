// src/HomePage.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Floristería El Girasol</h1>
        <p className="subtitle">Las flores más frescas y hermosas para cada ocasión</p>
      </header>

      <section className="main-content">
        <div className="card">
          <h2 className="card-title">Ramos de Flores</h2>
          <p>Ramos frescos y coloridos para alegrar tu día.</p>
        </div>
        <div className="card">
          <h2 className="card-title">Arreglos Florales</h2>
          <p>Perfectos para eventos especiales o decoraciones.</p>
        </div>
        <div className="card">
          <h2 className="card-title">Bodas</h2>
          <p>Los mejores arreglos para bodas</p>
        </div>
        <div className="card">
          <h2 className="card-title">Graduaciones</h2>
          <p>Los mejores arreglos para graduaciones</p>
        </div>
        <div className="card">
          <h2 className="card-title">Funerales</h2>
          <p>Los mejores arreglos para funerales</p>
        </div>
        <div className="card">
          <h2 className="card-title">Graduaciones</h2>
          <p>Los mejores arreglos para graduaciones</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Floristería El Girasol</p>
      </footer>
    </div>
  );
};

export default Home;
