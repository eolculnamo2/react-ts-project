import React from 'react';
import MarsRoverState from '../../constants/interfaces/MarsRoverState';
import initialState from './initialState';

const MarsRoverContext = React.createContext<MarsRoverState>(initialState);

export default MarsRoverContext;