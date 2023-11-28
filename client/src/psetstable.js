import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PsetsTable = () => {
  const [psets, setPsets] = useState([]);
  const [filteredPsets, setFilteredPsets] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch data from /api/psets
    axios.get('http://localhost:5000/api/psets')
      .then(response => setPsets(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    // Apply filtering when the filter state changes
    setFilteredPsets(
      psets.filter(pset => pset.name.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [psets, filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Filter by name" onChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOI</th>
          </tr>
        </thead>
        <tbody>
          {filteredPsets.map(pset => (
            <tr key={pset._id}>
              <td>{pset.name}</td>
              <td><a href={`https://doi.org/${pset.doi}`} target="_blank" rel="noopener noreferrer">{`https://doi.org/${pset.doi}`}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PsetsTable;
