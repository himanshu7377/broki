import React, { useState } from 'react';
import '../styles/PropertyCard.css'; 

const PropertyCard = ({ property }) => {
  const { name, Location, imageUrl, area, monthlySales, monthlyRent } = property;
  const [isTalkToUsActive, setIsTalkToUsActive] = useState(false);

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  };

  const handleTalkToUsToggle = () => {
    setIsTalkToUsActive(!isTalkToUsActive);
  };

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={imageUrl} alt="Property" style={imageStyle} />
      </div>
      <div className="property-lower">
        <div className="property-details">
          <div className="property-name-location">
            <p className="property-name">{name}</p>
            <p className="property-location">{Location}</p>
          </div>
          <div className="property-stats">
            <div className="property-stats-row">
              <span className="property-stat-label">Monthly Sales:</span><br/>
              <span className="property-stat-value">{monthlySales} Rs</span>
            </div>
            <div className="property-stats-row">
              <span className="property-stat-label">Monthly Rent:</span><br/>
              <span className="property-stat-value">{monthlyRent} Rs</span>
            </div>
            <div className="property-stats-row">
              <span className="property-stat-label">Area:</span><br/>
              <span className="property-stat-value">{area} sq. ft.</span>
            </div>
          </div>
        </div>
        <div className="property-buttons">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isTalkToUsActive}
              onChange={handleTalkToUsToggle}
              placeholder='Talk to us'
            />
            <span className="slider"></span>
          </label>
          <button className="property-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
