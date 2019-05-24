import initialState from './initialState';
import { Action } from 'constants/interfaces/Action';
import actions from './actions';

const reducer = (state=initialState, action: Action) => actions[action.type](state, action);

export default reducer;
