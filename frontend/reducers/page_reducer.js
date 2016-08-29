import { RECEIVE_PAGES } from '../actions/page_actions.js';
import { RECEIVE_SITE } from '../actions/site_actions.js';

const PageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PAGES:
      return {...state, ...action.response.entities.pages}
    case RECEIVE_SITE:
      console.log(action.response);
      return {...state, ...action.response.entities.pages}
    default:
      return state;
  }
};

export default PageReducer;
