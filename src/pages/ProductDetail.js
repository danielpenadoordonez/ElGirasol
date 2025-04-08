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
  const [entrega, setEntrega] = useState("floristeria");
  const [direccion, setDireccion] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    datetime: "",
    details: "",
    pickupDateTime: "",
    entrega: entrega,
    direccion: direccion
  });

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleEntregaChange = (e) => {
    setEntrega(e.target.value);
    if (e.target.value === "floristeria") {
      setDireccion(""); // Limpia el campo si cambia a recoger
    }
    handleChange(e)
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDateTime = formatDateTime(formData.pickupDateTime);
    console.log(formData)

    const templateParams = {
      to_email: "johavm85@gmail.com",
      producto: product.name,
      categoria_producto: category.charAt(0).toUpperCase() + category.slice(1),
      precio: product.price,
      nombre_cliente: formData.name,
      telefono: formData.phone,
      detalles: formData.details,
      fecha_hora: formattedDateTime,
      lugar_entrega: formData.entrega.charAt(0).toUpperCase() + formData.entrega.slice(1),
      direccion: formData.direccion
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
      <p className="product-price">Precio Base: ₡{product.price}</p>
      </div>

        <form onSubmit={handleSubmit} className="order-form">
          <h3>¿Desea pedir este producto?</h3>
          <input type="text" name="name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Tu Teléfono" value={formData.phone} onChange={handleChange} required />
          <textarea name="details" placeholder="Algun detalle que quieras" value={formData.details} onChange={handleChange} ></textarea>
          <label>Fecha y Hora en el que lo necesitas:</label>
          <input type="datetime-local" name="pickupDateTime" value={formData.pickupDateTime} onChange={handleChange} required />
          <label className="form-label">¿Cómo desea recibir su pedido?</label>

          <div className="entrega-options">
            <label className="entrega-option">
            Recoger en la floristería
              <input
                type="radio"
                name="entrega"
                value="floristeria"
                checked={entrega === "floristeria"}
                onChange={handleEntregaChange}
              />
            </label>

            <label className="entrega-option">
            Envío a domicilio
              <input
                type="radio"
                name="entrega"
                value="domicilio"
                checked={entrega === "domicilio"}
                onChange={handleEntregaChange}
              />
            </label>
          </div>

          {/* Dirección solo si elige domicilio */}
          {entrega === "domicilio" && (
            <div className="direccion-container">
              <label htmlFor="direccion">Dirección de entrega:</label>
              <textarea
                type="textarea"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ingrese la dirección completa"
                required
              />
            </div>
          )}

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