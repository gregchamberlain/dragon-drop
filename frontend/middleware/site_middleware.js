import { receiveEntity, removeEntity } from '../actions/entity_actions.js';
import * as ACTIONS from '../actions/site_actions.js';
import * as API from '../util/site_api.js';
import { arrayOfSites, site } from '../actions/schema.js';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux';
import { call } from '../util/api_utils.js';

const SiteMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case ACTIONS.REQUEST_SITES:
      call({
        dispatch,
        prev: getState().sites,
        request: API.fetchSites(),
        loading: ['sites', 'Fetching your websites...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, arrayOfSites)))
        }
      });
      return next(action);
    case ACTIONS.REQUEST_SITE:
      const prev = getState().sites[action.siteId];
      call({
        dispatch,
        prev: prev && prev.pages,
        request: API.fetchSite(action.siteId),
        loading: ['site', 'Fetching your website...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, site)));
        },
        error: err => {
          dispatch(push('/sites'))
        }
      });
      return next(action);
    case ACTIONS.CREATE_SITE:
      call({
        dispatch,
        request: API.createSite(action.site),
        loading: ['new-site', 'Creating Site...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, site)));
          dispatch(push(`/sites/${resp.identifier}/editor`));
          return 'Site successfully created!'
        }
      })
      return next(action);
    case ACTIONS.UPDATE_SITE:
      call({
        dispatch,
        request: API.updateSite(action.site, action.oldSite),
        loading: ['site', 'Updating Site...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, site)));
          return 'Site successfully updated';
        }
      });
      return next(action);
    case ACTIONS.DESTROY_SITE:
      call({
        dispatch,
        request: API.destroySite(action.site),
        loading: ['site', 'Destroying Site...'],
        success: resp => {
          dispatch(removeEntity(normalize(resp, site)));
          dispatch(push('/sites'));
          return 'Site successfully destroyed';
        }
      });
      return next(action);
    case ACTIONS.DEPLOY_SITE:
      call({
        dispatch,
        request: API.deploySite(action.site),
        loading: ['site', action.site.deployed ? 'Deploying Site...' : 'Deploying Site for the first time, this will take a second'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, site)));
          return 'Site Successfully Deployed';
        }
      })
      return next(state);
    default:
      return next(action);
  }
};

export default SiteMiddleware;
