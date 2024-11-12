import React from "react";
import "./Home.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Card from "../card/Card";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header className="header"></header>
      <p className="subtitle">Las flores más frescas y hermosas para cada ocasión</p>
      <section className="main-content">
        <Card title="Ramos de Flores" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Arreglos Florales" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Flores Artificiales" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Bodas" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Graduaciones" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Funerales" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Aniversarios" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Decoración del hogar" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Empaques para regalos" imageSrc="/images/home/cards/Card.jpg"/>
        <Card title="Otros" imageSrc="/images/home/cards/Card.jpg"/>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
