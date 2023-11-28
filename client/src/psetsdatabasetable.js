import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PsetsDatabaseTable = () => {
  const [databasePsets, setDatabasePsets] = useState([]);

  useEffect(() => {
    // Fetch data from /api/psets-database
    axios.get('/api/psets-database')
      .then(response => setDatabasePsets(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOI</th>
          </tr>
        </thead>
        <tbody>
          {databasePsets.map(pset => (
            <tr key={pset._id}>
              <td>{pset.name}</td>
              <td>{`https://doi.org/${pset.repositories[0].doi}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PsetsDatabaseTable;
