import LayoutMiddleware from './layout_middleware.js';
import SiteMiddleware from './site_middleware.js';
import PageMiddleware from './page_middleware.js';
import SessionMiddleware from './session_middleware.js';
import NotificationMiddleware from './notification_middleware.js';
import TemplateMiddleware from './template_middleware.js';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';

import { applyMiddleware } from 'redux';

export default applyMiddleware(
  LayoutMiddleware,
  SiteMiddleware,
  PageMiddleware,
  SessionMiddleware,
  NotificationMiddleware,
  TemplateMiddleware,
  routerMiddleware(hashHistory)
);
