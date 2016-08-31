import * as ACTIONS from '../actions/session_actions.js';
import { merge } from 'lodash';

const SessionReducer = (state = {currentUser: null, errors: [], loading: false}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_CURRENT_USER:
      return {currentUser: action.user, errors: [], loading: false};
    case ACTIONS.RECEIVE_ERRORS:
      return {currentUser: null, errors: action.errors, loading: false};
    case ACTIONS.LOGIN:
      return merge({}, state, {loading: true});
    case ACTIONS.SIGNUP:
      return merge({}, state, {loading: true});
    case ACTIONS.LOGOUT:
      return merge({}, state, {loading: true});
    default:
      return state;
  }
};

export default SessionReducer;
