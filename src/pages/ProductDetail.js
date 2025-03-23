import React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import emailjs from "emailjs-com";
import productsData from '../data/products.json'; 
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import './css/ProductDetail.css';

const ProductDetail = () => {
  const { category, id } = useParams();
  var productsInCategory = productsData[category]
  const product = productsInCategory.find(item => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    datetime: "",
    details: "",
    pickupDateTime: "",
  });

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
  
    // Obtener día, mes y año
    const day = date.getDate();
    const month = date.toLocaleString("es-ES", { month: "long" }); // Mes en texto
    const year = date.getFullYear();
  
    // Formatear la hora en hh:mm AM/PM
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12 || 12; // Convierte 0 en 12 para formato 12h
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Siempre dos dígitos
  
    return `${day} de ${month} de ${year}, ${hours}:${formattedMinutes} ${ampm}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDateTime = formatDateTime(formData.pickupDateTime);

    const templateParams = {
      to_email: "penadodan02@gmail.com",
      producto: product.name,
      precio: product.price,
      nombre_cliente: formData.name,
      telefono: formData.phone,
      detalles: formData.details,
      fecha_hora: formattedDateTime,
    };

    emailjs
      .send(
        "service_uj4avks", // Coloca tu Service ID de EmailJS
        "template_ac4dmje", // Coloca tu Template ID de EmailJS
        templateParams,
        "ZoYFPiadv6X_AIMCL" // Coloca tu Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log("Correo enviado con éxito:", response);
         NotificationManager.success("Pedido enviado correctamente. Nos pondremos en contacto contigo.", "", 4000);
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          NotificationManager.error("Hubo un problema al enviar el pedido.", "Error", 4000);
        }
      );
  };

  return (
    <div>
    <Navbar />
    <div className="product-detail">
    <h1>{product.name}</h1>
    <div className="product-container">
      
      <div className="product-info">
      <img src={product.imageSrc} alt={product.name} className="product-image" />
      <p className="product-description">{product.description}</p>
      <p className="product-price">Precio Base: {product.price}</p>
      </div>

        <form onSubmit={handleSubmit} className="order-form">
          <h3>Pedir este producto</h3>
          <input type="text" name="name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Tu Teléfono" value={formData.phone} onChange={handleChange} required />
          <textarea name="details" placeholder="Algun detalle que quieras" value={formData.details} onChange={handleChange} ></textarea>
          <label>Fecha y Hora en el que lo necesitas:</label>
          <input type="datetime-local" name="pickupDateTime" value={formData.pickupDateTime} onChange={handleChange} required />
          <p className="important-note">📍 Los pedidos deben recogerse en nuestra floristería.</p>
          <button type="submit">Enviar Pedido</button>
        </form>
      </div>
    </div>
    <NotificationContainer />
    <Footer />
    </div>
  );
};

export default ProductDetail;