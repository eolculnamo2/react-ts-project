import MarsRoverState from "constants/interfaces/MarsRoverState";
import { Action } from "constants/interfaces/Action";

export const ACTION_TYPES = {
  SELECT_ROVER: 'SELECT_ROVER',
  SELECT_SOL: 'SELECT_SOL',
};

const actions = {
  [ACTION_TYPES.SELECT_ROVER]: (state: Object, action: Action) => {
    const teams = { ...state, rover: action.payload  };
    return {
      ...state,
      teams,
    };
  },
  [ACTION_TYPES.SELECT_SOL]: (state: Object, action: Action) => {
    const teams = { ...state, sol: action.payload  };
    return {
      ...state,
      teams,
    };
  },
};

export default actions;