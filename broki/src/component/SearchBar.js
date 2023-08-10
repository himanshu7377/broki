import React, { useState } from 'react';


const SearchBar = ({ propertyListings, setFilteredPropertyListings }) => {
  const [locationFilter, setLocationFilter] = useState('');

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocationFilter(newLocation);
  };

  const handleSearch = () => {
    const filteredListings = propertyListings.filter(property => {
      if (property.location) {
        return property.location.toLowerCase().includes(locationFilter.toLowerCase());
      }
      return false;
    });

    setFilteredPropertyListings(filteredListings);
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search by location"
          value={locationFilter}
          onChange={handleLocationChange}
        />
        
      </div>
    </div>
  );
};

export default SearchBar;
