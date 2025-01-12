import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "./Navbar.css";
import categories from '../../data/categories.json';

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
              {categories.map((category) => (
                <Link to="/" key={category.id}>
                  <li><a>{category.name}</a></li>
              </Link>
              ))}
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