import React from 'react';
import '../styles/PropertyCard.css'; // Import the CSS file for styling

const PropertyCard = ({ property }) => {
  const {Name,Location, imageUrl, area, monthlySales, monthlyRent } = property;

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  };

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={imageUrl} alt="Property" style={imageStyle} />
      </div>
      <div className="property-lower">
        <div className="property-details">
        <div className="property-name-location">
    <p className="property-name">{Name}</p>
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
          <button className="property-button">Talk To Us</button>
          <button className="property-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
