import EditorReducer from './editor_reducer.js';
import LayoutReducer from './layout_reducer.js';
import ItemReducer from './item_reducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
  items: ItemReducer,
  layouts: LayoutReducer,
  editor: EditorReducer,
});
