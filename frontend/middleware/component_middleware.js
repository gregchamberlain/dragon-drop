import { CREATE_COMPONENT, DESTROY_COMPONENT } from '../actions/component_actions';
import { call } from '../util/api_utils.js';
import { receiveEntity, removeEntity } from '../actions/entity_actions';
import { addComponent, removeComponent } from '../actions/page_actions';
import { createComponent, destroyComponent } from '../util/component_api';
import { normalize } from 'normalizr';
import { component } from '../actions/schema';

const ComponentMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case CREATE_COMPONENT:
      call({
        dispatch,
        request: createComponent(action.pageId, action.component),
        loading: ['component', 'Creating component...'],
        success: resp => {
          dispatch(receiveEntity(normalize(resp, component)));
          dispatch(addComponent(resp.page_id, resp.id));
        }
      });
      return next(action);
    case DESTROY_COMPONENT:
      call({
        dispatch,
        request: destroyComponent(action.component),
        loading: ['component', 'Destroying component...'],
        success: resp => {
          dispatch(removeComponent(resp.page_id, resp.id));
          dispatch(removeEntity(normalize(resp, component)));
        }
      });
      return next(action);
    default:
      return next(action);
  }
};

export default ComponentMiddleware;