import * as ACTIONS from '../actions/session_actions.js';
import * as API from '../util/user_api.js';
import { push } from 'react-router-redux';
import { startLoading, stopLoading } from '../actions/loading_actions.js'
import { createNotification } from '../actions/notification_actions.js';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      dispatch(startLoading('currentUser', 'Logging in...'))
      API.login(
        action.user,
        user => {
          dispatch(createNotification('success', 'Successfully Logged In'));
          dispatch(ACTIONS.receiveCurrentUser(user));
          dispatch(stopLoading('currentUser'));
          dispatch(push('/sites'));
        },
        err => {
          dispatch(ACTIONS.receiveCurrentUser(null));
          err.responseJSON.forEach(m => {
            dispatch(createNotification('error', m));
            dispatch(stopLoading('currentUser'));
          });
        }
      );
      return next(action);
    case ACTIONS.LOGOUT:
      dispatch(startLoading('logout', 'Logging Out...'));
      API.logout(
        user => {
          dispatch(stopLoading('logout'));
          dispatch(ACTIONS.receiveCurrentUser(null));
          dispatch(push('/'));
          dispatch(createNotification('success', 'Successfully Logged Out'));
        },
        err => err.responseJSON.forEach(m => {
          dispatch(stopLoading('logout'));
          dispatch(ACTIONS.receiveCurrentUser(null));
          dispatch(createNotification('error', m));
        })
      );
      return next(action);
    case ACTIONS.SIGNUP:
      dispatch(startLoading('currentUser', 'Signing Up...'));
      API.signup(
        action.user,
        user => {
          dispatch(ACTIONS.receiveCurrentUser(user));
          dispatch(stopLoading('currentUser'));
          dispatch(push('/sites'));
          dispatch(createNotification('success', 'Successfully Signed Up'));
        },
        err => {
          dispatch(ACTIONS.receiveCurrentUser(null));
          err.responseJSON.forEach(m => {
            dispatch(createNotification('error', m));
            dispatch(stopLoading('currentUser'));
          });
        }
      );
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
