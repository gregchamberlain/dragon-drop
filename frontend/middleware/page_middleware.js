import { REQUEST_PAGES, receivePages, CREATE_PAGE, UPDATE_PAGE } from '../actions/page_actions.js';
import { addPage } from '../actions/site_actions.js';
import { fetchPages, createPage, updatePage } from '../util/page_api.js';
import { normalize } from 'normalizr';
import { receiveEntity } from '../actions/entity_actions.js';
import { startLoading, stopLoading } from '../actions/loading_actions.js';
import { arrayOfPages, page } from '../actions/schema.js';
import { createNotification } from '../actions/notification_actions.js'
import * as API from '../util/api_utils.js';

const PageMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_PAGES:
      fetchPages(
        action.siteId,
        response => dispatch(receivePages(action.siteId, normalize(response, arrayOfPages)))
      );
      return next(action);
    case CREATE_PAGE:
      API.call({
        dispatch,
        request: createPage(action.siteId, action.page),
        loading: ['create-page', 'Creating your page...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, page)));
          dispatch(addPage(action.siteId, resp.id));
          return 'Page successfully created';
        }
      });
      return next(action);
    case UPDATE_PAGE:
      API.call({
        dispatch,
        request: updatePage(action.page),
        loading: ['update-page', 'Saving page...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, page)))
          return 'Page successfully updated';
        }
      });
      return next(action);
    default:
      return next(action);
  }
};

export default PageMiddleware;
