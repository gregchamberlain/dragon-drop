import { RECEIVE_ENTITY, REMOVE_ENTITY, CLEAR_ENTITIES } from '../actions/entity_actions.js';
import { ADD_PAGE } from '../actions/site_actions.js';
import { merge } from 'lodash';

const SiteReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge(state, action.resp.entities.sites);
    case REMOVE_ENTITY:
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
    default:
      return state;
  }
};

export default SiteReducer;
