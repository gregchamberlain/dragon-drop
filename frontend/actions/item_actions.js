
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVEITEM';
export const UPDATE_PROPS = 'UPDATE_PROP';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const addItem = (component, props) => ({
  type: ADD_ITEM,
  component,
  props
});

export const removeItem = i => ({
  type: REMOVE_ITEM,
  i,
});

export const updateProps = (i, props) => ({
  type: UPDATE_PROPS,
  i,
  props,
});

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

window.receiveItems = receiveItems;
