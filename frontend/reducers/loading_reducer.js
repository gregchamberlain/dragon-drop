import { START_LOADING, STOP_LOADING } from '../actions/loading_actions.js';
import { merge } from 'lodash';

const LoadingReducer = (state = {}, action) => {
  switch(action.type) {
    case START_LOADING:
      console.log('Loading ', action.key);
      return merge({}, state, {[action.key]: action.message});
    case STOP_LOADING:
      console.log(action.key, 'loaded!');
      let newState = merge({}, state);
      delete newState[action.key];
      return newState;
    default:
      return state;
  }
};

export default LoadingReducer;
