import React from "react";
import './Card.css'

const Card = (props) => {
    const title = props.title
    const imageSrc = props.imageSrc
    
    return (
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <img src={imageSrc} alt={title} className="card-image" />
        {/* <p className="card-content">Descripción o contenido adicional del card.</p> */}
      </div>
    );
  };
  
  export default Card;