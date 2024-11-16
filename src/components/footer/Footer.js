import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return(
    <footer className="footer">
        <p>© 2024 Floristería El Girasol</p>
        <h3>Informacion de Contacto</h3>
        <p><FaPhoneAlt className="contact-icon" />  2446 8262</p>
        <p><FaPhoneAlt className="contact-icon" /> +506 8584 7040</p>
        <p><FaEnvelope className="contact-icon" />  johavm85@gmail.com</p>
        <p><FaMapMarkerAlt className="contact-icon" />   Atenas Centro, Calle Pinguino, Atenas, Costa Rica</p>
    </footer>
    )
}

export default Footer;