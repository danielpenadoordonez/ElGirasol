import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
            <p><FaMapMarkerAlt className="contact-icon" /> Atenas Centro, Calle Pinguino, Atenas, Costa Rica</p>
        </div>
        <h2 className="contact-form-title">Envía un mensaje</h2>
        <form className="contact-form">
            <label>
            Nombre:
            <input type="text" name="name" placeholder="Tu nombre" required />
            </label>
            <label>
            Motivo:
            <input type="email" name="email" placeholder="Motivo del mensaje" required />
            </label>
            <label>
            Mensaje:
            <textarea name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
            </label>
            <button type="submit">Enviar</button>
        </form>
        </div>
        <Footer />
    </div>
  );
};

export default Contact;
