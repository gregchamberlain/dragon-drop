import * as EDITOR_ACTIONS from '../actions/editor_actions.js';
import * as ITEM_ACTIONS from '../actions/item_actions.js';
import { DESTROY_COMPONENT } from '../actions/component_actions';
import { merge } from 'lodash';

const EditorReducer = (state = { current: false}, action) => {
  switch (action.type) {
    case EDITOR_ACTIONS.OPEN_EDITOR:
      return merge({}, state, {current: action.i});
    case EDITOR_ACTIONS.CLOSE_EDITOR:
      return merge({}, state, {current: false});
    case DESTROY_COMPONENT:
      if (action.component.layout.i === state.current)
        return merge({}, state, {current: false});
      return state;
    case ITEM_ACTIONS.RECEIVE_ITEMS:
      return false;
    default:
      return state;
  }
};

export default EditorReducer;
