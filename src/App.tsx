import React from 'react';
import Information from './components/Information/Information';
import MarsRoverContext from './context';
import './App.css';

function App() {
  return (
    <div>
      <MarsRoverContext>
        <Information />
        <InfoFilter />
      </MarsRoverContext>
    </div>
  );
}

export default App;
