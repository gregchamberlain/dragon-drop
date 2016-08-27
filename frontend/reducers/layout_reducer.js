import * as ACTIONS from '../actions/layout_actions.js';

const defaultState = {
  current: [],
  all: []
};

const layout = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_LAYOUT:
      return Object.assign({}, state, {current: action.layout});
    case ACTIONS.RECEIVE_LAYOUT:
      return Object.assign({}, state, {all: state.all.concat(action.layout)});
    case ACTIONS.RECEIVE_LAYOUTS:
      return Object.assign({}, state, {all: action.layouts});
    default:
      return state;
  }
};

export default layout;
