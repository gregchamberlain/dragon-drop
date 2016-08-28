import * as ACTIONS from '../actions/site_actions.js';
import * as API from '../util/site_api.js';
import { arrayOfSites, site } from '../actions/schema.js';
import { normalize } from 'normalizr';

const SiteMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case ACTIONS.REQUEST_SITES:
      API.fetchSites((sites) => {
        dispatch(ACTIONS.receiveSites(normalize(sites, arrayOfSites)));
      });
      return next(action);
    case ACTIONS.REQUEST_SITE:
      API.fetchSite(
        action.siteId,
        response => console.log(normalize(response, site).entities.sites[1].pages)
      );
      return next(action);
    default:
      return next(action);
  }
};

export default SiteMiddleware;
