import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import Root from './components/root.jsx';
import { hashHistory } from 'react-router';
import * as ACTIONS from './actions/session_actions.js';
import { syncHistoryWithStore } from 'react-router-redux';


document.addEventListener('DOMContentLoaded', () => {

  let defaultState = {session: {currentUser: window.currentUser, errors: [], loading: false}};
  const store = window.store = configureStore(defaultState);
  const history = syncHistoryWithStore(hashHistory, store);
  const root = document.getElementById('root');
  
  render(
    <Root store={store} history={history}/>
  , root);
});
