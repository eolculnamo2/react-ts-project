import React, { useReducer } from 'react';
import { InfoFilter, Information, PhotoList } from './components';
import MarsRoverContext from './context/mars-rover';
import reducer from './context/mars-rover/reducer';
import initialState from './context/mars-rover/initialState';
import './App.scss';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="c-App__wrap">
      <MarsRoverContext.Provider value={{state, dispatch}}>
        <Information />
        <InfoFilter />
        <PhotoList />
      </MarsRoverContext.Provider>
    </div>
  );
}

export default App;
