import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import Root from './components/root.jsx';
import * as ACTIONS from './actions/session_actions.js';
import { syncHistoryWithStore } from 'react-router-redux';

let defaultState = {session: {currentUser: window.currentUser, errors: []}};
const store = configureStore(defaultState);
window.store = store;
window.ACTIONS = ACTIONS;
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  render(
    <Root store={store} />
  , root);
});
