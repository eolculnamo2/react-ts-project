import React, { useContext, useEffect } from 'react'
import MarsRoverContext from '../../context/mars-rover';
import marsRoverData from '../../api/marsRover';
import { roverCams } from '../../constants/variables';
import { ACTION_TYPES } from '../../context/mars-rover/actions';
import { Button } from 'components';
import './InfoFilter.scss';

function InfoFilter(): JSX.Element {
  const context= useContext(MarsRoverContext);
  const { cam, rover, sol, validRover } = context.state;

  useEffect(() => {
    // Make initial call so that page is not blank to the user on load.
    fetchApi(sol,rover,cam);
  }, []);

  useEffect(() => {
    context.dispatch({type: ACTION_TYPES.UPDATE_VALID_ROVER, payload: isValidRover()})
    context.dispatch({type: ACTION_TYPES.UPDATE_CAM, payload: 'all'})
  }, [rover]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    context.dispatch({type, payload: e.target.value});
  }

  const selectRover = (newRover: string) => {
    context.dispatch({type: ACTION_TYPES.SELECT_ROVER, payload: newRover});
  }

  const fetchApi = async (sol: string, rover: string, cam: string) => {
    const data = await marsRoverData(sol, rover, cam);
    context.dispatch({type: ACTION_TYPES.UPDATE_API_DATA, payload: data});
  }

  const addCameraFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    context.dispatch({type: ACTION_TYPES.UPDATE_CAM, payload: e.target.value})
  }

  const isValidRover = (): boolean => ['curiosity', 'opportunity', 'spirit'].includes(rover);

  return (
    <div className="c-InfoFilter__wrap">
      <h3 className="c-InfoFilter__heading">Parameters</h3>
      <div className="c-InfoFilter__flex-inps">
        <div className="c-InfoFilter__param">
          <div>Select Sol: </div>
          <input
            className="c-InfoFilter__input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, ACTION_TYPES.SELECT_SOL)}
            type="number"
            value={sol}
          />
        </div>
        <div className="c-InfoFilter__param">
          <div>Select Cam: </div>
          <select
            className="c-InfoFilter__select"
            onChange={addCameraFilter}
            value={cam}
          >
            <option value='all'>All</option>
            {validRover && roverCams[rover].map((camName: string) => {
              return (
                      <option
                        key={camName}
                        value={camName}
                      >
                        {camName}
                      </option>
                    )
            })}
          </select>
        </div>
      </div>
      <div className="c-InfoFilter__param c-InfoFilter__param--last">
        <div>Select Rover:</div>
        <Button
          func={selectRover}
          value={'curiosity'}
        >
          Curiosity
        </Button>
        <Button
          func={selectRover}
          value={'opportunity'}
        >
          Opportunity
        </Button>
        <Button
          func={selectRover}
          value={'spirit'}
        >
          Spirit
        </Button>
      </div>
      <Button
        func={fetchApi}
        value={[sol, rover, cam]}
      >
        Search
      </Button>
    </div>
  )
}

export default InfoFilter;
