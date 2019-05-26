import Action from "constants/interfaces/Action";
import MarsRoverState from "constants/interfaces/MarsRoverState";

export const ACTION_TYPES = {
  SELECT_ROVER: 'SELECT_ROVER',
  SELECT_SOL: 'SELECT_SOL',
  UPDATE_API_DATA: 'UPDATE_API_DATA',
  UPDATE_VALID_ROVER: 'UPDATE_VALID_ROVER',
  UPDATE_CAM: 'UPDATE_CAM',
};

const actions = {
  [ACTION_TYPES.SELECT_ROVER]: (state: MarsRoverState, action: Action): MarsRoverState => {
    return { ...state, rover: action.payload};
  },
  [ACTION_TYPES.SELECT_SOL]: (state: MarsRoverState, action: Action): MarsRoverState => {
    return {...state, sol: action.payload};
  },
  [ACTION_TYPES.UPDATE_API_DATA]: (state: MarsRoverState, action: Action): MarsRoverState => {
    return {...state, apiData: action.payload};
  },
  [ACTION_TYPES.UPDATE_VALID_ROVER]: (state: MarsRoverState, action: Action): MarsRoverState => {
    return {...state, validRover: action.payload};
  },
  [ACTION_TYPES.UPDATE_CAM]: (state: MarsRoverState, action: Action): MarsRoverState => {
    return {...state, cam: action.payload};
  },
};

export default actions;