import React from "react";
import "../styles/components/FlippingCard.css";

const FlippingCard = ({ imageSrc, description }) => {
  return (
    <div className="card-container">
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
