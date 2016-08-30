import * as ACTIONS from '../actions/session_actions.js';
import * as API from '../util/user_api.js';
const SessionMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      API.login(
        action.user,
        user => dispatch(ACTIONS.receiveCurrentUser(user)),
        err => dispatch(ACTIONS.receiveErrors(err.responseJSON))
      );
      return next(action);
    case ACTIONS.LOGOUT:
      API.logout(
        user => next(action),
        err => {
          next(action);
          dispatch(ACTIONS.receiveErrors(err.responseJSON));
        }
      );
      break;
    case ACTIONS.SIGNUP:
      API.signup(
        action.user,
        user => dispatch(ACTIONS.receiveCurrentUser(user)),
        err => dispatch(ACTIONS.receiveErrors(err.responseJSON))
      );
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
