import { requestSites, requestSite } from '../actions/site_actions.js';
import { requestTemplates } from '../actions/template_actions.js';

export const fetchSites = store => {
  return () => store.dispatch(requestSites());
};

export const fetchSite = (store) => {
  return state => store.dispatch(requestSite(state.params.siteId));
};

export const fetchTemplates = store => () => {
  store.dispatch(requestTemplates());
};
