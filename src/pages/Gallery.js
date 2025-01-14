import React from 'react';
import './css/Gallery.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import galleries from '../data/galleries.json';

const Gallery = () => {
  const { category } = useParams();
  const galleryByCategory = galleries[category]

  return (
    <div>
        <Navbar />
        <div className="gallery-container">
        <h1 className="gallery-title">Ramos de Flores</h1>
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