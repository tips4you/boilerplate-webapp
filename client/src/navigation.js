import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/api/psets">API Psets</Link></li>
        <li><Link to="/api/psets-database">Database Psets</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
