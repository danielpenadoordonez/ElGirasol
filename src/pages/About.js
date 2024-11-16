import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './css/About.css';

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="about">
        <h1>Bienvenidos a la Floristería El Girasol</h1>
        <p>Una floristería dedicada a brindar belleza natural y alegría a través de nuestras flores. Con años de experiencia en la industria, nos enorgullece ofrecer una amplia variedad de flores frescas, desde girasoles y rosas hasta flores exóticas.</p>
        
        <p>Nuestra misión es ser el destino preferido para aquellos que buscan la mejor calidad en flores y arreglos florales personalizados. Nos esforzamos por traer lo mejor de la naturaleza para cualquier ocasión, desde bodas y cumpleaños hasta simplemente alegrar el día.</p>
        
        <p>En El Girasol, la calidad y la frescura son nuestras prioridades, y estamos comprometidos a garantizar que cada cliente encuentre exactamente lo que necesita. ¡Gracias por permitirnos ser parte de sus momentos especiales!</p>
        <img src="/images/home/Logo.jpg" alt="El Girasol Logo" className="about-logo" />
        </div>
        <Footer />
    </div>
  );
};

export default About;