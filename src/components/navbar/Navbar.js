import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "./Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/images/home/NavbarLogo.jpg" alt="El Girasol Logo" className="navbar-logo" />
      </Link>
      <ul className="navbar-links">
        <li>
        <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/acerca-de">Quienes Somos</Link>
        </li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span className="dropdown-toggle">Categorías</span>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><a href="#flowers">Ramos de Flores</a></li>
              <li><a href="#arrangements">Arreglos Florales</a></li>
              <li><a href="#arrangements">Flores Artificiales</a></li>
              <li><a href="#bodas">Bodas</a></li>
              <li><a href="#graducciones">Graduaciones</a></li>
              <li><a href="#funerales">Funerales</a></li>
              <li><a href="#aniversarios">Aniversarios</a></li>
              <li><a href="#hogar">Decoración del Hogar</a></li>
              <li><a href="#empaques">Empaques para Regalos</a></li>
              <li><a href="#otros">Otros</a></li>
            </ul>
          )}
        </li>
        <li>
        <Link to="/contactenos">Contáctenos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;