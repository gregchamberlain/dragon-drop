import * as ACTIONS from '../actions/session_actions.js';
import { merge } from 'lodash';

const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_CURRENT_USER:
      console.log(action.user);
      return {currentUser: action.user, errors: []};
    case ACTIONS.LOGOUT:
      return {currentUser: null, errors: []};
    case ACTIONS.RECEIVE_ERRORS:
      return {currentUser: null, errors: action.errors};
    default:
      return state;
  }
};

export default SessionReducer;
