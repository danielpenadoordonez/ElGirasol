import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Facebook, Instagram } from "lucide-react";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './css/Contact.css';

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className="contact">
        <h1 className="contact-title">Contáctenos</h1>
        <div className="contact-info">
            <p><FaPhoneAlt className="contact-icon" />  2446 8262</p>
            <p><FaPhoneAlt className="contact-icon" /> +506 8584 7040</p>
            <p><FaEnvelope className="contact-icon" /> johavm85@gmail.com</p>
            <p><FaMapMarkerAlt className="contact-icon" /> Atenas Centro, Entrada frente a Cafetería Baruch, Atenas, Costa Rica</p>
        </div>
        <div className="contact-container">
          <h3>Tambien nos puedes encontrar en las siguientes redes sociales</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/floristeriaelgirasolatenas/" // Reemplaza con tu cuenta
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <Instagram size={40} />
            </a>
            <a
              href="https://www.facebook.com/floristeriagirasolatenas/" // Reemplaza con tu cuenta
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <Facebook size={40} />
            </a>
          </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Contact;
