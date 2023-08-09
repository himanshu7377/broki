



import React from 'react';
import '../styles/HomePage.css';
import PropertyCard from './PropertyCard';
import SearchBar from './SearchBar';

const HomePage = () => {
  const propertyListings = [
    // Your property listings data here

  
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRRWRHpf9lhSpgTWUvk9b-nNW3KErVjxTcg&usqp=CAU',
        area: 1500,
        monthlySales: 2000,
        monthlyRent: 1200,
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMI4PTpFaAnjp0U-k0FckopMLJMRaMVBjVw&usqp=CAU',
        area: 1800,
        monthlySales: 2500,
        monthlyRent: 1500,
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RyjnJ2sSfEDV7AuHqMh_ar-j-Ibs3HyUQw&usqp=CAU',
        area: 1800,
        monthlySales: 2500,
        monthlyRent: 1500,
      },
      // Add more property listings
    
  ];

  return (
    <div className="home-container">
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="property-list-container">
        {propertyListings.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
