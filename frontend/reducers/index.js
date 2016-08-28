import EditorReducer from './editor_reducer.js';
import LayoutReducer from './layout_reducer.js';
import ItemReducer from './item_reducer.js';
import SiteReducer from './site_reducer.js';
import PageReducer from './page_reducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
  items: ItemReducer,
  layouts: LayoutReducer,
  editor: EditorReducer,
  sites: SiteReducer,
  pages: PageReducer,
});
