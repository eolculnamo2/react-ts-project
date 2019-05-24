import initialState from './initialState';
import Action from 'constants/interfaces/Action';
import actions from './actions';
import MarsRoverState from 'constants/interfaces/MarsRoverState';

function reducer(state: MarsRoverState, action: Action): MarsRoverState {
  return actions[action.type](state, action);
}

export default reducer;
