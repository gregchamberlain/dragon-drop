import { requestSites, requestSite } from '../actions/site_actions';
import { requestTemplates } from '../actions/template_actions';
import { requestPage } from '../actions/page_actions'

export const fetchSites = store => {
  return () => store.dispatch(requestSites());
};

export const fetchSite = (store) => {
  return state => store.dispatch(requestSite(state.params.siteId));
};

export const fetchTemplates = store => () => {
  store.dispatch(requestTemplates());
};

export const fetchPage = (store) => state => {
  store.dispatch(requestPage(state.params.pageId))
};

export const parsePageId = params => (
  `${params.siteId}/${params.pageId === undefined ? "" : params.pageId}`
);
