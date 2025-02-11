import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './css/NotFound.css';

const NotFound = () => {
  return (
    <div>
        <Navbar />
        <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">¡Oops! La página que buscas no existe.</p>
        <Link to="/" className="notfound-home-link">Volver al Inicio</Link>
        </div>
        <Footer />
    </div>
  );
};

export default NotFound;