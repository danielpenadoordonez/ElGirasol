import React from 'react';
import './css/Gallery.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import galleries from '../data/galleries.json';
import categories from '../data/categories.json';

const Gallery = () => {
  const { category } = useParams();
  const galleryByCategory = galleries[category]
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
          {galleryByCategory.map((gallery) => (
          <div className="gallery-card" key={gallery.id}>
              <img src={gallery.imageSrc} alt={gallery.name} className="gallery-image" />
              <h3 className="gallery-card-title">{gallery.name}</h3>
              <p className="gallery-card-price">{gallery.price}</p>
          </div>
          ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;