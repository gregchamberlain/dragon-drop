import * as ACTIONS from '../actions/site_actions.js';

const SiteReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SITES || ACTIONS.RECEIVE_SITE:
      return {...state, ...action.response.entities.sites};
    default:
      return state;
  }
};

export default SiteReducer;
