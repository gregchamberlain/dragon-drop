import { RECEIVE_ENTITY, CLEAR_ENTITIES } from '../actions/entity_actions.js';
import { merge } from 'lodash';

const PageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.pages);
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default PageReducer;
