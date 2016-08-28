import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import Root from './components/root.jsx';

const store = configureStore();
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  render(
    <Root store={store} />
  , root);
});
