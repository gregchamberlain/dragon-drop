export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoading = (key, message) => ({
  type: START_LOADING,
  key,
  message
});

export const stopLoading = key => ({
  type: STOP_LOADING,
  key
});
