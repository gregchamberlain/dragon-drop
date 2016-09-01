import * as ACTIONS from '../actions/session_actions.js';
import * as API from '../util/user_api.js';
import { push } from 'react-router-redux';
import { createNotification } from '../actions/notification_actions.js';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      API.login(
        action.user,
        user => {
          dispatch(ACTIONS.receiveCurrentUser(user));
          dispatch(push('/sites'));
        },
        err => {
          dispatch(ACTIONS.receiveCurrentUser(null));
          err.responseJSON.forEach(m => {
            dispatch(createNotification('error', m));
          });
        }
      );
      return next(action);
    case ACTIONS.LOGOUT:
      API.logout(
        user => {
          dispatch(ACTIONS.receiveCurrentUser(null));
          dispatch(push('/'));
        },
        err => err.responseJSON.forEach(m => {
          dispatch(ACTIONS.receiveCurrentUser(null));
          dispatch(createNotification('error', m));
        })
      );
      return next(action);
    case ACTIONS.SIGNUP:
      API.signup(
        action.user,
        user => {
          dispatch(ACTIONS.receiveCurrentUser(user));
          dispatch(push('/sites'));
        },
        err => {
          dispatch(ACTIONS.receiveCurrentUser(null));
          err.responseJSON.forEach(m => {
            dispatch(createNotification('error', m));
          });
        }
      );
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
