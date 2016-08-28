import { REQUEST_PAGES, receivePages } from '../actions/page_actions.js';
import { fetchPages } from '../util/page_api.js';
import { normalize } from 'normalizr';
import { arrayOfPages } from '../actions/schema.js';

const PageMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_PAGES:
      fetchPages(
        action.siteId,
        response => dispatch(receivePages(action.siteId, normalize(response, arrayOfPages)))
      );
      return next(action);
    default:
      return next(action);
  }
};

export default PageMiddleware;
