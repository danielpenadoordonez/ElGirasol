import React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json'; // Archivo JSON con productos
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pedido realizado:", {
      producto: product.name,
      ...formData,
    });
    alert(`Pedido registrado correctamente. Nos pondremos en contacto contigo.`);
  };

  return (
    <div>
    <Navbar />
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.imageSrc} alt={product.name} className="product-image" />
      <div className="product-info">
      <p className="product-description">{product.description}</p>
        <p className="product-price">Precio: {product.price}</p>

        <h3>¿Deseas pedirlo?</h3>
        <form onSubmit={handleSubmit} className="order-form">
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
    <Footer />
    </div>
  );
};

export default ProductDetail;