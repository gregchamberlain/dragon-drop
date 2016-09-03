import { RECEIVE_ENTITY, CLEAR_ENTITIES, REMOVE_ENTITY } from '../actions/entity_actions';
import { ADD_COMPONENT, REMOVE_COMPONENT } from '../actions/page_actions';
import { merge } from 'lodash';
let nextState;
const PageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.pages);
    case CLEAR_ENTITIES:
      return {};
    case ADD_COMPONENT:
      nextState = merge({}, state);
      nextState[action.pageId].components.push(action.componentId);
      return nextState;
    case REMOVE_COMPONENT:
      nextState = merge({}, state);
      nextState[action.pageId].components = nextState[action.pageId].components.filter(id => id !== parseInt(action.componentId));
      return nextState;
    default:
      return state;
  }
};

export default PageReducer;
