import * as ACTIONS from '../actions/session_actions.js';
import { clearEntities } from '../actions/entity_actions.js';
import * as API from '../util/user_api.js';
import { push } from 'react-router-redux';
import { call } from '../util/api_utils.js';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      call({
        dispatch,
        request: API.login(action.user),
        loading: ['currentUser', 'Logging in...'],
        success: resp => {
          dispatch(ACTIONS.receiveCurrentUser(resp));
          dispatch(push('/sites'));
          return 'Successfully Logged In';
        }
      })
      // May need dispatch(ACTIONS.receiveCurrentUser(null)); in error handler
      return next(action);
    case ACTIONS.LOGOUT:
      call({
        dispatch,
        request: API.logout(),
        loading: ['logout', 'Logging Out...'],
        success: resp => {
          dispatch(ACTIONS.receiveCurrentUser(null));
          dispatch(clearEntities());
          dispatch(push('/'));
          return 'Successfully Logged Out';
        }
      });
      return next(action);
    case ACTIONS.SIGNUP:
      call({
        dispatch,
        request: API.signup(action.user),
        loading: ['currentUser', 'Signing Up...'],
        success: resp => {
          dispatch(ACTIONS.receiveCurrentUser(resp));
          dispatch(push('/sites'));
          return 'Successfully Signed Up'
        }
      });
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
