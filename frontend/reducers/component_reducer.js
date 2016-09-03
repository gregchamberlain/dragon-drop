import { RECEIVE_ENTITY, CLEAR_ENTITIES, REMOVE_ENTITY } from '../actions/entity_actions';
import { UPDATE_LAYOUT } from '../actions/component_actions';
import { merge } from 'lodash';

let nextState;
const ComponentReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.components);
    case REMOVE_ENTITY:
      if (!action.resp.entities.components) return state;
      nextState = merge({}, state);
      Object.keys(action.resp.entities.components).forEach(id => {
        delete nextState[id];
      });
      return nextState;
    case UPDATE_LAYOUT:
      nextState = merge({}, state);
      nextState[parseInt(action.layout.i)].layout = action.layout
      return nextState;
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default ComponentReducer;
