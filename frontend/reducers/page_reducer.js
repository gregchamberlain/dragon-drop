import { RECEIVE_PAGES } from '../actions/page_actions.js';
import { RECEIVE_SITE } from '../actions/site_actions.js';
import { RECEIVE_ENTITY } from '../actions/entity_actions.js';
import { merge } from 'lodash';

const PageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.pages);
    default:
      return state;
  }
};

export default PageReducer;
