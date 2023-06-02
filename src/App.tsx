import React from 'react';
import ActivityIndicator from './components/ActivityIndicator';
import './App.scss';

function App() {
  return (
    <div className="App-container">
      <ActivityIndicator labelText='Retrieving Products Data' />
    </div>
  );
}

export default App;
