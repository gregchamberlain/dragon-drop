import { REQUEST_TEMPLATES } from '../actions/template_actions.js';
import { fetchTemplates } from '../util/site_api.js';
import { call } from '../util/api_utils.js';
import { receiveEntity } from '../actions/entity_actions.js';
import { arrayOfTemplates } from '../actions/schema.js';
import { startLoading, stopLoading } from '../actions/loading_actions.js';
import { createNotification } from '../actions/notification_actions.js';
import { normalize } from 'normalizr';

const TemplateMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_TEMPLATES:
      call({
        dispatch,
        prev: getState().templates,
        request: fetchTemplates(),
        loading: ['templates', 'Loading in Templates...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, arrayOfTemplates)))
        }
      });
      return next(action);
    default:
      return next(action);
  }
};

export default TemplateMiddleware;
