import React from "react";
import "./css/Home.css";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header className="header">
        <img src="/images/home/Logo.jpg" alt="El Girasol Logo" className="header-logo" />
      </header>
      <p className="subtitle">"Las flores hacen los momentos más especiales"</p>
      <section className="main-content">
        <Link to="/" className="card-link">
          <Card title="Ramos de Flores" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
          <Card title="Arreglos Florales" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
          <Card title="Flores Artificiales" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
          <Card title="Bodas" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
          <Card title="Graduaciones" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
          <Card title="Funerales" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
          <Card title="Aniversarios" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
          <Card title="Decoración del hogar" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
          <Card title="Empaques para regalos" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
        <Link to="/" className="card-link">
        <Card title="Otros" imageSrc="/images/home/cards/Card.jpg"/>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
