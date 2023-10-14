import React, { useState, useEffect } from "react";
import "../styles/components/FlippingCard.css";

const FlippingCard = ({ imageSrc, description }) => {
  const [showDescription, setShowDescription] = useState(false);
 
  return (
    <div
      className={`card-container  ${showDescription ? "flipped" : ""}`}
    
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={imageSrc} alt="Imagen" />
        </div>
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
