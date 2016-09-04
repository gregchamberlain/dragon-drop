import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import Root from './components/root.jsx';
import { hashHistory } from 'react-router';
import * as ACTIONS from './actions/session_actions.js';
import { syncHistoryWithStore } from 'react-router-redux';

let wing = new Audio('/assets/wing.mp3');
let dragon = new Audio('/assets/dragon.mp3');
document.addEventListener('click', () => dragon.play());
document.addEventListener('mousemove', () => wing.play());

document.addEventListener('DOMContentLoaded', () => {

  let defaultState = {session: {currentUser: window.currentUser}};
  const store = window.store = configureStore(defaultState);
  const history = syncHistoryWithStore(hashHistory, store);
  const root = document.getElementById('root');

  render(
    <Root store={store} history={hashHistory}/>
  , root);
});
