import { RECEIVE_ENTITY, REMOVE_ENTITY, CLEAR_ENTITIES } from '../actions/entity_actions.js';
import { ADD_PAGE } from '../actions/site_actions.js';
import { REMOVE_PAGE } from '../actions/page_actions';
import { merge } from 'lodash';
let nextState
const SiteReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge(state, action.resp.entities.sites);
    case REMOVE_ENTITY:
      if (!action.resp.entities.sites) return state;
      let nextState = merge({}, state);
      Object.keys(action.resp.entities.sites).forEach(id => {
        delete nextState[id];
      });
      return nextState;
    case CLEAR_ENTITIES:
      return {};
    case ADD_PAGE:
      let newState = merge({}, state);
      newState[action.siteId].pages.push(action.pageId);
      return newState;
    case REMOVE_PAGE:
      nextState = merge({}, state)
      const site = nextState[action.page.site_id];
      const pageId = `${site.identifier}${action.page.path}`;
      site.pages = site.pages.filter(id => id !== pageId);
      return nextState;
    default:
      return state;
  }
};

export default SiteReducer;
