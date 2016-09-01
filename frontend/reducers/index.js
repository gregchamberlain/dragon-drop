import EditorReducer from './editor_reducer.js';
import LayoutReducer from './layout_reducer.js';
import ItemReducer from './item_reducer.js';
import SiteReducer from './site_reducer.js';
import PageReducer from './page_reducer.js';
import SessionReducer from './session_reducer.js';
import TemplateReducer from './template_reducer.js';
import NotificationReducer from './notification_reducer.js';
import LoadingReducer from './loading_reducer.js';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  items: ItemReducer,
  layouts: LayoutReducer,
  editor: EditorReducer,
  sites: SiteReducer,
  pages: PageReducer,
  session: SessionReducer,
  routing: routerReducer,
  templates: TemplateReducer,
  loading: LoadingReducer,
  notifications: NotificationReducer
});
