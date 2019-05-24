import React, { useReducer } from 'react';
import Information from './components/Information/Information';
import MarsRoverContext from './context/mars-rover';
import InfoFilter from 'components/InfoFilter/InfoFilter';
import reducer from './context/mars-rover/reducer';
import initialState from './context/mars-rover/initialState';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <MarsRoverContext.Provider value={{state, dispatch}}>
        <Information />
        <InfoFilter />
      </MarsRoverContext.Provider>
    </div>
  );
}

export default App;
