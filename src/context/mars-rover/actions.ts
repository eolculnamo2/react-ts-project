import Action from "constants/interfaces/Action";
import MarsRoverState from "constants/interfaces/MarsRoverState";

export const ACTION_TYPES = {
  SELECT_ROVER: 'SELECT_ROVER',
  SELECT_SOL: 'SELECT_SOL',
  UPDATE_API_DATA: 'UPDATE_API_DATA',
};

const actions = {
  [ACTION_TYPES.SELECT_ROVER]: (state: MarsRoverState, action: Action): MarsRoverState => {
    return { ...state, rover: action.payload  };
  },
  [ACTION_TYPES.SELECT_SOL]: (state: MarsRoverState, action: Action): MarsRoverState => {
    return {...state, sol: action.payload  };
  },
  [ACTION_TYPES.UPDATE_API_DATA]: (state: MarsRoverState, action: Action): MarsRoverState => {
    return {...state, apiData: action.payload  };
  },
};

export default actions;