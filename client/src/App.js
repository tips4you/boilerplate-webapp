import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import PsetsTable from './psetstable';
import PsetsDatabaseTable from './psetsdatabasetable';
import Navigation from './navigation';

const App = () => {
  return (
    <Router>
      <header className="App-header">Psets App
      <div>
        <Navigation />
        <hr />

        <Routes>
          <Route path="/api/psets" element={<PsetsTable />} />
          <Route path="/api/psets-database" element={<PsetsDatabaseTable />} />
        </Routes>

      </div>
      </header>
    </Router>
  );
};

export default App;
