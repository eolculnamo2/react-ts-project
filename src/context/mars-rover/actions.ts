import { Action } from "constants/interfaces/Action";

export const ACTION_TYPES = {
  SELECT_ROVER: 'SELECT_ROVER',
  SELECT_SOL: 'SELECT_SOL',
};

const actions = {
  [ACTION_TYPES.SELECT_ROVER]: (state: Object, action: Action) => {
    return { ...state, rover: action.payload  };
  },
  [ACTION_TYPES.SELECT_SOL]: (state: Object, action: Action) => {
    return {...state, sol: action.payload  };
  },
};

export default actions;