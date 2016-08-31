import * as ACTIONS from '../actions/session_actions.js';
import * as API from '../util/user_api.js';
import { push } from 'react-router-redux';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      API.login(
        action.user,
        user => {
          dispatch(ACTIONS.receiveCurrentUser(user));
          dispatch(push('/sites'));
        },
        err => dispatch(ACTIONS.receiveErrors(err.responseJSON))
      );
      return next(action);
    case ACTIONS.LOGOUT:
      API.logout(
        user => {
          dispatch(ACTIONS.receiveCurrentUser(null));
          dispatch(push('/'));
        },
        err => dispatch(ACTIONS.receiveErrors(err.responseJSON))
      );
      return next(action);
    case ACTIONS.SIGNUP:
      API.signup(
        action.user,
        user => {
          dispatch(ACTIONS.receiveCurrentUser(user));
          dispatch(push('/sites'));
        },
        err => dispatch(ACTIONS.receiveErrors(err.responseJSON))
      );
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
