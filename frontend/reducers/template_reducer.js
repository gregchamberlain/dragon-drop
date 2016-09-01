import { RECEIVE_ENTITY } from '../actions/entity_actions.js';
import { merge } from 'lodash';

const TemplateReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.templates);
    default:
      return state;
  }
};

export default TemplateReducer;
