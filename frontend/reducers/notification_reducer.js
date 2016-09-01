import { CREATE_NOTIFICATION, DESTROY_NOTIFICATION } from '../actions/notification_actions.js';

let count = 0;
const NotificationReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_NOTIFICATION:
      return state.concat({id: count++, type: action.status, message: action.message});
    case DESTROY_NOTIFICATION:
      return state.slice(1);
    default:
      return state;
  }
};

export default NotificationReducer;
