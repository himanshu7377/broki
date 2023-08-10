



import React , { useState }from 'react';
import '../styles/HomePage.css';
import PropertyCard from './PropertyCard';
import SearchBar from './SearchBar';

const HomePage = () => {

  const [filteredPropertyListings, setFilteredPropertyListings] = useState([]);
  const backgroundImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQgVGgOlJLm8YZ6bZ77End0MB3QKVTAWsQQ&usqp=CAU';
  const propertyListings = [
    // Your property listings data here

  
      { name:'krishna Paradise',
        Location:'whitefield',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRRWRHpf9lhSpgTWUvk9b-nNW3KErVjxTcg&usqp=CAU',
        area: 1500,
        monthlySales: 2000000,
        monthlyRent: 120000,
      },
      {
        name:'SLV Paradise',
        Location:'uddupi',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMI4PTpFaAnjp0U-k0FckopMLJMRaMVBjVw&usqp=CAU',
        area: 1800,
        monthlySales: 2500000,
        monthlyRent: 150000,
      },
      {name:'makkhan Paradise',
      Location:'punjab',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RyjnJ2sSfEDV7AuHqMh_ar-j-Ibs3HyUQw&usqp=CAU',
        area: 1900,
        monthlySales: 3000000,
        monthlyRent: 180000,
      },
      // Add more property listings
    
  ];

  return (
    <div className="home-container">
       <div className="home-background" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="home-content">
        <SearchBar
        propertyListings={propertyListings}
        setFilteredPropertyListings={setFilteredPropertyListings}
      />
         
        </div>
      </div>
      <div className="property-list-container">
        {filteredPropertyListings.length > 0 ? (
          filteredPropertyListings.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))
        ) : (
          propertyListings.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
