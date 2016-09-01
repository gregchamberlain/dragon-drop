import { CREATE_NOTIFICATION, destroyNotification } from '../actions/notification_actions.js';

const NotificationMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case CREATE_NOTIFICATION:
      setTimeout(() => {
        dispatch(destroyNotification());
      }, 3000);
      return next(action);
    default:
      return next(action);
  }
};

export default NotificationMiddleware;
