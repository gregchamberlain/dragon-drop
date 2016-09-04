import LayoutMiddleware from './layout_middleware';
import SiteMiddleware from './site_middleware';
import PageMiddleware from './page_middleware';
import SessionMiddleware from './session_middleware';
import NotificationMiddleware from './notification_middleware';
import TemplateMiddleware from './template_middleware';
import ComponentMiddleware from './component_middleware';
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
