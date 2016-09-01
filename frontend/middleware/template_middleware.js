import { REQUEST_TEMPLATES } from '../actions/template_actions.js';
import { fetchTemplates } from '../util/site_api.js';
import { receiveEntity } from '../actions/entity_actions.js';
import { arrayOfTemplates } from '../actions/schema.js';
import { createNotification } from '../actions/notification_actions.js';
import { normalize } from 'normalizr';

const TemplateMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_TEMPLATES:
      fetchTemplates(
        t => dispatch(receiveEntity(normalize(t, arrayOfTemplates))),
        err => err.responseJSON.forEach(e => {
          createNotification('error', e);
        })
      );
      return next(action);
    default:
      return next(action);
  }
};

export default TemplateMiddleware;
