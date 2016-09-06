import { REQUEST_TEMPLATES, CLONE_TEMPLATE } from '../actions/template_actions.js';
import { fetchTemplates, cloneTemplate } from '../util/site_api.js';
import { call } from '../util/api_utils.js';
import { receiveEntity } from '../actions/entity_actions.js';
import { arrayOfTemplates, site } from '../actions/schema.js';
import { startLoading, stopLoading } from '../actions/loading_actions.js';
import { createNotification } from '../actions/notification_actions.js';
import { normalize } from 'normalizr';
import { push } from 'react-router-redux'

const TemplateMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_TEMPLATES:
      call({
        dispatch,
        prev: getState().templates,
        preloaded: Object.keys(getState().templates).length,
        request: fetchTemplates(),
        loading: ['templates', 'Loading in Templates...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, arrayOfTemplates)))
        }
      });
      return next(action);
    case CLONE_TEMPLATE:
      call({
        dispatch,
        request: cloneTemplate(action.template, action.site),
        loading: ['create-site', 'Creating site...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, site)));
          dispatch(push(`/sites/${resp.identifier}/editor`));
          return 'Site successfully created from template!'
        }
      })
      return next(action);
    default:
      return next(action);
  }
};

export default TemplateMiddleware;
