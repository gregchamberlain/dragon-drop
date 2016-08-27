import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import App from './components/App.jsx';

const store = configureStore();
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  render(
    <Provider store={store}>
        <App />
    </Provider>
  , root);
});
