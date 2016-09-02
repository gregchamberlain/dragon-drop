export const RECEIVE_ENTITY = 'RECEIVE_ENTITY';
export const REMOVE_ENTITY = 'REMOVE_ENTITY';
export const CLEAR_ENTITIES = 'CLEAR_ENTITIES';

export const receiveEntity = resp => ({
  type: RECEIVE_ENTITY,
  resp
});

export const removeEntity = resp => ({
  type: REMOVE_ENTITY,
  resp
});

export const clearEntities = () => ({
  type: CLEAR_ENTITIES
});
