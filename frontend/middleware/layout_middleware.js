import * as ACTIONS from '../actions/layout_actions.js';
import * as API from '../util/layout_api.js';
import * as UTILS from '../util/';

const LayoutMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case ACTIONS.SAVE_LAYOUT:
      let items = getState().items;
      let layout = getState().layouts.current;
      // Merge object with initial layouts to obtain their newly defined ones
      let newItems = layout.map(item => Object.assign({}, items[item.i], item));
      API.saveLayout(
        {name: action.name, data: JSON.stringify(newItems)},
        (data) => dispatch(ACTIONS.receiveLayout(UTILS.parseLayout(data)))
      );
      return next(action);
    case ACTIONS.REQUEST_LAYOUTS:
      API.fetchLayouts(los => {
        const layouts = los.map(lo => UTILS.parseLayout(lo));
        dispatch(ACTIONS.receiveLayouts(layouts));
      });
      return next(action);
    default:
      return next(action);
  }
};

export default LayoutMiddleware;
