import * as EDITOR_ACTIONS from '../actions/editor_actions.js';
import * as ITEM_ACTIONS from '../actions/item_actions.js';
import { DESTROY_COMPONENT } from '../actions/component_actions';

const EditorReducer = (state = false, action) => {
  switch (action.type) {
    case EDITOR_ACTIONS.OPEN_EDITOR:
      return action.i;
    case EDITOR_ACTIONS.CLOSE_EDITOR:
      return false;
    case DESTROY_COMPONENT:
      if (action.component.layout.i === state) return false;
      return state;
    case ITEM_ACTIONS.RECEIVE_ITEMS:
      return false;
    default:
      return state;
  }
};

export default EditorReducer;
