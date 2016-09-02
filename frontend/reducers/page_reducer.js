import { RECEIVE_ENTITY, CLEAR_ENTITIES } from '../actions/entity_actions';
import { ADD_COMPONENT, REMOVE_COMPONENT } from '../actions/page_actions';
import { merge } from 'lodash';

const PageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.pages);
    case CLEAR_ENTITIES:
      return {};
    case ADD_COMPONENT:
      let newState = merge({}, state);
      newState[action.pageId].components.push(action.componentId);
      return newState;
    case REMOVE_COMPONENT:
      let nextState = merge({}, state);
      nextState[action.pageId].components = nextState[action.pageId].components.filter(c => {
        return c !== action.componentId;
      });
      return nextState;
    default:
      return state;
  }
};

export default PageReducer;
