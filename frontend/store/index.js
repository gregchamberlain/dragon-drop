import { createStore } from 'redux';
import RootReducer from '../reducers';
import RootMiddleware from '../middleware';

const configureStore = () => {
  return createStore(RootReducer, RootMiddleware);
};

export default configureStore;
