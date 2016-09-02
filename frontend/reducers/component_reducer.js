import { RECEIVE_ENTITY, CLEAR_ENTITIES, REMOVE_ENTITY } from '../actions/entity_actions';
import { merge } from 'lodash';

const ComponentReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.components);
    case REMOVE_ENTITY:
    if (!action.resp.entities.components) return state;
    let nextState = merge({}, state);
    Object.keys(action.resp.entities.components).forEach(id => {
      delete nextState[id];
    });
    return nextState;
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default ComponentReducer;
