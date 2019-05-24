import React, { useReducer } from 'react';
import Information from './components/Information/Information';
import MarsRoverContext from './context/mars-rover';
import InfoFilter from 'components/InfoFilter/InfoFilter';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <MarsRoverContext.Provider>
        <Information />
        <InfoFilter />
      </MarsRoverContext>
    </div>
  );
}

export default App;
