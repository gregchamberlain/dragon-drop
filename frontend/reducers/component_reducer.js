import { RECEIVE_ENTITY, CLEAR_ENTITIES, REMOVE_ENTITY } from '../actions/entity_actions';
import { UPDATE_LAYOUT, UPDATE_PROPS,
  CREATE_COMPONENT, DESTROY_COMPONENT } from '../actions/component_actions';
import { merge } from 'lodash';
import { parse } from '../util';

let nextState;
const ComponentReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, parse(action.resp.entities.components));
    case REMOVE_ENTITY:
      if (!action.resp.entities.components) return state;
      nextState = merge({}, state);
      Object.keys(action.resp.entities.components).forEach(id => {
        delete nextState[id];
      });
      return nextState;
    case UPDATE_LAYOUT:
      nextState = merge({}, state);
      action.layout.forEach(l => { nextState[l.i].layout = l });
      return nextState;
    case UPDATE_PROPS:
      nextState = merge({}, state);
      nextState[action.id || action.tempId].props = action.props
      return nextState;
    case CREATE_COMPONENT:
      return merge({}, state, {[action.component.tempId]: action.component});
    case DESTROY_COMPONENT:
      nextState = merge({}, state);
      if (action.component.id) {
        nextState[action.component.id]._destroy = true;
      } else {
        delete nextState[action.component.tempId]
      }
      return nextState;
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default ComponentReducer;
