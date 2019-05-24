import React from 'react';
import MarsRoverState from '../../constants/interfaces/MarsRoverState';

const initialState: MarsRoverState = {
  apiData: [],
}

const MarsRoverContext = React.createContext<MarsRoverState>(initialState);

export default MarsRoverContext;