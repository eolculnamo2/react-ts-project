import React, { useReducer } from 'react';
import { InfoFilter, Information } from './components';
import MarsRoverContext from './context/mars-rover';
import reducer from './context/mars-rover/reducer';
import initialState from './context/mars-rover/initialState';
import './App.css';
import PhotoList from 'components/PhotoList/PhotoList';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <MarsRoverContext.Provider value={{state, dispatch}}>
        <Information />
        <InfoFilter />
        <PhotoList />
      </MarsRoverContext.Provider>
    </div>
  );
}

export default App;
