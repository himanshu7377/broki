import React from 'react';
import '../styles/PropertyCard.css'; // Import the CSS file for styling

const PropertyCard = ({ property }) => {
  const { imageUrl, area, monthlySales, monthlyRent } = property;

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
          <p className="property-area">Area: {area} sq. ft.</p>
          <p className="property-sales">Monthly Sales: ${monthlySales}</p>
          <p className="property-rent">Monthly Rent: ${monthlyRent}</p>
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
