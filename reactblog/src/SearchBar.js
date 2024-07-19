import React, { useState } from 'react';

const SearchableList = () => {
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Pineapple',
    'Mango'
  ]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  return (
    <div className="container mt-4">
      <h1>Searchable List</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="list-group">
        {searchTerm === '' ? (
          items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))
        ) : (
          filteredItems.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchableList;
