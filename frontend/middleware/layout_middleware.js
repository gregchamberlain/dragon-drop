import * as ACTIONS from '../actions/layout_actions.js';

const LayoutMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case ACTIONS.SAVE_LAYOUT:
      let items = getState().items;
      let layout = getState().layout;
      let newItems = layout.map(item => Object.assign({}, items[item.i], item));
      console.log(newItems);
      return next(action);
    default:
      return next(action);
  }
};

export default LayoutMiddleware;
