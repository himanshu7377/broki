import React from 'react';
import '../styles/PropertyCard.css'; // Import the CSS file for styling

const PropertyCard = ({ property }) => {
  const { imageUrl, area, monthlySales, monthlyRent } = property;

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={imageUrl} alt="Property" />
      </div>
      <div className="property-details">
        <p className="property-area">Area: {area} sq. ft.</p>
        <p className="property-sales">Monthly Sales: ${monthlySales}</p>
        <p className="property-rent">Monthly Rent: ${monthlyRent}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
