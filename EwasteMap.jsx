// In your React component (e.g., EwasteMap.js)
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EwasteMap() {
  const [ewasteCenters, setEwasteCenters] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    // Fetch e-waste centers by state from your backend API
    if (selectedState) {
      axios.get(`/api/ewaste-centers/${selectedState}`)
        .then((response) => {
          setEwasteCenters(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [selectedState]);

  // Render your map with markers and search functionality
  // ...

  return (
    <div>
      <select onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Select a State</option>
        {/* Populate this dropdown with the available states */}
      </select>
      {/* Render the map and markers */}
    </div>
  );
}

export default EwasteMap;
