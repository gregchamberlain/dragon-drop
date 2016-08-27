import * as ACTIONS from '../actions/layout_actions.js';

const layout = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_LAYOUT:
      return action.layout;
    default:
      return state;
  }
};

export default layout;
