import React from 'react';
import initialState from './initialState';

const MarsRoverContext = React.createContext<any>(initialState);

export default MarsRoverContext;