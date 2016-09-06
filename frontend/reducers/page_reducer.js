import { RECEIVE_ENTITY, CLEAR_ENTITIES, REMOVE_ENTITY } from '../actions/entity_actions';
import { ADD_COMPONENT, REMOVE_COMPONENT } from '../actions/page_actions';
import { CREATE_COMPONENT, DESTROY_COMPONENT } from '../actions/component_actions.js'
import { merge } from 'lodash';
let nextState;
const PageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.pages);
    case CLEAR_ENTITIES:
      return {};
    case CREATE_COMPONENT:
      nextState = merge({}, state);
      nextState[action.pageId].components.push(action.component.tempId);
      return nextState;
    case DESTROY_COMPONENT:
      nextState = merge({}, state);
      nextState[action.pageId].components = nextState[action.pageId].components.filter(id => id !== action.component.tempId);
      return nextState;
    default:
      return state;
  }
};

export default PageReducer;
