import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import './chartSetup'; // Add this line to register Chart.js components

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
