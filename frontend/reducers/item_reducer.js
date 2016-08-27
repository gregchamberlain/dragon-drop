import * as ACTIONS from '../actions/item_actions.js';
import _ from 'lodash';
import Catalog from '../catalog';

const items = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
     const i = 'i' + Math.floor(Math.random() * 10000); // Random id
     return Object.assign({}, state, {[i]: {
       component: action.component,
       i: i,
       x: 0,
       y: 10000, // puts it at the bottom
       w: 4,
       h: 6,
       props: Catalog[action.component].defaultProps
     }});
    case ACTIONS.UPDATE_PROPS:
      let item = Object.assign({}, state[action.i]);
      item.props = action.props;
      return Object.assign({}, state, { [action.i]: item });
    case ACTIONS.REMOVE_ITEM:
      let newState = Object.assign({}, state);
      delete newState[action.i];
      return newState;
    case ACTIONS.RECEIVE_ITEMS:
      let newItems = {};
      action.items.forEach(newItem => (newItems[newItem.i] = newItem));
      return newItems;
    default:
      return state;
  }
};

export default items;
