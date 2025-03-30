import React from "react";
import "./css/Home.css";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import categories from '../data/categories.json';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header className="header">
        <img src="/images/home/Logo.jpg" alt="El Girasol Logo" className="header-logo" />
      </header>
      <p className="subtitle">"Las flores hacen los momentos más especiales"</p>
      <h2>Explora algunas de nuestras categorias y productos</h2>
      <section className="main-content">
        {categories.map((category) => (
          <Link to={category.gallery_path} className="card-link" key={category.id}>
            <Card title={category.name} imageSrc={category.imageSrc}/>
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
