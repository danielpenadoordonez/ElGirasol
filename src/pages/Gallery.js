import React from 'react';
import './css/Gallery.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import categories from '../data/categories.json';

const Gallery = () => {
  const { category } = useParams();
  const navitate = useNavigate()
  var productsByCategory = null

  try {
    productsByCategory = products[category]
  } catch (error) {
    navitate('/*')
  }
  var galleryTitle = ""

  const createGalleryTitle = () => {
    categories.forEach(categoryObj => {
      if (category == categoryObj.id) {
        galleryTitle = <h1 className="gallery-title">{categoryObj.name}</h1>
      }
    });
  }

  createGalleryTitle();

  return (
    <div>
      <Navbar />
      <div className="gallery-container">
      {galleryTitle}
      <div className="gallery-grid">
          {productsByCategory.map((product) => (
           <Link key={product.id} to={`/galeria/${category}/${product.id}`} className="gallery-card">  
              <img src={product.imageSrc} alt={product.name} className="gallery-image" />
              <h3 className="gallery-card-title">{product.name}</h3>
              <p className="gallery-card-price">{product.price}</p>
          </Link>
          ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;