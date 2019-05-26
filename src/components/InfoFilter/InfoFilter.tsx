import React, { useContext } from 'react'
import MarsRoverContext from '../../context/mars-rover';
import marsRoverData from '../../api/marsRover';
import { ACTION_TYPES } from '../../context/mars-rover/actions';
import { Button } from 'components';

function InfoFilter(): JSX.Element {
  const context= useContext(MarsRoverContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    context.dispatch({type, payload: e.target.value});
  }

  const selectRover = (type: string, newRover: string) => {
    context.dispatch({type, payload: newRover});
  }

  const fetchApi = async (sol: string, rover: string) => {
    const data = await marsRoverData(sol, rover);
    context.dispatch({type: ACTION_TYPES.UPDATE_API_DATA, payload: data});
  }

  const { rover, sol } = context.state;
  return (
    <div>
      <div>Sol:</div>
      <input
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, ACTION_TYPES.SELECT_SOL)}
        type="number"
      />
      <div>Rover: {rover}</div>
      <Button
        func={selectRover}
        type={ACTION_TYPES.SELECT_ROVER}
        value={'curiosity'}
      >
        Curiosity
      </Button>
      <Button
        func={selectRover}
        type={ACTION_TYPES.SELECT_ROVER}
        value={'opportunity'}
      >
        Opportunity
      </Button>
      <Button
        func={selectRover}
        type={ACTION_TYPES.SELECT_ROVER}
        value={'spirit'}
      >
        Spirit
      </Button>
      <Button
        func={fetchApi}
        value={[sol, rover]}
      >
        Search
      </Button>
    </div>
  )
}

export default InfoFilter;
