import React from 'react';


const EnergyCard = ({ title, description, image }) => {
  return (
    <div className="energy-card">
      <img src={image} alt={title} className="energy-card__image" />
      <div className="energy-card__content">
        <h3 className="energy-card__title">{title}</h3>
        <p className="energy-card__description">{description}</p>
      </div>
    </div>
  );
};

export default EnergyCard;
