import { REQUEST_PAGES, receivePages,
  CREATE_PAGE, UPDATE_PAGE, REQUEST_PAGE,
  SAVE_PAGE, removePage, DESTROY_PAGE } from '../actions/page_actions.js';
import { addPage } from '../actions/site_actions.js';
import { fetchPages, createPage, updatePage, fetchPage, destroyPage } from '../util/page_api.js';
import { normalize } from 'normalizr';
import { receiveEntity } from '../actions/entity_actions.js';
import { startLoading, stopLoading } from '../actions/loading_actions.js';
import { arrayOfPages, page } from '../actions/schema.js';
import { createNotification } from '../actions/notification_actions.js'
import { call } from '../util/api_utils.js';
import { stringify } from '../util';
import { push } from 'react-router-redux';
import { merge } from 'lodash';

const PageMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_PAGES:
      fetchPages(
        action.siteId,
        response => dispatch(receivePages(action.siteId, normalize(response, arrayOfPages)))
      );
      return next(action);
    case REQUEST_PAGE:
      const prevPage = getState().pages[action.pageId];
      call({
        preloaded: prevPage && prevPage.components,
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
          dispatch(addPage(action.siteId, `${action.siteId}${resp.path}`));
          dispatch(push(`/sites/${action.siteId}/editor${resp.path}`));
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
          dispatch(receiveEntity(normalize(resp, page)));
          if (action.oldPage.path !== resp.path) {
            dispatch(addPage(resp.site_id, `${resp.site_id}${resp.path}`));
            dispatch(push(`/sites/${resp.site_id}/editor${resp.path}`));
            dispatch(removePage(action.oldPage));
          }
          return 'Page successfully updated';
        },
      });
      return next(action);
    case SAVE_PAGE:
      let p = merge({}, getState().pages[action.pageId]);
      p.components_attributes = stringify(p.components.map(id => merge({}, getState().components[id])))
      delete p.components
      call({
        dispatch,
        request: updatePage(p),
        loading: ['page', 'Saving Page...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, page)))
          if (action.preview) dispatch(push(action.preview));
          return `${p.name} Page saved!`
        },
        error: e => {
          if (e.status === 403) dispatch(push('/sites'));
        }
      })
      return next(action);
    case DESTROY_PAGE:
      call({
        dispatch,
        request: destroyPage(action.page),
        loading: ['update-page', 'Destroying Page...'],
        success: resp => {
          dispatch(push(`/sites/${resp.site_id}/editor`));
          dispatch(removePage(resp));
          return `Successfully Destroyed ${resp.name} Page`;
        }
      })
      return next(action);
    default:
      return next(action);
  }
};

export default PageMiddleware;
