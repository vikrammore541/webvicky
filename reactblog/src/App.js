import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import SearchBar from './SearchBar'; // Import your SearchBar component

function App() {
  return (
    <div className="container mt-4">
      <h1>My React App</h1>
      <SearchBar />
      {/* Other components and content */}
    </div>
  );
}

export default App;
