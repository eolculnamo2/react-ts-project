import React, { useContext } from 'react'
import MarsRoverContext from '../../context/mars-rover';
import { ACTION_TYPES } from '../../context/mars-rover/actions';

function InfoFilter() {
  const context= useContext(MarsRoverContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, type: String) => {
    return context.dispatch({type, payload: e.target.value});
  }


  const { rover, sol } = context.state;
  return (
    <div>
      <div>Sol: {sol}</div>
      <input onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, ACTION_TYPES.SELECT_SOL)} />
      <div>Rover: {rover}</div>
      <button type="button">Curiosity</button>
      <button type="button">Opportunity</button>
      <button type="button">Spirit</button>
    </div>
  )
}

export default InfoFilter;
