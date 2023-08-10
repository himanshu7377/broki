import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ propertyListings, setFilteredPropertyListings }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredPropertyListings(propertyListings);
      return;
    }

    const filteredListings = propertyListings.filter(property => {
      return property.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredPropertyListings(filteredListings);
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search by Property Name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="search-bar-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
