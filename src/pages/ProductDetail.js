import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json'; // Archivo JSON con productos
import './css/ProductDetail.css';

const ProductDetail = () => {
  const { category, id } = useParams();
  var productsInCategory = productsData[category]
  const product = productsInCategory.find(item => item.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
    <Navbar />
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.imageSrc} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <button className="buy-button">Comprar Ahora</button>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProductDetail;