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
        response => {
          dispatch(ACTIONS.receiveSite(normalize(response, site)));
        }
      );
      return next(action);
    case ACTIONS.CREATE_SITE:
      API.createSite(
        action.site,
        response => dispatch(ACTIONS.receiveSite(normalize(response, site)))
      );
      return next(action);
    default:
      return next(action);
  }
};

export default SiteMiddleware;
