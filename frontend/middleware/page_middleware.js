import { REQUEST_PAGES, receivePages,
  CREATE_PAGE, UPDATE_PAGE, REQUEST_PAGE } from '../actions/page_actions.js';
import { addPage } from '../actions/site_actions.js';
import { fetchPages, createPage, updatePage, fetchPage } from '../util/page_api.js';
import { normalize } from 'normalizr';
import { receiveEntity } from '../actions/entity_actions.js';
import { startLoading, stopLoading } from '../actions/loading_actions.js';
import { arrayOfPages, page } from '../actions/schema.js';
import { createNotification } from '../actions/notification_actions.js'
import { call } from '../util/api_utils.js';

const PageMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_PAGES:
      fetchPages(
        action.siteId,
        response => dispatch(receivePages(action.siteId, normalize(response, arrayOfPages)))
      );
      return next(action);
    case REQUEST_PAGE:
      const prevPage = getState().pages[action.pageId]
      call({
        stale: !(prevPage && prevPage.components),
        dispatch,
        request: fetchPage(action.pageId),
        loading: ['page', 'Fetching Page...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, page)))
        }
      });
      return next(action);
    case CREATE_PAGE:
      call({
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
      call({
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
