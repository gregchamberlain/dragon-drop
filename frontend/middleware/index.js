import LayoutMiddleware from './layout_middleware.js';
import SiteMiddleware from './site_middleware.js';
import PageMiddleware from './page_middleware.js';
import { applyMiddleware } from 'redux';

export default applyMiddleware(
  LayoutMiddleware,
  SiteMiddleware,
  PageMiddleware
);
