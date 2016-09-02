import { merge } from 'lodash';
import { createNotification } from '../actions/notification_actions.js';
import { startLoading, stopLoading } from '../actions/loading_actions.js';

const ApiUtils = ({ dispatch, request, loadingKey, loadingMessage, successMessage, success, error }) => {

  const onSuccess = resp => {
    dispatch(stopLoading(loadingKey));
    success && success(resp);
    dispatch(createNotification(successMessage));
  };
  
  const onError = e => {
    dispatch(stopLoading(loadingKey));
    error && error(e);
    e.responseJSON && e.responseJSON.forEach(err => {
      dispatch(createNotification(err));
    });
  };

  dispatch(startLoading(loadingKey, loadingMessage));
  const req = merge(request, {success: onSuccess, error: onError});
  $.ajax(req)
}
