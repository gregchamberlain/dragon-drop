export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const DESTROY_NOTIFICATION = 'DESTROY_NOTIFICATION';

export const createNotification = (status, message) => ({
  type: CREATE_NOTIFICATION,
  status,
  message
});

export const destroyNotification = () => ({
  type: DESTROY_NOTIFICATION
});
