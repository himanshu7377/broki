import React from 'react';
import '../styles/HomePage.css'; // Import the CSS file for styling
import PropertyCard from './PropertyCard';

const HomePage = () => {

  const propertyListings = [
    {
      imageUrl: 'path-to-image-1.jpg',
      area: 1500,
      monthlySales: 2000,
      monthlyRent: 1200,
    },
    {
      imageUrl: 'path-to-image-2.jpg',
      area: 1800,
      monthlySales: 2500,
      monthlyRent: 1500,
    },
    // Add more property listings
  ];

  return (
    <div className="home-container">
      <h2>Property Listings</h2>
      <div className="property-list">
        {propertyListings.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
