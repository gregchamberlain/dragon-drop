import { RECEIVE_ENTITY } from '../actions/entity_actions';
import { merge } from 'lodash';

const ViewReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ENTITY:
      return merge({}, state, action.resp.entities.views)
    default:
      return state;
  }
};

export default ViewReducer;
