export const RECEIVE_ENTITY = 'RECEIVE_ENTITY';
export const REMOVE_ENTITY = 'REMOVE_ENTITY';
export const LOADING_ENTITY = 'LOADING_ENTITY';

export const receiveEntity = resp => ({
  type: RECEIVE_ENTITY,
  resp
});

export const removeEntity = resp => ({
  type: REMOVE_ENTITY,
  resp
});

export const loadingEntity = entity => ({
  type: LOADING_ENTITY,
  entity
});
