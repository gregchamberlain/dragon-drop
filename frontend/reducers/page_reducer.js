import { RECEIVE_PAGES } from '../actions/page_actions.js';

const PageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PAGES:
      return {...state, [action.siteId]: action.response.entities.pages}
    default:
      return state;
  }
};

export default PageReducer;
