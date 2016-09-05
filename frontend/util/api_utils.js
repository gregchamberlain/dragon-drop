import { merge } from 'lodash';
import { createNotification } from '../actions/notification_actions.js';
import { startLoading, stopLoading } from '../actions/loading_actions.js';

export const call = ({ dispatch, request, loading, success, error, prev, preloaded }) => {
  const onSuccess = resp => {
    const successMessage = success && success(resp);
    dispatch(stopLoading(loading[0]));
    if (successMessage) dispatch(createNotification('success', successMessage));
  };

  const onError = e => {
    dispatch(stopLoading(loading[0]));
    e.responseJSON && e.responseJSON.forEach(err => {
      dispatch(createNotification('error', err));
    });
    error && error(e);
  };


  // Only set loading state if the object has not been previously fetched

  if (!preloaded) {
    !(prev && (Array.isArray(prev) || Object.keys(prev).length)) && dispatch(startLoading(...loading));
    const req = merge(request, {success: onSuccess, error: onError});
    $.ajax(req);
  }

}
