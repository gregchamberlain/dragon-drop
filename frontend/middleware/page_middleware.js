import { REQUEST_PAGES, receivePages, CREATE_PAGE } from '../actions/page_actions.js';
import { addPage } from '../actions/site_actions.js';
import { fetchPages, createPage } from '../util/page_api.js';
import { normalize } from 'normalizr';
import { receiveEntity } from '../actions/entity_actions.js';
import { startLoading, stopLoading } from '../actions/loading_actions.js';
import { arrayOfPages, page } from '../actions/schema.js';

const PageMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_PAGES:
      fetchPages(
        action.siteId,
        response => dispatch(receivePages(action.siteId, normalize(response, arrayOfPages)))
      );
      return next(action);
    case CREATE_PAGE:
      dispatch(startLoading('create-page', 'Creating your page...'))
      createPage(
        action.siteId,
        action.page,
        resp => {
          dispatch(stopLoading('create-page'));
          dispatch(receiveEntity(normalize(resp, page)));
          dispatch(addPage(action.siteId, resp.id));
          console.log(resp);
        },
        err => {
          dispatch(stopLoading('create-page'));
          console.log(err);
        }
      )
      return next(action);
    default:
      return next(action);
  }
};

export default PageMiddleware;
